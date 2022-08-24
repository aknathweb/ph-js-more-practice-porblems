
// একটা ফাংশন লিখো। সেই ফাংশনের মধ্যে ইনপুট হিসেবে একটা array নিবে। সেই array এর মধ্যে অনেকগুলা সংখ্যা থাকবে। তোমার কাজ হবে ইনপুট নেয়া array এর মধ্যে যতগুলা সংখ্যা আছে। সেই সংখ্যা গুলার গড় বের করবে। তারপর সেই গড় ফাংশনের রিটার্ন হিসেবে দিয়ে দিবে। একটু চিন্তা করো। বুঝার চেষ্টা করো। ট্রাই করো। দেখো পারো কিনা।

const numbers = [2, 34, 5, 6, 8, 3, 6, 1, 8, 45, 65, 12, 5];
function AverageArray(numbers) {
    let Average = 0;
    let Sum = 0;
    const CountNumber = numbers.length;
    for (let number of numbers) {
        Sum += number;
    }
    Average = Sum / CountNumber;
    return Average;
}
console.log("Average of Array: ", AverageArray(numbers).toFixed(3));