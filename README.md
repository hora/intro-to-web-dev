# W1D2 - A Developer's Workflow

## Code examples

For the code we built in class, see [sum.js](sum.js). For a refactored version
that implements some of the stretch (and that has more comments about the code),
see [sum-refactored.js](sum-refactored.js).

## What is web development?

1. What are some examples of web apps you use in your day-to-day life?

- vs code
- spotify
- google search
- messenger
- google drive (with all that means)
- g suite
- js fiddle
- facebook
- twitter
- browser addons
- gps apps, maps
- online banking
- e-commerce (shopify, online stores)

2. What makes google docs useful?

- can access it from anywhere
    - any device
    - anywhere in the world with an internet connection, probably a relatively
      fast one
    - any platform
    - can even use it offline, but don't have access to online features
        (like on chromebooks)
- multiple people can work on a document at once
- distributed the computational work, stored on google's servers 
- free
- saves data to 'the cloud'
- can work on multiple projects, has organization features (folders, stars, etc)
- the code can be updated without the user having to download or install
  anything

3. What concerns do you have about using google docs, or if you don't use
   it, why not?

- less features than other office programs
- being on the web can be a limitation
- forced to have an account to use it fully
    - encourage an account
- what is google really doing with the data?
- works with some specific data formats and not others (ex: pdf)
    - was a problem before, now it's more robust
- because it's online (ish), it could go down and you won't have access
- you may lose your data
- must have internet (or a chromebook)
- your files are vulnerable to hackers

4. What is google docs made of? What is required to make google doc useful?

- databases
- software running on servers
- a client to access google docs (laptop, phone, etc)
- javascript, css, html, probably lots of other languages, frameworks, etc
- fast servers, load balancing, distributing traffic, efficient code/hardware
    - infrastructure
    - maintenance (hardware, people, code, debugging)
    - electricity
    - water
    - giant warehouses
- user interface
- users (and their data)

5. Given our answers to questions 2-4, how might we define 'web app'?

- a web service that allows user authentication, is personalized
- an app that runs on web technologies
- serves a purpose
    - for its end users, they'll get something out of it
    - for enough people to have a large enough user base
- portable (on your phone, you can take it with you)
    - multi-platform

## One of the most important core skills is defining algorithms

