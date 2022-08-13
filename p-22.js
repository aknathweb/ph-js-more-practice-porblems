// 22) তুমি এতদিন যা যা জিনিস শিখছো সেগুলার নাম দিয়ে একটা array বানাও। তারপর একটা
// for লুপ দিয়ে সেই array এর সব উপাদান কে আউটপুট হিসেবে দেখাও।

const learn_array = ["html", "css", "Bootstarp", "tailwind", "javaScript"];
for (let learn of learn_array) {
    console.log(learn.toUpperCase());
}