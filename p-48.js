// 48) Suppose, you have an array with 8 elements. Find the smallest element of
// that array.
const numbers = [5, 6, 8, 3, 9, 1, 3, 5, 7, 2];
function smallest_element(elements) {
    let smallest_element = elements[0];
    for (const element of elements)
        if (element < smallest_element)
            smallest_element = element;
    return smallest_element;
}
console.log(smallest_element(numbers));

// another way 
console.log(Math.min(...numbers));

// Now for the previous array, try to find the second largest element.
function secondLargest(numbers) {
    let secondLargest = largest = numbers[0];
    for (let number of numbers) {
        if (number > largest) {
            secondLargest = largest
            largest = number;
        }
        else if (number > secondLargest) {
            secondLargest = number;
        }
    }
    return secondLargest;
}
console.log("Second largest number : ", secondLargest(numbers));