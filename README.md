# W1D2 - A Developer's Workflow

## What is web development?

1. What are some examples of web apps you use in your day-to-day life?

2. What makes [example app] useful?

3. What concerns do you have about using [example app], or if you don't use
   it, why not?

4. What is [example app] made of? What is required to make [example app] useful?

5. Given our answers to questions 2-4, how might we define 'web app'?

6. Given our answer to question 5, how might we define 'web development'?

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

> Write a Node program that takes in an unlimited number of command line
> arguments that are numbers, goes through each of them, and prints out their
> sum.

### Let's start with a simpler variation of the same problem

> Write a Node program that calculates the sum of all the numbers in a
> hard-coded array, and prints it out.

#### Input

- A hard-coded array of numbers

#### Output

- A single number, which is the sum of all the numbers in the input

#### Some test cases / examples

Inputs          | Output
----------------|-------
1, 2, 3, 4, 5   | 15
1, 2, 3, 4, -5  | 5
10, 5, 10       | 25
11, 0           | 11


#### Steps

1. Prepare the input:

    - Define a hard-coded array of numbers.

2. Calculate running sum using a loop:

    - Declare a variable for storing the sum as it's being calculated.
    - Loop over each number, adding it to the running sum.

3. Print output:

    - Log the final sum to the console.

## Returning to the original problem

> Write a Node program that takes in an unlimited number of command line
> arguments that are numbers, goes through each of them, and prints out their
> sum.

### Let's break the problem down again

#### Inputs

- An unlimited amount of numbers that are passed in from the command line

- Stretch: What should happen if no numbers are given?
- Stretch: What should happen if the arguments passed in aren't numbers?

#### Output

- A single number, which is the sum of all the numbers in the input

#### Some test cases / examples

Inputs          | Output
----------------|-------
1, 2, 3, 4, 5   | 15
1, 2, 3, 4, -5  | 5
10, 5, 10       | 25
11, 0           | 11


#### Steps

1. Get and prepare input:

    - Get all numbers passed in as command line arguments – these will be
      strings.
    - Convert all the numbers as strings to numbers as integers.

2. Calculate running sum using a loop

    - Declare a variable for storing the sum as it's being calculated.
    - Loop over each number, adding it to the running sum.

3. Print output

    - Log the final sum to the console.

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

