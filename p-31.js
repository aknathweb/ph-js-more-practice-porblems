// 31) একটা ফাংশন লিখবা যেটা ১৩ এর নামতা (multiplication table) আউটপুট হিসেবে দেখাবে ।
function multiplication_table_of_13() {
    let multiplication_table_of_13 = [];
    for (let i = 1; i <= 10; i++)
        multiplication_table_of_13.push(13 * i);
    return multiplication_table_of_13;
}
console.log(multiplication_table_of_13());

// another process 
let multiplication_table_of_13_another = () => {
    let multiplication_table_of_13 = [];
    for (let i = 1; i <= 10; i++)
        multiplication_table_of_13.push(13 * i);
    return multiplication_table_of_13;
};
console.log(multiplication_table_of_13_another());

// another1 porcess using map
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log(numbers.map(num => num * 13));
