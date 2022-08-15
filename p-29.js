// 29) Write a function called odd_even() which takes an integer value and tells
// whether this value is even or odd. You need to do it in 4 ways:
// ● Has return + Has parameter
// ● No return + Has parameter

function odd_even1(number) {
    if (number & 1)
        console.log("odd");
    else
        console.log("even");
}
function odd_even2(number) {
    return number & 1 ? "odd" : "even";
}
console.log("odd_even1->");
console.log(odd_even1(11));
console.log("odd_even2->");
console.log(odd_even2(10));