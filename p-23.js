// 23) তুমি এতদিন পর্যন্ত যে যে মডেলের মোবাইল ফোন ইউজ করেছো সেগুলার নাম দিয়ে একটা
// array বানাও। তারপর একটা while লুপ দিয়ে সেই array এর উপাদান গুলা একটা একটা করে
// আউটপুট হিসেবে দেখাও

const mobiles = ["nokia", "oppo", "samsung", "vivo", "itel"];
let mobile = 0;
while (mobile < mobiles.length) {
    console.log(mobiles[mobile].toUpperCase());
    mobile++;
}

