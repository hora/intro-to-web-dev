
## Let's solve a problem

> Write a Node program that takes in an unlimited number of command line
> arguments that are numbers, goes through each of them, and prints out their
> sum.

### Let's break the problem down

#### What are the inputs?

- an unlimited amount of numbers
    - an unknown big number but less than infinity
    - less than whatever the biggest number our computer can handle...

- the numbers will come from the command line
    - these will be typed/inputted by the user
    - users will be asked for numbers, but can type whatever

- legitimate inputs: are numbers
    - can be + / -
    - can be whole numbers, if they're floats

- stretch: what do we do if the user types in something that isn't a number?

- stretch: what if the users types nothing? if we have no numbers at all?

#### What are some correct outputs?

- a sum of all the numbers
    - a single number

Inputs       | Output
-------------|-------
30, 50       | 80
1, 2, 3      | 6
-5, 5        | 0
0            | 0
1.5, 6       | 7.5

### Steps

1. Get the input
    
    - grab all the arguments passed to the command line

2. Prepare the input

    - convert all the arguments from string to number

    - declare an array to keep track of the converted numbers

    - loop through all the numbers (as strings)
        - convert each string to a number
        - store them in the array we're using to hold them all

3. Calculate the sum

    - declare a variable to keep track of the sum

    - loop through all the numbers
        - add that number to the running total for the sum

4. Print the final sum to the console

