//  একটা কোড লিখো যেটা দিয়ে তিন টা সংখ্যার মধ্যে সবচেয়ে ছোট সংখ্যা বের করে দিবে।
const number1 = 6, number2 = 1, number3 = 8;
function MinimumValueOutOfThree(number1, number2, number3) {
    let MinimumNumber = number1;
    if (number1 < number2) {
        if (number1 < number3)
            MinimumNumber = number1;
        else
            MinimumNumber = number3;
    }
    else {
        if (number2 < number3)
            MinimumNumber = number2;
        else
            MinimumNumber = number3;
    }
    return MinimumNumber;
}
console.log(MinimumValueOutOfThree(number1, number2, number3));