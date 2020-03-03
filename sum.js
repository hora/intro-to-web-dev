//1. Get input from the command line (from the user)

let numbersAsStrings = process.argv.slice(2);

//2. Prepare the input

// declare accumulator variable
let numbers = [];

// loop through all the strings the user inputted
// this for loop syntax gets us the value at each element in the array
for (let numAsString of numbersAsStrings) {
    /*
    let num = Number(numAsString);
    numbers.append(num);
    */

    // convert the input string to a number and push it into the accumulator
    // array
    numbers.push(Number(numAsString));
}

//3. Calculate the running sum using a loop:

// declare accumulator variable
let sum = 0;

// loop through all the numbers we just converted from string to number
for (let number of numbers) {
    //sum = sum + number;
    
    // add the number to the running sum and store it back into sum
    sum += number;
}

// 4. Print the result to the console
console.log(sum);


// this for loop syntax requires that we look up each element using the index
/*
for (let i = 0; i < numbersAsStrings.length; i++) {
    let numAsString = numbersAsStrings[i];
}
*/

