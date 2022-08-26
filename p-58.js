// 58) দুইটা ভেরিয়েবল এর মধ্যে যোগ, বিয়োগ, গুণ, ভাগ কিভাবে করতে হয় সেটা কি জানো।
// অর্থাৎ ভূমি কি +, -, *, /, % এইগুনার ব্যবহার জানো। তাহলে নাসবার টাইদের দুইটা ভেরিয়েবল
// লিখো তারপর তাদের যোগ করে সেটার মান আরেকটা ভেরিয়েবন এ রাখো। একইভাবে ওই দুইটা
// ভেরিয়েবল এর মধ্যে বিয়োগ, গুন, ভাগ এবং ভাগশেষ বের করো।

const number1 = 8, number2 = 2;
function add(number1, number2) {
    return number1 + number2;
}
function subtract(number1, number2) {
    return number1 - number2;
}
function multilply(number1, number2) {
    return number1 * number2;
}
function divition(number1, number2) {
    return number1 / number2;
}
function modulus(number1, number2) {
    return number1 % number2;
}
console.log(add(number1, number2));
console.log(subtract(number1, number2));
console.log(multilply(number1, number2));
console.log(divition(number1, number2));
console.log(modulus(number1, number2));