// 37) Write a function findOddSum() that will take the array [ 5, 7, 8, 10, 45, 30 ]
// as the input parameter and will return the sum of the odd numbers

const numbers = [5, 7, 8, 10, 45, 30];
function findOddSum(nuumbers) {
    let oddSum = 0;
    for (const number of numbers)
        if (number & 1)
            oddSum += number;
    return oddSum;
}
console.log(findOddSum(numbers));