[This BBC Ideas video](https://www.youtube.com/watch?v=oRkNaF0QvnI) is a short
introduction to where the concept of the algorithm originates, and how it became
applied to computer science.

- The word algorithm is a latinized version of 8th century scholar Muhammad Ibn
  Musa al-Khwarizmi's name. Al-Kwharizmi made important contributions to
  mathematics, astronomy, geography and cartography. 'Algorithm' initially
  referred to the foundations of the modern numerical system, but over time came
  to mean a series of steps to solving a problem. Mathematician Alan Turing, one
  of the first computer scientists, applied the concept to machines.

Here's a more formal definition by Anany Levitin:

> An _algorithm_ is a sequence of unambiguous instructions for solving a
> problem, i.e., for obtaining a required output for any legitimate input in a
> finite amount of time.

__Unambiguous:__ There should be no doubts about what each instruction means.
This often requires that we break down all actions into very small and concrete
steps.


__Problem/required output:__ What, specifically, concretely, are we trying to
accomplish? What problems are we trying to solve, and how do we define such that
a computer can solve it?  What does correct output look like?

This is often one of the hardest parts of programming – defining what exactly
we're trying to get computers to do. That is, finding ways to interpret
real-world situations so that we can make useful computations related to them.


__Legitimate input:__ What kind of data is required to reach the required
output? Where does this data come from, and how is it made computable?


__Finite amount of time:__ The algorithm has to produce the desired output
before the end of the universe.

### Recipes are a form of day-to-day algorithm

We're going to watch [a short video ](https://youtu.be/FN2RM-CHkuI?t=37) about
following recipes for making peanut butter sandwiches.

As we watch the video, think about the following:

1. What are legitimate inputs to the recipes?

2. What are legitimate outputs, that is, how do we know that the result of
   following the recipe is 'correct'?

3. Why did the recipes in the video produce incorrect outputs?


## Let's practice defining an algorithm and implementing it in Node.js

See [sum.js in this repo](/sum.js) for the code we implemented in class.

> Write a Node program that takes in an unlimited number of command line
> arguments that are numbers, goes through each of them, and prints out their
> sum.

### Let's break the problem down

- this will run in the terminal

#### Inputs

- unlimited amount of numbers that will come from the
  command line

- stretch: what should happen if some of the inputs (or
  all of them) are not numbers?
- stretch: what if some of the inputs are numbers, but not
  numbers that we can work with in JS? (for instance, some
  really really really big number)

#### Output

- a single number (the sum of all the inputted numbers)
- we want to print this number to the console, which means
  it'll need to become a string at some point

Inputs | Output

1 2 3       6
10 5        15
10 -5       5
0           0

#### Steps

1. Get input from the command line (from the user), and
   prepare it for calculating:

   - get all of the arguments passed to the command line,
     isolate just the arguments we're interested in
   - convert all those arguments from string to number

2. Calculate the running sum using a loop:
   
   - declare a accumulator variable (where we're going to
     store the result as we're calculating the sum)
   - loop over all the inputted numbers, and add them to
     the accumulator variable

3. Print the result
   
   - log the calculated sum to the console

## How to use online searches and resources effectively

Keep the following tips in mind:

1. Don't start by going to your favourite search engine! Start by writing down,
   perhaps as a comment in your code, what exactly you are looking for.

   When we first learn how to code, it takes a lot of our brain power to
   understand other people's code. It's easy therefore to get lost in code we
   find online, and to forget what we were looking for in the first place.

   If we keep a record of what exactly we are looking for, we can refer to it if
   we get lost, confused, or stuck.

2. Phrase your search query in the form of a question, for example:

    > how do you get command line arguments in node js

    Make sure to include "node js" in your query if we're working in Node, or
    "javascript" if we're working in the browser. Answers in other programming
    languages aren't the most useful :)

3. Stack Overflow is your friend.

    Your search results will usually include links to Stack Overflow, official
    documentation, and blogs/tutorials. Official documentation is dense and
    written for more experienced programmers, so for the time being, you'll have
    more luck with Stack Overflow.

4. Skip to the highest rated answer, or the one with the green checkmark (marked
   as the approved answer).

    Learning how to ask the right questions about programming is part of
    learning programming. This means that many questions asked by beginners
    might confuse us, because they're still learning how to ask the right
    questions. The top or approved answers are usually more clear and are
    therefore a better place to start on a Stack Overflow page.

5. Don't get stuck for too long – ask a mentor for help or to search with you.

    You can learn a lot by watching how a more experienced developer makes sense
    of Stack Overflow or other resources.

## The LHL curriculum

For an overview of the Lighthouse Labs curriculum, see these [Google
slides](https://docs.google.com/presentation/d/1m3R_aN4S5YoCBmXRbjaZQGatygWyZXYLcN-fkcP_HWA/edit#slide=id.g167e960765_0_0)


## References and further reading

- [Nima Boscarino's w1d2 notes](https://github.com/NimaBoscarino/dev-workflow-notes)

- [Why algorithms are called algorithms by BBC
  Ideas](https://www.youtube.com/watch?v=oRkNaF0QvnI)

- [Exact instructions challenge PB&J by Josh Darnit](https://youtu.be/FN2RM-CHkuI)

- [A blog post on why we should teach/learn programming by Mark Guzdial](https://computinged.wordpress.com/2017/10/18/why-should-we-teach-programming-hint-its-not-to-learn-problem-solving/)

- _Introduction to the design & analysis of algorithms_ by Anany Levitin

