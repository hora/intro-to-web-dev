
## Let's practice defining an algorithm and implementing it in Node.js

> Write a Node program that takes in an unlimited number of command line
> arguments that are numbers, goes through each of them, and prints out their
> sum.

### Let's break this problem down into a smaller one

> Write a Node program that adds all the numbers in a
> hard-coded list.

#### Input

- A hard-coded list of numbers.

#### Output

- The sum of all the numbers in the hard-coded list added
  together.


#### Some test cases / examples

Input: 1, 2, 3, 4, 5    Output: 15
Input: 5, 20            Output: 25
Input: 11, 0            Output: 11
Input: 1, -2            Output: -1

#### Steps

1. Prepare the input and the result:

    - define a hard-coded list of numbers (an array)
    - define a variable to keep track of the running sum

2. Loop over the list and calculate the running sum (using
   a loop):
    
    - declare a variable for storing the exsiting sum +
      the new number
    - store that new sum in the running total of the sum

3. Print output:

    - logging the final sum to the console


### Let's go back to the original more complicated problem

> Write a Node program that takes in an unlimited number of command line
> arguments that are numbers, goes through each of them, and prints out their
> sum.

### Input

- an unlimited amount of numbers passed in from the
  command line

#### Output

- The sum of all the numbers passed in from the command
  line added together.


#### Some test cases / examples

Input: 1, 2, 3, 4, 5    Output: 15
Input: 5, 20            Output: 25
Input: 11, 0            Output: 11
Input: 1, -2            Output: -1

#### Steps

1. Preparing the input and the running sum:

    - get the numbers from the command line and store them
      in a variable
    - declare a variable to keep track of the running sum

2. Loop over the list and calculate the running sum (using
   a loop):
    
    - declare a variable for storing the exsiting sum +
      the new number
    - store that new sum in the running total of the sum

3. Print output:

    - logging the final sum to the console

