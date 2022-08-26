// 64) তুমি কি একটা ফর লুপ দিয়ে কোন একটা array এর সবশুলা উপাদানকে দেখাতে পারবে। সেটা
// 'রেগুলার for লুণ হোক বা for of হোক। হলে সেই স্টাইলে একটা কোড লিখে ফেলো।
const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
for (let i = 0; i < array.length; i++)
    console.log(array[i]);


for (let element of array)
    console.log(element);