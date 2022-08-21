// 38) leapYear() নামে ফাংশন লিখো এবং নেক্সট ইয়ার অর্থাৎ ২০২৩ কি leap year নাকি সেটা
// চেক করো। leap year হলে ফাংশন true রিটার্ন করবে আর leap year না হলে false রিটার্ন করবে।

function leapYear(year) {
    if ((year % 400 == 0 || year % 4 == 0) && (year % 100 != 0))
        return true;
    return false;
}
console.log(leapYear(2044));