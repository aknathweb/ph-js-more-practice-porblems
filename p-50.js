// Write a function which takes the height and width of a rectangle as
// parameters. Find out the area of that rectangle and print the result.

const height = 6, width = 5;
function rectangle_area(height, width) {
    return height * width;
}
console.log(area(height, width));
// another way 
const rectangle_area1 = (height, width) => height * width;
console.log(area1(height, width));