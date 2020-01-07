
## Let's solve a problem

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




