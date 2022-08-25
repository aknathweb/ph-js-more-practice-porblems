//(ট্রিকি) কোন একটা array এর মধ্যে অনেকগুলা সংখ্যা আছে। সেই সংখ্যাগুলো থেকে second largest সংখ্যা বের করার একটা প্রোগ্রাম লিখো। দরকার হলে গুগলে সার্চ দাও। তারপর সার্চ রেজাল্ট দেখে বুঝে বুঝে করার চেষ্টা করো।

const numbers = [40, 34, 5, 6, 8, 3, 6, 1, 8, 45, 65, 12, 55];
function secondLargest(numbers) {
    let secondLargest = largest = numbers[0];
    for (let number of numbers) {
        if (number > largest) {
            secondLargest = largest
            largest = number;
        }
        else if (number > secondLargest) {
            secondLargest = number;
        }
    }
    return secondLargest;
}
console.log("Second largest number : ", secondLargest(numbers));