// Write a function called foo() which prints “foo” and a function called bar()
// which prints “bar”. Call function bar() in the foo() function after printing. What
// will be the output? Now call the foo() to see the output.

function foo() {
    console.log("foo");
    bar();
}
function bar() {
    console.log("bar");
}
function foo1() {
    console.log("foo1");
    function bar1() {
        console.log("bar1");
    }
}
function foo2() {
    console.log("foo2");
}
function bar2() {
    console.log("bar2");
}
console.log("first")
console.log("first->", foo());
console.log("second")
console.log("second->", foo1());
console.log("third")
console.log("third->", foo2(bar2()));



