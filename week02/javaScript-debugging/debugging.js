const PI1 = 3.14;
const radius1 = 3;
let area1 = 0;
area1 = radius1 * radius1 * PI;
console.log("Area1:", area1);
radius1 = 4;


/**
 * You have repeated lines of code in the example above.
 * This is a sign that we need a function.
 */

/* Create a function called circleArea. */
const PI2 = 3.14;
let area2 = 0;
function circleArea(radius2){
    const area2 = radius2 * PI2;
}
area2 = circle(3);
console.log(area2);

/**
 * If you use the function above, you will notice that we've got 'undefined' as our result.
 * We have another error, but this one si not showing up in the Console.
 * Put a breakpoint on the line where we use our function. Then refresh the page and this time instead of STEP OVER use the STEP INTO button.
 */
const PI3 = 3.14;
// let area3 = 0;
function circleArea(radius3){
    const area3 = radius3 * radius3 * PI3;
    return area3;
}
area3 = circle(3);
console.log("Area3: ", area3);
area4 = circle(4);
console.log("Area4: ", area4);

