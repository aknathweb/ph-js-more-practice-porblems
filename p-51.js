// একটা কোড লিখো। যেটা দিয়ে কোন একটা array এর মধ্যে সবচেয়ে ছোট সংখ্যা বের করে দিতে পারবে। 

const numbers = [2, 34, 5, 6, 8, 3, 6, 1, 8, 45, 65, 12, 5];
function MinimumValue(numbers) {
    let MinimumNumber = numbers[0];
    for (let number of numbers)
        if (number < MinimumNumber)
            MinimumNumber = number;
    return MinimumNumber;
}
console.log("Arrays minimum value: ", MinimumValue(numbers));
// or,
console.log("Array minimum value using math function :", Math.min(...numbers));