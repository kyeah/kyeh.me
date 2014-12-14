---
layout: post
title: Elective Freedoms
---

->![Rainbows and Happiness](http://blog.mailchimp.com/wp-content/uploads/2011/03/happy-rainbow.jpg)
</br>
__Pictured: How I feel right about now.__<-

I've reached the Promised Land. I've seen the skies at the top of the mountain and felt the eager sun on my skin, where once there lay only the cold.  I've climbed the peaks and looked down from where I fought, finding nothing but heavy hearts and sorrowed minds from those who now follow in my footsteps.


- I've reached the last year of my bachelor's degree.
</br>
- I've completed the last of my required courses. 
</br>
- I've started the first year of my integrated master's.


With my newfound seniority and honors student powers combined, I was given the freedom to choose my courses this past semester based solely on my academic interests, without any thought to waitlists, pre-requisites, or painful degree requirements. The resulting semester was one of the most enriching experiences of my short and ongoing life, and I've picked up on an abundance of practical skills that I'm eager to expand on and propel into the stratosphere as I near the final year of my academic career and delve deeper into the technical areas that really pique my interest.


Up until now, the courses I've taken have felt like an exercise in reproducing results, and though they've carried valuable learning experiences in systematic and algorithmic structure, few have left me with a sense of accomplishment for creating something entirely my own, from the initial idea, to the design, framework, and implementation. Courses that break the norm and focus on the developmental process, allowing students to determine a need and act on a solution with the guidance of experienced researchers and industry professionals, are deeply enriching for students with a desire to learn beyond the classroom and make an actual impact on the communities they care about. Though I've taken project-based courses in the past ([Genetic Fractals](https://github.com/kyeah/genetic-fractals), [Super Ogre Ball](https://github.com/kyeah/super-ogre-ball)), I have never felt as sure of my interests and values in computer science as I did during the past semester.


All of my classes for the semester revolved around large, open-ended projects, giving me and my peers a ton of creative freedom to explore our interests and make meaningful, practical applications that solve the types of problems that we were passionate about solving. 


Following is a list of courses that were taken:


- __Computer Vision and 3D Reconstruction__
- __Physical Simulation and Animation in Computer Graphics__
- __Automated Q&A with IBM Watson__
- __Wireless Networking__


There is something uniquely satisfying about ending the semester and feeling like you've only begun, and each of these courses have given me an in-depth understanding of the field at large along with the modern techniques and approaches for solving current issues -- enough to continue personal studies without academic guidance. I won't recite the old give-or-teach fishing story here, but it seems eerily applicable, and though I'll certainly be eating for a lifetime, I wanted to take a look back at the feasting (...sorry) I've had this semester.


<h3-dark style="color: #DB6837">Computer Vision</h3-dark>

<center>
<video autoplay loop preload="auto" poster="http://thumbs.gfycat.com/IdealTatteredAtlanticblockgoby-poster.jpg">
       <source src="http://zippy.gfycat.com/IdealTatteredAtlanticblackgoby.webm" type="video/webm"></source>
</video>


<video autoplay loop preload="auto" poster="http://thumbs.gfycat.com/SparseGloriousArabianwildcat-poster.jpg">
       <source src="http://zippy.gfycat.com/SparseGloriousArabianwildcat.webm" type="video/webm"></source>
</video>
</br>
<b><a href="https://github.com/kyeah/Nomad">Nomad</a>: A 2D Motion Tweening and 3D Augmented Reality System.</b> 
</center>


If you had asked me ten years ago what my job would be, I would have given you a straight answer: animator, period. I grew up watching Disney and Pixar films, and despite my poor artistic talents, it was inspiring to see animation studios like Blue Sky, DreamWorks, and the top dogs themselves bring characters to life on screen and coax out emotions that I couldn't even get watching real people in real situations.


When Pixar came out in 2012 with a proof-of-concept animated short called [Paperman](http://www.dailymotion.com/video/xzt3vb_paperman_shortfilms), using the in-house R&D system [Meander](https://www.youtube.com/watch?v=OKl9mpGMCiA), it re-ignited my interest in their graphics, vision, and animation technology, which made it easier for people with actual artistic abilities to instill cold, robotic models with warmth and livelihood. They described Meander as a system that let you "draw in 3D" using state-of-the-art computer vision, and when it was finally time to come up with a final project for the practical computer vision course in November, I knew exactly what I wanted to do.


The format of the new course was nearly perfect. Taught by adjunct professor and Street View Googler Bryan Klingner, half of the course is a theoretical run-down and practical implementation of the core underlying algorithms and intuitions behind the majority of modern computer vision problems and solutions. The other half involves extensions of these core methodologies to solving practical, real-world problems -- problems that have been solved by modern research labs, and by the Street View team themselves, by adapting these core algorithms to suit their problem definitions.


The course was refreshingly practical and an unexpected eye-opener. The computer vision field is still wide open for new breakthroughs, and the publications that are coming out, though flowered with heavy vocabulary, all stem from the same intuitive methodologies that were put forth decades ago. CV is not a mystical art; the wealth of AR modules, face-recognition applications, and 3D scanners built this semester are a testament to that. All you need are the basic tools, and a little intuition.


<h3-dark style="color: #DB6837">Physical Simulation and Animation</h3-dark>

<center>
<video controls autoplay loop preload="auto" poster="/img/projects/cloth-poster.png" style="max-width:90%">
       <source src="/img/projects/cloth.webm" type="video/webm"></source>
</video>


<video controls autoplay loop preload="auto" poster="/img/projects/fluids-poster.png" style="max-width:90%">
       <source src="/img/projects/fluids.webm" type="video/webm"></source>
</video>
</br>
<b><a href="https://github.com/kyeah/Cloth-Fluids-Solver">Physical Simulation</a>: Solving Cloth and Fluid Systems.</b> 
</center>

Heavily related to the Pixar dream, yet much more difficult to conceptualize, is physical simulation. This is simultaneously one of the most rewarding and frustrating topics in computer science, because many physical equations are derived using lies, estimations, and assumptions, leading to program instabilities and a reliance on questionable eye tests to determine whether the simulation is "right enough."


Nevertheless, the magic of Hamilton's Principle, combined with a good intuition for developing physical energy models and discretizing surfaces, will lead you well into the realm of stable realistic simulations that are also <i>incredibly fun to look at.</i> Just make sure you triple check your derivations, and try not to make any coding mistakes.


<h3-dark style="color: #DB6837">Automated Q&A with IBM Watson</h3-dark>


->![Atlas Q&A Poster](/img/projects/atlas.png)
__[Atlas](https://github.com/kyeah/Watson-Code-Search-Intellij): An industrial Q&A backend serving precise, natural-language answers on technical documentation for company developers.__<-

A major highlight of this semester was the Automated Q&A course taught by CS departmental chair Bruce Porter, one of several courses sponsored by IBM Watson amongst seven different universities. The results speak for themselves: a mobile 211 service backed by United Way/HHSC and slated for Austin and Texas state pilots, and an industrial technical documentation system backed and funded by Atlassian. 


With IBM Watson experts and startup moguls from the Austin tech scene providing constant feedback, criticism, and technical knowledge regarding consumer applications, business plans, effective marketing and execution, and the Watson system, the class evolved into an unexpected crash course on building certified UT startups.


<h3-dark style="color: #DB6837">Wireless Networking</h3-dark>

->![](/img/projects/liteturn-splash.png)
__[Liteturn](https://github.com/kyeah/liteturn): Automated, Gesture-Controlled Cyclist Turn Lights using Cheap and Efficient Consumer Devices.__<-

This course marked my introduction into the world of hardware and wearable technology, sparking an interest in the combination of hardware and software in physical, real-world scenarios. You can read my previous post, [Hardware Hacking](/2014/10/19/hardware-hacking/), for my initial thoughts on the other side of the proverbial coin.


<h3-dark style="color: #DB6837">Saying Goodbye</h3-dark>


As I look ahead to my final undergraduate semester, I find myself with more elective bliss:

- __Natural Language Processing__
- __Artificial Intelligence: Honors__
- __Open Source Software Engineering__
- __Automated Logical Reasoning__
- __Automated Q&A Continuation with Atlassian__

And though the topics and projects of fall's courses were some of my personal favorites, it's time to say goodbye, at least until my next personal escapade.

![Goodbye](http://vimyridgehistory.com/wp-content/gallery/seeing-the-boys-off/248067a3-ef3e-4a65-9696-63baca033a63-A20450.jpg)