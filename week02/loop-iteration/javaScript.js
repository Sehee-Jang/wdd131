/* Check Your Understanding
1. Complete the activities presented in this resource: JavaScript Loops - WDD Learning Modules
2. Given the following variable declarations:
    const DAYS = 6;
    const LIMIT = 30;
    let studentReport = [11, 42, 33, 64, 29, 37, 44];
    Write a for loop that will iterate through the studentReport array and print to the console the current array value if it is below 30.
    Repeat the previous programming snippet by using a while loop.
    Repeat the previous programming snippet by using a forEach loop.
    Repeat the previous programming snippet by using a for...in loop.
    Use any type of repetition (looping) statement to dynamically produce the day names (Monday, Tuesday, Wednesday, etc.) of the next number of DAYS from today's date.
*/

const DAYS = 6;
const LIMIT = 30;
let studentReport = [11, 42, 33, 64, 29, 37, 44];

// for loop
for (let i = 0; studentReport.length; i++) {
    if (studentReport[i] < LIMIT){
        console.log(studentReport[i]);
    }
}

// while loop
let i = 0;
while (i < studentReport.length) {
    if (studentReport[i] < LIMIT){
        console.log(studentReport[i]);
    }
    i++;
}

// forEach loop
studentReport.forEach(function (item) {
    if (studentReport[i] < LIMIT) {
        console.log(studentReport[i]);
    }
});

// for...in loop
for (let i in studentReport) {
    if (studentReport[i] < LIMIT) {
        console.log(studentReport[i]);
    }
}

    
