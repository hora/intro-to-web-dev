
let args = process.argv;

// 1. Created an empty value of the type of the result
// we're interested in
let numbers = [];

for (let i = 2; i < args.length; i++) {
    // 2. Get the value from each step of the loop and
    // add it (push it) to the result
    numbers.push(Number(args[i]));
}

// 3. Printed the result to the console
// console.log(numbers);


// 1. Created an empty value of the type of the result
// we're interested in
let sum = 0;

//for (let number of numbers) {
    //sum = sum + number;
//}

for (let i = 0; i < numbers.length; i++) {
    // 2. Get the value from each step of the loop and
    // add it (+ it) to the result
    sum = sum + numbers[i]
}

// 3. Printed the result to the console
console.log(sum);

