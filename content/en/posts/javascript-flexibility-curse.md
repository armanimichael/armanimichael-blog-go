+++
categories = ["Web"]
date = 2022-06-22T21:43:26Z
description = "Some thoughts about JavaScript as a widely popular language"
pinned = false
series = []
tags = ["programming languages"]
title = "JavaScript flexibility curse"

+++
## My first encounter with JS

The first time I ever touched JavaScript was in High School, **it was not a pleasant experience.**

Our professors figured a good way of improving the learning experience was to let us create a **video game**. That doesn't sound that bad. I and my friends had the same idea at first.  
Things started going downhill as soon as we began tho, in practice we were not given any direction on anything. We didn't know anything about the language, nor about game development.

The only thing they provided us with was the library, [Phaser](https://phaser.io/ "Phaser"). Which is a great library by the way, if you're into game development and the Web you should check it out!  
I actually returned to that same library on my own a while later, messing around and having some fun creating tiny web games.

Now, I know what people may think. You were in a tech school, messing around should have been enough to solve my problems.  
That's what I and my team did. We came from C#, and I had some knowledge of Python, we were no strangers to programming concepts.

The fact was that **JavaScript seemed to allow us to do pretty much anything**. You wrote some messy function and it run.  
I mean... Perhaps, it acted funny because of `null` or `undefined` values, or having weird behaviors related to the incorrect use of `this` - but most of the time it didn't wholly explode before our eyes.

Our project consisted of **massive and complexly structured files** containing our game logic.

I remember our code used [Object Constructors](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/constructor), which is not bad, but we didn't honestly know what we were doing.  
For instance, I remember we had problems instantiating new objects representing a game enemy. I don't recall what was the problem there, but it was surely something straightforward for any person familiar with JS.

To be clear, I ended up having the max grade. But not because I wrote a great project, with sound logic implementation, maintainable and performant. It was merely because it worked in one way or the other, and that was sufficient. Go figure.

One of my biggest regret about this school project is our decision not to use git, mostly because a couple of my team members didn't know how to use it.  
We ended up storing the code on Google Drive! It was hell on Earth, I don't even want to know how we came up with such a destructive idea.

Mistakes were made, but at least we learned quite a lot.

## Story Time!

We can say JavaScript was born in a rush. [Brendan Eich](https://en.wikipedia.org/wiki/Brendan_Eich ), the original creator of JS, developed it in just 10 days!

JavaScript was developed at **the end of 1995**. To put this in perspective the [WWW](https://home.cern/science/computing/birth-web) was firstly **released to the public in 1991** and released as **open software in 1993**.

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

The reason I started by me talking about my personal experience, is because I was trying to get people to understand how **a language as wide as JavaScript can sound confusing and messy to somebody that's never touched it**. A great part of this issue comes from the language's flexible nature.

Let's get starting with some more detailed examples.

### Type System

**JavaScript is dynamically typed** unless you're working in TypeScript but that's another matter.

Having a dynamically typed language is not a problem, you either like it or you don't. You need to have strong and reliable code if you want to avoid type problems since the language won't do that for you!

For instance, you're good to go if you want to have an array of mixed types such as the following.

```javascript
const arr = ['string', 1, [1, 2, 3], { a: 123 }];
```

However, this can lead to 'interesting' behaviors.  
Let's say you want to loop this array, cool you can do that. But what if you try to sum all the values of `arr`?  
Let's try it!

```javascript
const sum = 0;
arr.reduce((prev, curr) => prev + curr, sum);
console.log(sum);
```

If you try to run this, `sum` will be `0`.

**_No errors, no nothing._**

This is a silly example, but in a more complex case, you wouldn't have a clue why. At least until you have lost some time debugging the code.

This is dangerous. Yet, this is an issue we can avoid by following good practices.  
**The problem with so many libraries running around NPM is that you're never sure everybody is following good practices**.

You can read the code of the packages, but you cannot waste time reviewing every single package you install!

In cases like this, not even `'use strict'` helps. It's only a matter of what a developer does, it's just a matter of hope in reality.

Another set of troubles that can arise relates to objects with a dynamic type system.  
Unless your editor helps you with that, **the language won't care if you're accessing an object property that's not there until you reach that line of code.**

For example, if you have an object like this.

```javascript
const obj = {
  someProp: 1
};
```

You can access this property `obj.SomeProp`, but it's not the same and will return `undefined`.

Good luck debugging something like this in a large code base if it ever happens.

### Everything is a boolean

JavaScript is famously known to treat everything as a boolean value.

This can prove quite useful, but in practice, it **can also lead to unexpected behaviors**.

This concept proves useful when you need to check for the existence of something, for example, if you need to check if a call to an external API yielded any result.

```javascript
const res = await fetch(someUrl);
const text = await res.text();

if (text) {
	console.log(text)
}
```

As you can see, no need to check for the length of the text response `if (text.length > 0)`, or anything like that. The response here could be an empty object, this example is just for the sake of simplicity.

But, in reality, this does only save some space and could be avoided with no problems. Also because doing something like **this could prove harmful**.

What happens if the response is `0`, and we need to do something with it? In this particular case, we wouldn't enter the `if` statement, compromising our logic.

That's because, for JavaScript, checking against `0` is the same as checking against `false`. We could solve this problem by doing something like I wrote above `if (text.length > 0)` and we could also add some checks to ensure `text !== undefined && text !== null`.

Using the entire variable as a condition can save some keystrokes, but it could also introduce bugs. We need to be careful with this kind of logic, it could backfire.

### Equality vs Strict Equality

Coming from the example above, another confusing construct in JavaScript is the [equality operator](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Equality).

Most programming languages use the `==` format. In JS, however, the equality operator does a _'loose'_ equality check. It doesn't check for types, it just checks for apparent equality.

This means if we have two values `1` and `'1'`, according to the `==` operator, they're equal. Things get more confusing if we start using the equality operator with `undefined` and `null`.

As a good practice, if you're testing against something, you probably don't need to use the equality operator, but the [**STRICT equality operator**](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Strict_equality). Which does exactly what you would expect from any other language.

You may want to use the classic `==` in JavaScript, although most of the time you probably don't need to. I usually stick to the strict equality operator as default, at the end of the day is you as a developer that needs to make a choice.

When I was still a beginner with this language, I did some terrible mistakes by misunderstanding this concept.

Note, that the strict equality operator feature has not been there since the start, it was introduced to fill the holes in the language specifications.

### Variables scopes

Another dangerous concept to play with scopes. **In JavaScript, the scope of a variable depends on how you define them.**

For example, if you use the classic `var` statement, you're defining a **function-scoped variable**.  
So, when you define a `var` variable, it will be accessible by the whole function, even if it's declared in a lower block scope.

```javascript
function doStuff() {
  if (true) {
    var someVar = 1;
  }
  
  someVar = 2;
  console.log(someVar);
}
```

This will print `2`. This is because `someVar` doesn't care about the block it's inside, it only cares about the function it's inside of.

Also, thanks to [hoisting](https://developer.mozilla.org/en-US/docs/Glossary/Hoisting "hoisting"), you can do this.

```javascript
function doStuff() {
  console.log(someVar);
  var someVar = 1;
}
```

In this case, the script will print `undefined`, but it will work as the declaration is moved at the top by the interpreter.

There are times when this could prove useful, but in general, you'd probably prefer to use `let` and `const`.

These two statements work as you would expect in any other language. They're **block-scoped**, and you cannot access them before defining them.

Hoisting is still a thing, however, it won't assign the variables a default value, causing an error.

Doing the same as the above examples  `let` will throw an error.  
The only difference between `let` and `const` is that the latter is, as the name implies, a constant. You need to declare and initialize it in a single passage `const someVar = 1;` and you cannot change it after that.

### Immutability

I decided to place **immutability** right after variables scoping for a reason. As I said, `const` allow us to define constants. But **constants are not immutable**.

You cannot redefine constants, but you surely can alter them if they're objects.

A constant array is not an immutable array, you can create an empty constant array and then push some values in it.

```javascript
const arr = [];
arr.push(1, 2, 3);
```

It will work just fine.

What you cannot do with a constant is redefine it. The following will throw.

```javascript
const arr = [];
arr = [1, 2, 3];
```

By using a constant, we can also alter an object for example.  
You need to be aware of how this works because **using a constant won't save you from side effects**.

This concept becomes fundamental when you work with frameworks like ReactJS, where **State** is a central aspect.

## Some conclusions

I surely didn't write about any single flexibility problem that we can encounter while using JavaScript. **There are far more concepts I could potentially talk about**, this is just a mere series of general ideas.

**This post doesn't serve as an attack against JavaScript.** I like the language.

Yet, we need to be aware of some caveats.

Using a tool like JavaScript can seem easy, and it probably is.  
The problem is mastering its usage. You can write scripts, but can you understand every implication of what you're doing?

I know I can, at least in part, because I decided to dig into the language.  
This happened after I realized how little I knew about it, And I'm sure there are still lots of things I don't know about it yet.

Jumping to the easy conclusion is never great, you should never do it even when working with a programming language.

A programming language is just a tool to solve our problems. Once you understand how to use the tool, you can focus on the problems you're trying to solve.