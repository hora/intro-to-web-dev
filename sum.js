// --- getting and preparing the input ---

let numbersStr = process.argv.slice(2);

// 1. Create an empty value of the type of our result
let numbers = [];

for (let numberStr of numbersStr) {

    // 2. Get the value we need to add to the result, from the loop variable
    let number = Number(numberStr);

    // 3. Update the result with the value from the previous step
    numbers.push(number);
}


// --- calculating the sum ---

// 1. Create an empty value of the type of our result
let sum = 0;

for (let number of numbers) {

    // 2. Get the value we need to add to the result, from the loop variable
    let newTotal = sum + number;

    // 3. Update the result with the value from the previous step
    sum = newTotal;
}

// --- printing the output ---

console.log(sum);
