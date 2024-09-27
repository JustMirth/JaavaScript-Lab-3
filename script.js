let numbers = new Array("One", "Two", "Three", "4", "Five", "Six", "7", "8", "Nine");

console.log(numbers);

let midpoint = Math.floor(numbers.length/2);

let first = numbers[0];
let middle = numbers[midpoint];
let last = numbers.at(-1);

console.log(first);
console.log(middle);
console.log(last);

console.log(numbers.length);

numbers.pop();
numbers.splice(2, 1, "3");
numbers.push("9");

console.log(numbers);

for(let k = 0; k < numbers.length; k++) {
    console.log(numbers[k]);
}

for (const number of numbers) {
    console.log(number);
}

let [firstNumber, secondNumber, ...rest] = numbers;

console.log(firstNumber);
console.log(secondNumber);
console.log(...rest);