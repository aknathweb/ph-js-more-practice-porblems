// 11) তাড়াহুড়া করে স্কুলের জন্য বের হচ্ছ কিন্তু রাস্তা পার হওয়ার সময় দেখলে, ট্রাফিক
// সিগন্যাল লাল রং। এই অবস্থায় যদি তুমি রাস্তা পার হওয়ার চেষ্টা কর, তাহলে ডেঞ্জার হতে
// পারে। যদি হলুদ রং হয় তাহলে তোমার খেমে যাওয়া উচিত। আর যদি ট্রাফিক সিগন্যাল গ্রিন
// হয় তাহলে তোমার রাস্তা পার হওয়া উচিত। তাই একটা কোড লিখে ফেলো। যেখানে আমরা
// singnal নামে একটা ভেরিয়েবল থাকবে। সেটার মানgreen, yellow বা red হতে পারে।
// সেই অনুসারে ডিফারেন্ট ডিফারেন্ট কাজ হবে। তো, সেই কোড ফটাফট লিখে ফেলো।

const signals = ["green", "yellow", "red"];
let singnal = Math.floor(Math.random() * 3);
if (singnal == signals.indexOf("green"))
    console.log("Now singla is " + signals[singnal] + ", so decision is: " + "Go");
else if (singnal == signals.indexOf("yellow"))
    console.log("Now singla is " + signals[singnal] + ", so decision is: " + "wait");
else
    console.log("Now singla is " + signals[singnal] + ", so decision is: " + "Stop");
