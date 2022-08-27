// 69) একদম ফাংশন এর নাম হুবহু centimeterToMeter নাম দিয়ে একটা ফাংশন
// 'লিখবে। এই ফাংশনে ইনপুট হিসাবে কেউ সেন্টিমিটার দিবে আর সেই সেন্টিমিটার
// কে মিটার এ কনভার্ট করে রেজাল্ট রিটার্ন করবে।

const centimeter = 20;
function centimeterToMeter(centimeter) {
    const meter = centimeter / 100;
    return meter;
}
console.log(centimeterToMeter(centimeter));