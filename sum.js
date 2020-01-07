//1. Get input from the command line (from the user), and
   //prepare it for calculating:

let userInput = process.argv.slice(2);

let numbers = [];

// for ... of loop
for (let inputString of userInput) {
    // as i convert each inputted string to a number, i
    // will save it in the numbers array
    let number = Number(inputString);

    if (!isNaN(number)) {
        numbers.push(number);
    }
}

//2. Calculate the running sum using a loop:

let sum = 0;

for (let number of numbers) {
    sum = sum + number;
    // sum += number;
    // x += y; is the same as x = x + y;
}

console.log(sum);

