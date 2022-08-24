
// 49) Write a function and take an array as a parameter. Find the average of all
// the elements of that array and return this average.

const numbers = [5, 6, 8, 3, 9, 1, 3, 5, 7, 2];
function average(numbers) {
    let sum = 0;
    for (const number of numbers)
        sum += number;
    return sum / numbers.length;
}
console.log(average(numbers));

// another way 
let sum = 0;
numbers.forEach(n => sum += n);
console.log(sum / numbers.length);