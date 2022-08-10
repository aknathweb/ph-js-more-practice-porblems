// 6) You are given an array:
// var fruits = ['Apple', 'Banana', 'Orange'];
//     a) Find the index of ‘Banana’ and replace ‘Banana’ with ‘Mango’.
//     b) Remove ‘Orange’ and add ‘Watermelon’.

//a)
var fruits = ['Apple', 'Banana', 'Orange'];
const index = fruits.indexOf('Banana');
console.log("a) Before change ", fruits);
fruits[index] = 'Mango';
console.log("a) After change ", fruits);

//b)
fruits.pop();
console.log("b) Before change ", fruits);
fruits.push("Watermelon");
console.log("b) After change ", fruits);