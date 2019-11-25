# W1D2 - One Dev's Workflow

## The LHL curriculum

For an overview of the Lighthouse Labs curriculum, see these [Google
slides](https://docs.google.com/presentation/d/1m3R_aN4S5YoCBmXRbjaZQGatygWyZXYLcN-fkcP_HWA/edit#slide=id.g167e960765_0_0)

## One of the most important core skills is defining algorithms

[This BBC Ideas video](https://www.youtube.com/watch?v=oRkNaF0QvnI) is a short
introduction to where the concept of the algorithm originates, and how it became
applied to computer science.

- The word algorithm is a latinized version of 8th century scholar Muhammad Ibn
  Musa al-Khwarizmi's name.  Al-Kwharizmi made important contributions to
  mathematics, astronomy, geography and cartography.  'Algorithm' initially
  referred to the foundations of the modern numerical system, but over time came
  to mean a series of steps to solving a problem. Mathematician Alan Turing, one
  of the first computer scientists, applied the concept to machines.

Here's a more formal definition by Anany Levitin:

> An _algorithm_ is a sequence of unambiguous instructions for solving a
> problem, i.e., for obtaining a required output for any legitimate input in a
> finite amount of time.

For example, [step-by-step instructions for how to make a peanut butter and
jelly sandwich](https://youtu.be/FN2RM-CHkuI?t=37).

__Unambiguous:__ There should be no doubts about what each instruction means.
This often requires that we break down all actions into very small and concrete
steps.

__Problem/required output:__ This is often one of the hardest parts of
programming – understanding exactly what we're trying to get the computer to do.

__Legitimate input:__ You can't make a PB&J sandwich if all you've got is bread,
peanut butter, and batteries. The ingredients you start with matter.

__Finite amount of time:__ The algorithm has to produce the desired output
before the end of the universe.

## Let's practice defining an algorithm and implementing it in Node.js

> Write a Node program that takes in an unlimited number of command line
> arguments that are numbers, goes through each of them, and prints out their
> sum.

### Break the problem down

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
    - Loop over all the numbers one at a time.
    - Add the number to the running sum.

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

## References and further reading

- [Why algorithms are called algorithms by BBC
  Ideas](https://www.youtube.com/watch?v=oRkNaF0QvnI)

- _Introduction to the design & analysis of algorithms_ by Anany Levitin

