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