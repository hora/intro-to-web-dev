
## Let's solve a problem

> Write a Node program that takes in an unlimited number of command line
> arguments that are numbers, goes through each of them, and prints out their
> sum.

### Let's break that down first

#### Input

- numbers (unlimited amount)
    - a large amount not defined explicitly by the program (user chooses)

- stretch: what should the program do if no numbers are given?
    - return 0
    - nothing is not 0, so maybe ask the user to enter something

- stretch: what should the program do if the users enters something that is not
  a number?
    - ask the user to enter a number
    - try to coerce the value into a number first
    - ignore it, skip that one

#### Expected output

- a single number representing the sum of all the valid inputs
- a message letting the user know what the sum is

__Some test cases / examples__:

Inputs      | Output
--------------------
1, 2, 3         6
-1, 30          29
0               0
[no input]      "Hey, you need numbers to get a sum"
-5, 5           0
3.5, 2.6        6.1

stretch:
one, 2, 3       5 (because we skip the 'one')
htg, error      "Hey, you need numbers to get a sum"
'1', '2', '3'   6? maybe "Hey, you need numbers..."
1/2, 1/2        1? maybe "Hey, you need whole numbers ..."
some really big number, and its sum...

### Steps (algorithm)

1. Get and prepare the input
    - fetch the numbers passed in by the user to the command line – these will
      be strings (in Node)

1.5. If no input, display a message to the user, otherwise do steps 2 to 4.

2. Convert the user's argumnets to numbers
    - declare an accumulator variable to keep track of the converted arguments –
      an array
    - for each one, convert the string to number and push it to the accumulator
      variable

3. Calculate the sum
    - declare an accumulator variable to keep track of the running sum
    - for each number, we add it to the accumulator variable

4. Print output



