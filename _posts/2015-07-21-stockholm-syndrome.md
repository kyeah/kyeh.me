---
layout: post
title: Stockholm Syndrome
subtitle: Falling in Love with a Compiler

excerpt: "To those interested in a quick, concurrent language that won't take any of your unsafe shit, this is for you."
---

<center><img src="http://www.rust-lang.org/logos/rust-logo-blk.svg" /></center>

<center>To those interested in a quick, concurrent language,</center>

<center>that won’t take any of your unsafe shit,</center>

<center>this is for you.</center>

Rust is a young language, but it brings a matured set of companions that have, up until now, foregone backwards compatibility. It’s undergone massive changes to make Rust as a whole **faster**, **safer**, more **concurrent**, and more **usable** for an industry that knows, quite intimately, the pains of choosing two or three out of four.

The Rust compiler is your designated driver. **It’s your most responsible friend** -- the one who’s right on all accounts time and time again, no matter how right you think you are. It knows better than you, and isn’t afraid to save you from yourself. It knows when you release referenced memory, and stops it from becoming a use-after-free segfault. It knows when you’re introducing data races, **and it won’t take that shit**.

Thanks, friend.

The Rust language is your closest companion.  It’s been with you through all the hard times of developing in C, Ruby, Python...the works. It knows your biggest likes and dislikes, and knows what makes you happy. It knows how you like to work, and does its best to make that a reality -- to bring down the productivity barriers of obfuscated syntax and outdated logic and give you, the developer, the power to control low-level semantics with higher-level functional syntactics.

And Cargo?

Cargo is the hardworking friend. It knows what you want and it does it, no strings attached. It gets your dependencies and deals with all the Makefile grease so you don’t have to. In fact, it's working on a way to get rid of Makefiles entirely. Building a release? You bet it’ll optimize it. And you know what? No complicated YAML, no tedious JSON. It's pure, clean TOML configs, because we trust cargo to understand what we need without verbosity.

Rust as a movement has a lot going for it. Steve Klabnik associates the language's success to be due to two things: it's tools and it's community. It's not hard to see why: Rust is a bit unusual as a language, and with such a large learning curve to programming productively in Rust, the motivation to learn falls heavily on the intuitiveness of its build tools, combined with the friendliness and attentiveness to usability and documentation that both the core team and the community have exemplified so far.

Understanding the underlying mechanics guaranteeing memory and thread safety in Rust is a complicated matter, but the team and community have made it as easy as possible to get started with writing programs, building libraries, generating documentation, and getting the information that you need as efficiently as possible. Along with the tools, there has been an outpour of support from the community towards newcomers, and some of the most helpful and detailed resources have come straight from community blog posts and tutorials that shed light on the innards of how rust is implemented.

Another great fact? Rust is implemented in rust and is a bastion of great examples for how rust should be used.

I can't tell you why you should use Rust, but I can tell you why I use it, and why it's slowly becoming one of my favorite languages.

<center>

<b>WHY RUST?</b>
</br>
<a href="http://kyeh.me/img/projects/mongo-rust-driver.html">The New MongoDB Rust Driver @ Rust NYC (Extended)</a>

<b>JOIN THE MOVEMENT</b>
</br>
<a href="https://doc.rust-lang.org/book/">The Rust Book</a>
</br>
<a href="http://manishearth.github.io/blog/2015/05/27/wrapper-types-in-rust-choosing-your-guarantees/">Wrapper Types in Rust: Choosing Your Guarantees</a>
</br>
<a href="http://blog.burntsushi.net/rust-error-handling/">Error Handling in Rust</a>
</br>
<a href="http://huonw.github.io/blog/2015/02/some-notes-on-send-and-sync/">Some Notes on Send and Sync</a>
</br>
<a href="https://danielkeep.github.io/practical-intro-to-macros.html">A Practical Intro to Macros in Rust 1.0</a>

<b>CONTRIBUTE</b>
</br>
<a href="https://github.com/mongodbinc-interns/mongo-rust-driver-prototype">Mongo Rust Driver Prototype</a>
</br>
<a href="https://github.com/zonyitoo/bson-rs">Bson-rs</a>
</br>
<a href="https://github.com/saghm/rustball">Rustball</a>