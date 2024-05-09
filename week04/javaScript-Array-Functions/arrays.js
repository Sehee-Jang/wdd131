// Activity 1 - Map #
// map is great when we need to change each item in an array somehow. It returns a new array and does NOT modify the original array.

let new_array = arr.map(function callback( currentValue[, index[, array]]) {
    // return element for new_array
}[, thisArg])

/**
 * The syntax looks very similar to forEach, but notice that it needs a variable to store the new array it will return. We also need to make sure that the callback function we provide returns a value...usually the modified version of the array element.
 */

/**
 * 1. Declare an array with value = ['one', 'two', 'three']
 * 2. Convert our array of strings into an array of HTML strings. Each string should be turned into a list item. For example: "<li>one</li>"
 * 3. Set our list of HTML strings into the MYLIST list. (Hint...checkout the .join() method.)
 */

// example 1
const steps = ["one", "two", "three"];
const stepsHtml = steps.map(function (step) {
  return `<li>${step}</li>`;
});
document.getElementById("myList").innerHTML = stepsHtml.join();