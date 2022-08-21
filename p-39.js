// 39) তোমার বয়স কি odd নাকি even সংখ্যা সেটা চেক কর একটা ফাংশন দিয়ে। সেই
// ফাংশনকে কোন সংখ্যা প্যারামিটার হিসেবে দিলে, সেই সংখ্যা Even হলে ফাংশন true রিটার্ন
// করবে আর Odd হলে false রিটার্ন করবে।

const age = 24;
function evenOdd(age) {
    if (age & 1)
        return false;
    return true;
}
console.log(evenOdd(age));