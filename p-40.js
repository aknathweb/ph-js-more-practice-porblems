// 40) এমন একটা ফ্যাংশনা লিখো যেটাকে তুমি ঘন্টাকে ইনপুট প্যারামিটার হিসেবে দিবে। আর সে
// সেই ঘন্টাকে মিনিটে কনভার্ট করে মিনিট রিটার্ন করবে।

const hour = 3;
function hourToMinute(hour) {
    const minute = hour * 60;
    return minute;
}
console.log(hourToMinute(hour));