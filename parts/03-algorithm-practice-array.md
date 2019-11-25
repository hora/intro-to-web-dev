
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
