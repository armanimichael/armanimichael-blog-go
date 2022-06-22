+++
categories = ["Web"]
date = 2022-06-22T21:43:26Z
description = "Some thoughts about JavaScript as a widely popular language"
draft = true
pinned = false
series = []
tags = ["programming languages"]
title = "JavaScript flexibility curse"

+++
## My first encounter with JS

The first time I ever touched JavaScript was in High School, **it was not a pleasant experience.**

Our professors figured a good way of improving the learning experience was letting us create a **video game**. That doesn't sound that bad, does it? Me and my friends had the same idea at first.  
Things started going downhill as soon as we started, in practice we were not given any direction on anything. We didn't know anything about the language, nor about game development.

The only thing they provided us with was the library, [Phaser](https://phaser.io/ "Phaser"). Which is a great library by the way, if you're into game development and the Web you should totally check it out!

Now, I know what people may think. You were in a tech school, messing around should have been enough to solve my problems.  
In fact, that's what me and my team did. We came from C#, and I had some knowledge of Python, we were no strangers to programming concepts.

The fact was, **JavaScript seemed to allow us to do pretty much anything**. You wrote some messy function and it run.  
I mean... Perhaps, it acted funny because of `null` or `undefined` values, or having weird behaviors related to the incorrect use of `this` - but most of the times it didn't completely explode before our eyes.

Our project consisted in **massive and complexly structured files** containing our game logic.

I remember our code used [Object Constructors](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/constructor), which is not a bad thing, but we didn't honestly knew what we were doing.  
For instance, I remember we had problems in instantiating new objects representing a game enemy. I don't recall what was the problem there, but it was surely something straightforward for any person familiar with JS.

To be clear, I ended up having the max grade. But not because I wrote a great project, with good logic implementation, mantainable and performant. It was merely because it worked in a way or the other, and that was apparently sufficient. Go figure.

## A tormented language history

We can say JavaScript was born in a rush. [Brendan Eich](https://en.wikipedia.org/wiki/Brendan_Eich ), the original creator of JS, developed it in just 10 days!

JavaScript was born at **the end of 1995**. To put this in prospective the [WWW](https://home.cern/science/computing/birth-web) was firstly **released to the public in 1991**, and released as **open software in 1993**.

### Nope, it's not Java

At this point in time, the language name was **Mocha**. They later had the bad idea (in my opinion - and I'm not the only one thinking the same) of calling the language **JavaScript**.

The name was mostly a marketing strategy to attract developers.  
You see, Eich developed JS for [Netscape](https://en.wikipedia.org/wiki/Netscape) to **address the static pages limitation** they had at the time.  
Since **Java** was going strong at the time, they thought it was a great idea to go with that name. **Needless to say, this causes misunderstandings to this day.**

Fortunately, with the growth of the infant JavaScript, the [ECMAScript](https://en.wikipedia.org/wiki/ECMAScript) was created to ensure a common standars for different browsers to implement.  
**There are many people preferring ECMAScript to JavaScript when referring to the langauge,** as it is the name of the language standard specification.