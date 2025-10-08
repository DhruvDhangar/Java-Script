// Immediately Invoked Function Expressions (IIFE)

/* Why use IIFE :
    1) To Invoke Function Immediately
    2) To Prevent function from global scope's pollution.
*/

(function chai(){
    // Named IIFE
    console.log(`DB Connected`);
})();

((name) => {
    // Simple IIFE
    console.log(`DB Connected ${name}`);
})('Dhruv');

// IIFE Syntax: ()(); --> first paranthesis for function declaration and second one for function execution.

// use of semicolon is must in the end to write another IIFE.