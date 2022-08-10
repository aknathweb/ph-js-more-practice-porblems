// 7) You and your friends Tom, Jane, Peter and John got their final exam
// results. Your total score is 85, Tom’s total score is 66, Jane’s total score is
// 95, Peter’s total score is 56 and John’s total score is 40. The grading
// chart is
//     80 or above A grade
//     60 or above B grade
//     50 or above C grade
//     40 or above D grade
//     39 or less => F grade
// Write a program to find your and your friends’ grades using
// if-else.

function grade(mark) {
    const grade = mark > 79 ? "A" : mark > 59 ? "B" : mark > 49 ? "C" : mark > 39 ? "D" : "A";
    return grade;
}
const me = 85, tom = 66, jane = 95, peter = 56, john = 40;
console.log("mark grade me : ", grade(me));
console.log("mark grade tom : ", grade(tom));
console.log("mark grade jane : ", grade(jane));
console.log("mark grade peter : ", grade(peter));
console.log("mark grade john : ", grade(john));

