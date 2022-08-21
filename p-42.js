// 42) ৫০ থেকে ৮০ এর মধ্যে যতো বিজোড় সংখ্যা আছে সেগুলাকে দেখাবে।
const start = 50;
const end = 80;
for (let i = start; i <= end; i++)
    if (i & 1)
        console.log(i);