// 44. তোমাকে ফাংশনের ইনপুট হিসেবে সেলসিয়াস দিবে। তুমি ক্যালকুলেশন করে তাপমাত্রা ফারেনহাইট এ কনভার্ট করে সেটার আউটপুট রিটার্ন করবে
const CelsiusTemperature = 20;
function CelsiusToFahrenheit(Celsius) {
    const Fahrenheit = ((9 / 5) * Celsius) + 32;
    return Fahrenheit;
}
console.log(CelsiusToFahrenheit(CelsiusTemperature));