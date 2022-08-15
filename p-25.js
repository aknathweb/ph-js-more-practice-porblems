// 25) তোমার যত বই আছে সেগুলার দাম নিয়ে একটা array লিখে ফেলো। যে বই গুলোর দাম ২০০
// টাকার উপরে সেগুলাকে স্কিপ করবে। অর্থাৎ সেগুলাকে আউটপুট হিসেবে দেখাবে না। বাকিদের কে
// আউটপুট হিসেবে দেখাবে। দেখো করতে পারো কিনা।


const books = ["English", "Bangla", "Mathematics", "Physics", "Chemistry", "Biology", "ICT"];
const bookPrices = [150, 130, 160, 180, 200, 220, 140];
for (const book of books) {
    if (bookPrices[books.indexOf(book)] >= 200)
        continue;
    else
        console.log(book, "-> price: ", bookPrices[books.indexOf(book)]);
}