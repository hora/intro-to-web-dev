//1. Get input from the command line (from the user), and
   //prepare it for calculating:

let userInput = process.argv.slice(2);

// declare accumulator variable
let numbers = [];

// loop through all the strings the user inputted
// using the for ... of loop syntax
for (let inputString of userInput) {
    // try converting the input string to a number
    let number = Number(inputString);

    // if the conversion did not result in NaN (not a number), that is, if the
    // inputted string is a number, then push it to the numbers array
    if (!isNaN(number)) {
        numbers.push(number);
    }
}

//2. Calculate the running sum using a loop:

// declare accumulator variable
let sum = 0;

// loop through all the numbers we just converted from string to number
for (let number of numbers) {
    // add each number to the running sum, and save the new sum back into sum
    sum = sum + number;

    // this is alternative syntax for the same operation as line 30:
    // sum += number;
    // x += y; is the same as x = x + y;
}


// 3. Print the result to the console

console.log(sum);

