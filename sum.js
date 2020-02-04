
/*

3. Calculate the sum
    - declare an accumulator variable to keep track of the running sum
    - for each number, we add it to the accumulator variable

4. Print output
*/

let numbersStr = process.argv.slice(2);

// if numbersStr is empty, then there's nothing to sum
if (numbersStr.length === 0) {
    console.log("Please enter some numbers that you'd like to sum.");
    process.exit();
}

let numbers = [];

for (let numberStr of numbersStr) {
    // how to do you convert a string to a number?
    let number = Number(numberStr);
    numbers.push(number);
}

let sum = 0;

for (let number of numbers) {
    sum = sum + number;
}

console.log(`The sum is ${sum}`);

// we can nest for loops inside other for loops:

//let greetings = ['hello', 'goodbye', 'whatsup'];

//for (let word of greetings) {
    //for (let ch of word) {
        //console.log(ch);
    //}
//}



