---
layout: post
title: Seeing Threes at the End of the Road
---

![Blastro Trio](/img/blog/blastro_trio.png)

<h5-dark style='border-bottom:1px solid #aaa'>
    </br>
    __Update:__ The [Blastro](https://play.google.com/store/apps/details?id=com.blastro.android) Blastro&comma; [Roxwel](https://play.google.com/store/apps/details?id=com.roxwel.android)&comma; and [Yallwire](https://play.google.com/store/apps/details?id=com.yallwire.android) apps have been released&period; Come celebrate with us&period;
</h5>


  | We made it&period; It&apos;s happening&period; Blastro Networks is finally ready to release their
  | redesigned&comma;
  | rejuvenated android apps&comma; due in large part to the work I did over the summer&comma; and also to the
  | less frequent work I&apos;ve done over the last few school months&period; Although I have my reservations
  | about a few of the design choices made by the company&comma; I understand the immense amount of planning that
  | occurs behind the scenes to keep all of their web and mobile apps behaving homogeneously and at a
  | high level of polish&period; Nevertheless&comma; they put a lot of faith in my ability as a novice Android
  | developer at the time of my hiring&comma; and I was blessed with an opportunity to lead the redesign and
  | rebuilding of their three flagship apps as their sole developer&period;
  br
  br
  | Having come this far&comma; I&apos;ve learned a ton of things about the Android platform&comma; and I&apos;ve been
  | constantly impressed by the huge amount of support from third-party developers&comma; who provide
  | libraries that make complex tasks easy to implement and efficient to run&period; As an
  | Android-developer-in-training&comma; I would often revise old&comma; deprecated code from the older Blastro
  | app to make it cleaner and more efficient&comma; only to realize that a library introduced in the past
  | year was perfect for the job and could be integrated with just a few adjustments to the existing
  | code base&period; Although it was disappointing to realize the last few hours of work were unnecessary&comma;
  | it ultimately allowed me to understand the Android lifecycle and architectures much more clearly&comma;
  | and you know what they say &ndash; you shouldn&apos;t use a tool unless you know how it works&comma; or you&apos;ll be
  | tearing your hair out when problems arise&period;
  br
  br
  | A lot of the UI flow I was asked to implement by my technical advisors involved modifying standard
  | Android and third-party classes&comma; and my past failures and successes working at an unnecessarily
  | low level made it easy to understand how these classes interacted with the Android state and what
  | their limitations were&period; While modifying the MediaController class to provide a custom video player
  | controller&comma; I was surprised by some of the haphazard logic in the standard controller&comma; and had to
  | fix several bugs regarding video connections and the play-pause state that occurred whenever the
  | surface state was changed &ndash; an event triggered by things like orientation changes and keyboard
  | layout accommodations&period;
  br
  br
  | One of the biggest challenges was modifying ListViews and GridViews to get the proper behavior to
  | take place on the main artist and video browsers&comma; where a single list holds sorted list results&comma; a
  | large carousel of featured items&comma; and a scrolling&sol;sticky button bar&comma; all interconnected but with
  | different behaviors and layout needs from within the view&period; You can note one glaring problem with
  | my solution in grid mode&comma; where the GridView will often recycle the carousel view and not be able
  | to recognize its need to be redrawn&period; However&comma; these types of graphical issues only seem to crop up
  | on certain devices&comma; such as the Galaxy SIII&comma; and a lot of care was made to limit fragmentation
  | issues before release&period;
  br
  br
  | Although portions of the UI flow were requested by my advisors&comma; the UI design itself was decidedly
  | in my hands&comma; and they trusted me to bring an updated Holo style to their apps while retaining an
  | overall feel similar to the iOS app&period; The first rough version of the app followed the iOS app very
  | closely&comma; but as I grew more comfortable with Android design patterns and the way resources are
  | interconnected&comma; I was able to develop my own custom styles for various portions of the app and
  | remodel its look and feel to be snappier and more eye-catching&period;
  br
  br
  | Overall&comma; I&apos;m happy with the way the apps came out&comma; and I was able to dip myself into almost every
  | aspect of the Android app lifecycle &ndash; networking&comma; efficient storage and display of data&comma;
  | synchronization of account data&comma; UI design and flow&comma; third-party library integration &lpar;including
  | social media and ads&rpar;&period;&period;&period;
  br
  br
  | Look out for the new-look Blastro&comma; Roxwel and Yallwire on the Google Play Store soon&comma; and get
  | pumped for eventual Chromecast support&period;