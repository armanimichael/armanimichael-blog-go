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

Our professors figured a good way of improving the learning experience was to let us create a **video game**. That doesn't sound that bad. I and my friends had the same idea at first.  
Things started going downhill as soon as we began to, in practice we were not given any direction on anything. We didn't know anything about the language, nor about game development.

The only thing they provided us with was the library, [Phaser](https://phaser.io/ "Phaser"). Which is a great library by the way, if you're into game development and the Web you should check it out!

Now, I know what people may think. You were in a tech school, messing around should have been enough to solve my problems.  
That's what I and my team did. We came from C#, and I had some knowledge of Python, we were no strangers to programming concepts.

The fact was, that **JavaScript seemed to allow us to do pretty much anything**. You wrote some messy function and it run.  
I mean... Perhaps, it acted funny because of `null` or `undefined` values, or having weird behaviors related to the incorrect use of `this` - but most of the time it didn't wholly explode before our eyes.

Our project consisted of **massive and complexly structured files** containing our game logic.

I remember our code used [Object Constructors](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/constructor), which is not bad, but we didn't honestly know what we were doing.  
For instance, I remember we had problems instantiating new objects representing a game enemy. I don't recall what was the problem there, but it was surely something straightforward for any person familiar with JS.

To be clear, I ended up having the max grade. But not because I wrote a great project, with sound logic implementation, maintainable and performant. It was merely because it worked in one way or the other, and that was sufficient. Go figure.

## Story Time!

We can say JavaScript was born in a rush. [Brendan Eich](https://en.wikipedia.org/wiki/Brendan_Eich ), the original creator of JS, developed it in just 10 days!

JavaScript was born at **the end of 1995**. To put this in perspective the [WWW](https://home.cern/science/computing/birth-web) was firstly **released to the public in 1991** and released as **open software in 1993**.

### Nope, it's not Java

At this point, the language name was **Mocha**.  
They later had the bad idea (in my opinion - and I'm not the only one thinking the same) of calling the language **JavaScript**.

The name was mostly a marketing strategy to attract developers.  
You see, Eich developed JS for [Netscape](https://en.wikipedia.org/wiki/Netscape) to **address the static pages limitation** they had at the time.  
Since **Java** was going strong at the time, they thought it was a great idea to go with that name. **This causes misunderstandings to this day.**

Fortunately, with the growth of infant JavaScript, the [ECMAScript](https://en.wikipedia.org/wiki/ECMAScript) was created to ensure common standards for different browsers to implement.  
**Many people are preferring ECMAScript to JavaScript when referring to the language,** as it is the name of the language standard specification.

It's common to refer to ECMA versions as ECX, where X is the version number.

### The Rise of Asynchronous Web Calls

Some years after JavaScript became the norm, in 2005, **Ajax** was first introduced.

AJAX stands for **Asynchronous JavaScript and XML**, and it's not a programming language. Rather it's a methodology.

AJAX is basically what brought to life the concept of **modern Web Applications**.  
It allows users to navigate a web page and load new content **without reloading the page**, **improving the User Experience** and also **reducing loads on the network** since we're only requesting a single part of an App.

In practice, it's possible to achieve AJAX methodology by using the built-in [XMLHttpRequest](https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest "XMLHttpRequest") objects.  
**This is not the norm anymore**, since it's now more common to use JSON in web requests. Furthermore, **in 2015 ES6 introduced promises**, as a great and cleaner alternative to callbacks. From there, **browsers integrated support for the** [**Fetch API**](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch "Fetch API"), which takes advantage of promises and JSON web requests.

### To the stars

This is not the complete history of the language. But it should give you an idea of how all of this came to be. 

As of now, JavaScript is the star of the Web. Everybody uses it, everybody likes it, and everybody finds ways to reinvent the wheel with it.

## Flexibility, a curse?

As the title of the post implies, I tend to think JavaScript flexibility is not necessarily great.

The reason I started by me talking about my personal experience, is because I was trying to get people to understand how **a language as wide as JavaScript can sound confusing and messy to somebody that's never touched it**.

Let's get starting with some practical examples.

### Learning the actual language vs APIs

Something beginners tend to misunderstand is the difference between the actual language standard and [Web APIs](https://developer.mozilla.org/en-US/docs/Web/API "Web APIs").

This usually leads to people trying to learn the APIs first, without having much of a clue of how they work in practice in a language like JS.

For instance, I briefly mentioned **promises**. You can use the fetch API without knowing what they are. However, this also means you're also writing code by example, and if you need to change something to work for you, you may have no clue where to start from.

For example, you may have problems converting a promise-based function to an [Async/Await](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/async_function "Async/Await") function.

Getting to know the language you're working with is absolutely important. Web APIs rely on the language, if you understand how JS works you can use them however you like.

### Type System