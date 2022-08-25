// ৪. একটা ফাংশন লিখো। যেটা ইনপুট প্যারামিটার হিসেবে একটা আয়তক্ষেত্রের দৈর্ঘ্য আর উচ্চতাকে নিবে। তারপর সেই আয়তক্ষেত্র এর area (আয়তন) কে রেজাল্ট হিসেবে রিটার্ন করবে।

function RectangleArea(length, height) {
    const RectangleArea = length * height;
    return RectangleArea;
}
const length = 40, height = 5;
console.log("Area of Rectangle : ", RectangleArea(length, height));