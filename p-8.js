// 8) You are given three numbers 13, 79, and 45. Write a program that will
// print the largest number using if-else.

const numbers = [13, 79, 45];
let maxnumber = numbers[0];
if (numbers[0] > numbers[1]) {
    if (numbers[2] > numbers[0])
        maxnumber = numbers[2];
    else
        maxnumber = numbers[0];
}
else {
    if (numbers[2] > numbers[1])
        maxnumber = numbers[2];
    else
        maxnumber = numbers[1];
}
console.log("Maximum value : ", maxnumber)
