// কোন একটা সংখ্যা প্রাইম সংখ্যা (prime number) কিনা। সেটা চেক করার একটা ফাংশন লিখো। 
function isPrime(number) {
    const sqrt_number = Math.sqrt(number);
    if (number == 1)
        return false;
    for (let i = 2; i <= sqrt_number; i++)
        if (number % i == 0)
            return false;

    return true;
}
console.log(isPrime(4));