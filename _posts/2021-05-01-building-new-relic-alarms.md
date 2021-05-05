---
layout: post
title: Building New Relic Alarms

summary: "How alarms work in New Relic."
---

In recent months, New Relic has made leaps and bounds in supporting the observability features that users have requested for years. Their unified product, New Relic One, has seen constant iterations and improvements, and they're slowly shedding away their market identity as part of the old and outdated guard of monitoring tools.

At the same time, their tooling often appears with quirks and missing gaps, glaring for folks who have come from other tools like Grafana or Splunk. Building alerts in New Relic, to me, has always been a bit clunky — with lots of barriers and snags in the way of the metrics I care about.

In order to properly approach the design of a New Relic alert, I've found that it's important to understand the way it's been built. A lot of concepts are familiar to other monitoring and alerting systems, but subtle nuances can make an outsized impact on the overall behavior of an alert, affecting how quickly your team can triage and respond to issues. And some limitations mean that certain types of alerts, for certain types of systems, aren't feasible at all.

# Anatomy of an Alarm

A New Relic alarm is built on top of a New Relic data query, written in NRQL, which outputs a single value. This query is run on a periodic basis, and when the conditions of an alarm are met, the alarm notifies PagerDuty.

## Aggregation Windows

Aggregation windows (AW) describe how often the query runs, and on how large of a dataset. When an alarm sounds, you’ll find that the AW defines the TIMESERIES attribute, e.g.

  `TIMESERIES 5 MINUTES` for a window of 5 minutes.

<img src="/img/blog/2021-05-1-building-new-relic-alarms/nr-alarm-1.png" style="display: block; max-width: min(500px, 100%);margin: 0 auto;"/>

## Evaluation Offset

The evaluation offset (EO) of an alarm describes the number of aggregation windows that we wait before evaluating the query. Although this delays the query, it also allows us to wait in case data is slow to come into New Relic. When an alarm sounds, you’ll find that the EO defines the SINCE/UNTIL attribute, e.g.

  `SINCE 10 MINUTES AGO UNTIL 5 MINUTES AGO`.
  
<img src="/img/blog/2021-05-1-building-new-relic-alarms/nr-alarm-2.png" style="display: block; max-width: min(500px, 100%);margin: 0 auto;"/>
  
New Relic recommends waiting 3 minutes for data; the exact value of the recommended EO will depend on your aggregation window.

Some example combinations of AW/EO and their resultant queries:

|Aggregation Window (AW)|Evaluation Offset (EO)|Query|
|--------|---|---|
|1 minute | 1 | TIMESERIES 1 MINUTE <br> SINCE 2 MINUTES AGO <br> UNTIL 1 MINUTE AGO|
|1 minute | 2 | TIMESERIES 1 MINUTE <br> SINCE 3 MINUTES AGO <br> UNTIL 2 MINUTE AGO|
|10 minute | 1 | TIMESERIES 10 MINUTES <br> SINCE 20 MINUTES AGO <br> UNTIL 10 MINUTES AGO|
|10 minute | 2 | TIMESERIES 10 MINUTES <br> SINCE 30 MINUTES AGO <br> UNTIL 20 MINUTES AGO|

## Warning and Critical Thresholds

The **threshold**, **threshold duration** and **threshold occurrences** define the conditions upon which, after evaluating the NRQL data query, the alarm will sound if met.

- The **threshold** is a value that is compared to a single aggregation window’s query value. This determines whether a single window has violated the condition, in conjunction with the **operator** (describing whether violations are “above” or “below” the threshold.)

<img src="/img/blog/2021-05-1-building-new-relic-alarms/nr-alarm-4.png" style="display: block; max-width: min(500px, 100%);margin: 0 auto;"/>

- The **threshold duration** determines how many aggregation windows are evaluated at once.

<img src="/img/blog/2021-05-1-building-new-relic-alarms/nr-alarm-5.png" style="display: block; max-width: min(500px, 100%);margin: 0 auto;"/>

- The **threshold occurrences** determine how all of the aggregation window violations, together, combine into a single alarm violation. This can either be:
  - **at\_least\_once** - If any window is violating the condition, the alarm sounds.
  - **all** - If all windows violate the condition, the alarm sounds.

<div style="display:flex">
    <div style="flex:1"><img src="/img/blog/2021-05-1-building-new-relic-alarms/nr-alarm-6.png"></div>
      <div style="flex:1"><img src="/img/blog/2021-05-1-building-new-relic-alarms/nr-alarm-7.png"></div>
</div>

These values map directly to this UI:

![](/img/blog/2021-05-1-building-new-relic-alarms/nr-ui.png)

Critical: query equals **[operator]** 100 **[threshold]** for at least **[occurrences]** 60 minutes **[duration]**

Keep in mind how quickly an alarm starts and resolves based on the occurrence setting. **at least once** will trigger more quickly, but will take longer to resolve; while **all** will trigger more slowly, but be quicker to resolve.

Some examples:

|Aggregation Window|Condition|Alarm sounds when...|Alarm resolves when...|
|---|---|----|---|
|15 min|Query equals 100 for at least 60 minutes|Query equals 100 every 15 minutes for 60 minutes (4 windows)|Query is not equal to 100 in the last 15 minutes|
|1 min|Query above 5% for at least 5 minutes|Query above 5% every minute for 5 minutes (5 windows)|Query is below 5% once in the last minute|
|5 min|Query above 5% at least once in 5 minutes|Query is above 5% once in the last 5 minutes (1 window)|Query is below 5% once in the last 5 minutes|

