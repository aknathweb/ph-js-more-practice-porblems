// 28) Challenging: Write a function called make_avg() which will take an array of
// integers and the size of that array and return the average of those values.

function make_avg(numbers, numbers_length) {
    let sum = 0;
    for (let i = 0; i < numbers_length; i++)
        sum += numbers[i];
    return sum / numbers_length;
}
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const numbers_length = numbers.length;
console.log(make_avg(numbers, numbers_length));