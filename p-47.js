//47. সুদের হিসাব করবে। জাস্ট হিসাব কেমনে করতে হয়। সেই চিন্তায় করবে। সুদ ভালো না খারাপ সেটা এখন চিন্তা করার দরকার নাই। জাস্ট একটা ফর্মুলা থাকলে সেটা কিভাবে কোড এ লিখতে হয় সেই এঙ্গেল থেকে করার চেষ্টা করো। 

// Question 1:
// বার্ষিক 5% হারে 10000 টাকার 2 বছরের সরল সুদ কত টাকা?
// আমরা জানি যে, সরল সুদ= Ptr/100
// এখানে, I = সুদ P= আসল, r = সুদের হার এবং T=সময়
// সরল সুদ = আসল * সময় * সুদের হার/1০০
// অতএব, 
// সরল সুদ = 10000 * 2 * 5/1০০
// সরল সুদ = 1000
const Asset = 10000;
const InterestRate = 5;
const Year = 2;
const SimpleInterest = Asset * Year * InterestRate / 100;
console.log("Simple Interest", SimpleInterest);

// Question 2:
// বার্ষিক 5% হারে 10000 টাকার 2 বছরের চক্রবৃদ্ধি সুদ কত টাকা?
// আমরা জানি যে, সুদ-আসল = P(1 + r/100)^t
// সুদ-আসল = আসল + চক্রবৃদ্ধি সুদ 
// অতএব, 
// সুদ-আসল = 10000 (1 + 5/100)^2 
// সুদ-আসল = 11025 
// চক্রবৃদ্ধি সুদ = 11025 - 10000 = 1025
const Asset1 = 10000;
const InterestRate1 = 5;
const Year1 = 2;
const InterestPrincipal1 = Asset1 * Math.pow((1 + InterestRate1 / 100), Year1);
const CompoundInterest = InterestPrincipal1 - Asset1;
console.log("Compound Interest", CompoundInterest);
