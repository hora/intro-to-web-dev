// get the input, but prepare it later as we need to

let numbersStr = process.argv.slice(2);

// 1. Create an empty value of the type of our result
let sum = 0;

for (let numberStr of numbersStr) {
    // 2. Get the value we need to add to the result, from the loop variable
    let number = Number(numberStr);

    // 3. Update the result with the value from the previous step
    //sum = sum + number;
    sum += number;
}

// display output
console.log(sum);
