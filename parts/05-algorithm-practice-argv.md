
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
