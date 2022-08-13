// 21) একটা কোড লিখে ৫৮১ থেকে ৬২৩ পর্যন্ত যত বিজোড় সংখ্যা আছে সেগুলাকে দেখাও


for (let number = 581; number <= 623; number++) {
    if (number % 2)
        console.log("Odd number: ", number);
}
