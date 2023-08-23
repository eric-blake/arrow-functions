/**
 * To run this file in Gitpod, use the 
 * command node arrow-functions.js in the terminal
 */

// // Vanilla JavaScript Function
function addTwoNumbers0(a, b) {

    return a + b;
}

let sum0 = addTwoNumbers0(3,5);
console.log(sum);

// Arrow Function With Parameters

const addTwoNumbers = (a, b) => {
    return a + b;
}
let sum = addTwoNumbers(3,5);
console.log(sum);

// Single Line Arrow Function With Parameters

const addTwoNumbers2 = (a, b) => a + b;

let sum2 = addTwoNumbers(3,5);
console.log(sum);


// Implicit Returns
const saySomething = message => console.log(message);
saySomething("hello there");

const sayHello = () => console.log("hello")


// Returning Multiple Lines
const returnMultipleLines = () => (
    <p>
        This is a multiline string!
    </p>
)
console.log(returnMultipleLines)