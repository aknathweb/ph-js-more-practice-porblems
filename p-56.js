// একটা ফাংশন লিখো। সেটার মধ্যে তিনটা প্যারামিটার নিবে। এই তিনটা প্যারামিটার হবে কোন একটা ত্রিভুজের তিনটা বাহু এর দৈর্য্য। এখন তোমার কাজ হচ্ছে ফাংশনের ভিতরে কিছু হিসাব নিকাশ করে ত্রিভুজের area (আয়তন) বের করা। কোন একটা ত্রিভুজের তিনটা বাহুর দৈর্য্য দেয়া থাকলে সেটা থেকে কিভাবে আয়তন বের করতে হয় সেই ফর্মুলা গুগল থেকে খুঁজে বের করো।

function triangleArea(first_line, second_line, third_line) {
    const half_perimeter = (first_line + second_line + third_line) / 2;
    const area = Math.sqrt(half_perimeter * (half_perimeter - first_line) * (half_perimeter - second_line) * (half_perimeter - third_line));
    return area;
}
console.log(triangleArea(5, 3, 4));