# Limitations

Two notable limitations exist here:

- The maximum aggregation window is [15 minutes](https://discuss.newrelic.com/t/alerting-on-spotty-metrics-possible-to-increase-aggregation-window-times/117331/2).
- The maximum threshold duration is two hours.

This means that New Relic alarms, out of the box, can only manage queries that work on data from within **the last two hours**, and data aggregation (e.g. averages, percentages) for a single window can only aggregate up to **15 minutes at a time**. 

This makes New Relic Alerts a useful tool for **spikes** and **short-term trends**, but not for **long-term trend detection**.

An example of a bad use case for the out-of-the-box functionality would be detecting an elevated error rate over the weekend. An application that receives much less activity over the weekend results in data that is more spotty and alarms that are subsequently less reliable. 

One may consider trying to collect data over a larger period of time to compensate. However, you would only be able to collect data over 2 hours, and would need to rely on consistent patterns across a series of 15 minute intervals.

In order to alarm on larger aggregated queries (e.g. over the last 12 hours), we would need to implement an out-of-band solution to run NRQL queries periodically and insert the results as custom New Relic events, which could then be used as the data source for alarms. e.g.

![](/img/blog/2021-05-1-building-new-relic-alarms/out-of-band-pipeline.png)

# Understanding Gaps and Missing Data

By default, any aggregation window that is missing data will return a NULL value. A NULL value will not cause the New Relic alarm to close automatically. **This is important to consider when designing your query**.

Notably, “missing data” [also applies](https://discuss.newrelic.com/t/relic-solution-how-can-i-figure-out-when-to-use-gap-filling-and-loss-of-signal/120401) to any NRQL query that returns a count, percentage, etc. _if there is no data after the WHERE query_. For example, given this query:

```SQL
SELECT count(*) FROM TransactionError 
WHERE transactionName LIKE '%submit%'
```

If, after resolving the `WHERE` query, there is no data for the aggregation window, _the SELECT count(*) is never executed_. Instead of returning a zero value from `count(*)`, a `NULL` value is returned. That means that the associated alarm will never close automatically.

## Query-Based Solutions

In these cases, you should consider using a `filter` query in the `SELECT` statement so that it’s always run.

```SQL
SELECT filter(count(*), WHERE transactionName LIKE '%submit%')
FROM TransactionError
```

## Fill-Based Solutions

If you need to use a query like this for a New Relic alarm, you can set the fill_option to provide a non-NULL value for windows with missing data.

- **static** - return a static value like 0 instead of NULL.
- **last_value** - return the value from the previous aggregation window.

## Time-Based Solutions

Alternatively, you can set the **expiration_duration** or the **violation_time_period** so the alarm is closed based on a time duration.

- **expiration_duration** defines how long to receive “missing data” until we close the violation.
- **violation_time_period** is a more heavy-handed approach that automatically closes any open incident after the time period, regardless of whether we are receiving data or not.

To decide the duration, consider how often you expect the alarm to go off and how quickly we need to take a look at the issue. 

- If an issue is temporary, like elevated error counts, someone should take a look quickly. Keep a smaller duration so we can be alerted if it happens again. 
- If an issue is ongoing, like a specific error has occurred, someone should remediate eventually. Use a longer duration.

# Recommendations

## Pick your aggregation window

The aggregation window you choose will impact the rest of your alarm configuration. In common scenarios, smaller is better — but only if your data is frequent enough to be meaningful in small intervals at all hours of the day. If you only receive 5 requests a minute during U.S. off-hours, you may consider:

- increasing your aggregation window to evaluate more data at once
- creating two separate alarms — one with a high threshold for a small amount of data, and one with a smaller threshold for a larger amount of data.

## Clamp spotty metrics

When data is inconsistent or low at certain periods of the day, you may consider requiring a minimum amount of data for your alarm to trigger. Unfortunately, [it's not currently possible](https://discuss.newrelic.com/t/alerting-based-upon-multiple-related-conditions/30184) to define an alert based on multiple conditions.

Instead, a clever (and somewhat confusing) workaround is to clamp your metric to zero when it doesn't meet the minimum threshold of data:

Normally:
```
SELECT error_rate FROM ...
```

With Clamping:
```
SELECT (
  error_rate *
  clamp_max(
    floor(uniq_session_count / minimum_threshold), 
    1
  )
) FROM ...
```

This bit of math flattens out any spikes that exist due to a small number of data points within a given aggregation window. The line in blue below indicates the data points kept:

![](/img/blog/2021-05-1-building-new-relic-alarms/nr-overlay.gif)

## Consider out-of-band workflows

With clamping, you may solve the issue of noisy alerts, but miss certain patterns that were previously captured in periods of low or inconsistent traffic.

In these cases, the only option available is to build out an out-of-band workflow. An example use case is to generate error-rate alarms for low-traffic APIs, where a single endpoint may have only a few requests per minute or hour.

An out-of-band workflow might generate custom New Relic events every 10-15 minutes via a scheduler like Github Actions, calculating the error rate for the last 30-100 requests. In this way, you can build a "sliding-window" indicator that can be graphed and alerted on if it ever rises above an abnormal amount.

## Keep experimenting

At the end of the day, alarms are only as good as the results you get out of them. Knowing the tools that you're working with is only one part of creating and tuning alarms — the other is knowing your system and being able to express what you need to monitor in human terms.