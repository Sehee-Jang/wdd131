// Functions
    // Functions in JavaScript are common control structures in programming. They are blocks of code that can be called by name to perform a specific task. Functions can be called multiple times throughout a program. Functions can also be passed data to work with, and can return data back to the caller.

    // "Functions are one of the fundamental building blocks in JavaScript. A function in JavaScript is similar to a procedure—a set of statements that performs a task or calculates a value, but for a procedure to qualify as a function, it should take some input and return an output where there is some obvious relationship between the input and the output. To use a function, you must define it somewhere in the scope from which you wish to call it. - MDN web docs"

// Focus on how to define functions and how to call functions:
    // Function declaration
    // Function expression
    // Arrow function expression
    // Calling Functions


// Check Your Understanding
// Given the following code snippet:
let firstName = 'Antonia';
let lastName = 'Francesca';

// Write a function declaration / definition named fullName that has two parameters named first and last. The function's purpose is to combine those two string parameters together to return one combined string (a 'full' name) with a space between the first and last variables.
// Answer
function fullName(first, last) {
  return `${first} ${last}`;   // string concatenation first + ' ' + last (not preferred)
}

// Now use an anonymous function expression to do the same thing where the function is assigned to a variable named fullName.
// Answer
const fullName = function (first, last) {
  return `${first} ${last}`;
}

// Now use an arrow function expression to do the same thing where the function is assigned to a variable named fullName.
// Answer
const fullName = (firstName, lastName) => `${firstName} ${lastName}`;

// Write an expression that calls the fullName function declaration and writes the result to an existing HTML element's text node with the ID of fullName
// Answer
document.querySelector('#fullName').innerHTML = fullName(firstName, lastName);