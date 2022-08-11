// 16) তোমার কাছে : ৮০০০০ টাকার বেশি হলে তুমি mac কিনবে , ৬০ হাজার টাকার বেশি হলে gaming ল্যাপটপ
// কিনবে , ৪০ হাজার টাকার বেশি হলে lenovo yoga কম্পিউটার কি নবে , ২০ হাজার টাকার বেশি হলে পুরান
// ল্যাপটপ কিনবে । না হয় তুমি মোবাইল দিয়ে কাজ চালাবে ।

const condition_money = [80000, 60000, 40000, 20000];
const porbability_money_max = 100000;
const porbability_money_min = 10000;
let t = 1;
while (t--) {
    let porbability_money = Math.floor(Math.random() * (porbability_money_max - porbability_money_min) + porbability_money_min);
    let my_opinion;
    switch (true) {
        case porbability_money >= condition_money[0]:
            my_opinion = "mac";
            break;
        case porbability_money >= condition_money[1]:
            my_opinion = "Gamming laptop";
            break;
        case porbability_money >= condition_money[2]:
            my_opinion = "lenovo yoga";
            break;
        case porbability_money >= condition_money[3]:
            my_opinion = "old laptop";
            break;
        default:
            my_opinion = "out of my mind";
    }
    console.log(porbability_money, "and my decision : ", my_opinion);
}

