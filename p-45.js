// 45. একইভাবে উল্টা হিসাব করবে। যাতে তোমাকে ফারেনহাইট হিসেবে তাপমাত্রা দিলে সেটাকে সেলসিয়াস এ কনভার্ট করে আউটপুট দিবে। 
const FahrenheitTemperature = 68;
function FahrenheitToCelsius(Fahrenheit) {
    const Celsius = (5 / 9) * (Fahrenheit - 32);
    return Celsius;
}
console.log(FahrenheitToCelsius(FahrenheitTemperature));