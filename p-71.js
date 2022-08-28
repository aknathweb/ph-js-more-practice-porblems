// 71) একটা ফাংশন লিখবে। এই ফাংশনের নাম হবে bestFriend তারপর সেই ফাংশনে
//ইনপুট প্যারামিটার হিসেবে একটা array নিবে। সেই array এর মধ্যে তোমার সব
//ফ্রেন্ডের নাম খাকবে। এখন তোমার কাজ হচ্ছে যে ফ্রেন্ড এর নাম সবচেয়ে বড় সেই ফ্রেন্ডএর
//নাম রিটার্ন করে দেয়া। এই ক্ষেত্রে তুমি নামটা অর্থাৎ ফ্রেন্ডের নাম (স্ট্রিং) রিটার্ন করতে হবে।

const friends = ['Anik', 'Kanak', 'Kamal', 'Krishna', 'Shefali', 'Prima', 'Rani'];
function bestFriend(friends) {
    let bestFriend = "";
    for (const friend of friends)
        if (bestFriend.length < friend.length)
            bestFriend = friend;
    return bestFriend;
}
console.log(bestFriend(friends));