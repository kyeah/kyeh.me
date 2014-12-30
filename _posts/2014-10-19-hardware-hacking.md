---
layout: post
title: Hardware Hacking
excerpt: "

Ever notice an odd trend when watching hackathon closing ceremonies? Hardware hacks dominate the domain. With four of the top five hacks at BoilerMake ‘14 involving a heavy dosage of physical hardware, along with the majority of the HackTX top 10 winners, it seems more and more people are looking at mobile and wearables as the next pervasive technology of the future -- finding ways to take the experience out of the screen and have users interact with the physical world around them. This sentiment was only proven further with this year’s available hardware listing for HackTX: Arduinos, Spark Cores, Leap Motions, Samsung wearables, Myos, and Oculus Rifts all made it out to Austin’s favorite annual hackathon. With this in mind, a large number of hackers made it their duty to utilize these products in the hacks they put out on Sunday, and three big hardware teams came out on top, including mine -- LiteTurn, the gesture-controlled cyclist turn lights with Myo, Spark Core, and Android GPS bearings.

"
---

![HackTX 3rd Place Medal](/img/blog/hacktx-medal.png)


Ever notice an odd trend when watching hackathon closing ceremonies? Hardware hacks dominate the domain. With four of the top five hacks at BoilerMake ‘14 involving a heavy dosage of physical hardware, along with the majority of the HackTX top 10 winners, it seems more and more people are looking at mobile and wearables as the next pervasive technology of the future -- finding ways to take the experience out of the screen and have users interact with the physical world around them. This sentiment was only proven further with this year’s available hardware listing for HackTX: Arduinos, Spark Cores, Leap Motions, Samsung wearables, Myos, and Oculus Rifts all made it out to Austin’s favorite annual hackathon. With this in mind, a large number of hackers made it their duty to utilize these products in the hacks they put out on Sunday, and three big hardware teams came out on top, including mine -- LiteTurn, the gesture-controlled cyclist turn lights with Myo, Spark Core, and Android GPS bearings.

<div class="videoWrapper">
     <iframe width="100%" height="315" src="//www.youtube.com/embed/QdmPOHyUchk" frameborder="0" allowfullscreen></iframe>
</div>

I don’t know a thing about hardware. I didn’t understand how breadboards worked two days ago. I was half expecting our NeoPixel LED ring to fry itself in a passionate fit of flames when I connected power to the voltage pin. But I had a problem, and there weren’t any satisfactory solutions on the market, so I set out to build one. It wasn’t the most complicated circuitry in the world -- three wires from the Spark Core to our LEDs, a Myo strapped to your arm, and a companion Android app to bring it all together. I saw an impressive number of hacks tabling that easily could have outranked us in the technical department, and to see our tiny wireless light switch rise to the top was unexpected, to say the least. Perhaps it’s the sensibility of Austin’s large bicycling population that appealed to this year’s judges, but bicycle safety has certainly been a hot topic in this city, and I’m glad to see it garner a ton of support.


<h3-dark style="color: #DB6837">Lighting Up</h3-dark>


Our hack involved three major components to work properly as a fully-functional product. The first component was grabbing gesture and orientation data from the Myo to detect when the user signals for a turn. Although Myo gestures (FIST, FINGERS SPREAD) were interesting to use as a filter to prevent false positives from coming through, we found that the orientation data itself was a good enough indicator of the user’s intentions, and noisy data could be filtered by delaying the signal until they’ve held the position for a short time. As a result, this step could be done at a much lower cost by using any sort of existing consumer smart watch or armband that the user already wears with less overall bulk. In fact, you could strap a phone to your wrist and achieve the same general effect!


The second component involved hooking a Spark Core up to a Neopixel 24-LED RGB ring and providing a simple web API to send commands. This was something that we were skeptical about at the start, but as it turns out, hardware is easy! At least, hooking up an LED is a piece of cake. Since the Spark Core requires a WiFi connection, this could easily be cost-reduced while saving a ton of battery power by replacing it with a simple micro-controller and bluetooth chip to pair directly with the user’s phone. To work around this limitation at HackTX, we connected to the 4G network and set up a wireless hotspot for the core to connect to.


![Liteturn Spark Module](/img/blog/liteturn_spark.png)


The last component was the companion Android app, which brought both pieces together and added a few extra bells and whistles along the way. Using GPS location bearings, we were able to determine when the user makes a turn or u-turn -- this is not the same technique that Google uses in Maps. Instead of combining accelerometer and magnetometer sensors, we used GPS location changes to detect bearings. This doesn’t quite work in short distances, but the large distances traveled on bicycles makes it a perfect fit, with the added benefit that small, sudden turn changes won’t affect our turn readings (e.g. if the user rides around the car in front of them). With a Bluetooth 4.0 connection opened to the Myo, a 4G connection serving a WiFi hotspot for the core, and GPS readings being taken for bearing information, this app became a huge battery drain. However, as previously mentioned, components can be swapped out to make this much more user friendly and feasible.


![Liteturn Controller Module](/img/blog/liteturn_app.png)


The hack as a whole turned out quite well, with our only regret being the lack of calibration that went into body rotations for detecting arm gestures. Without an adjustment made to yaw in respect to the user’s bearings, the gesture recognition was limited to only a single facing direction. However, with bearings already being provided by GPS, it would be fairly painless to add support for this to have a fully usable product strapped to our bikes. I will certainly be spending a lot more time tinkering with jumper wires and micro-controllers, and perhaps you’ll see a new and improved LiteTurn pop up at some point in the near future...


<h3-dark style="color: #DB6837">Links</h3-dark>


Come check out our hack at [LiteTurn](https://github.com/kyeah/LiteTurn)! We'd love to hear your feedback.
  </br>
__Update:__ CS 386W Best Research Project: [Research Paper](/img/projects/liteturn-final.pdf) and [Presentation](/img/projects/liteturn-pres.pdf).