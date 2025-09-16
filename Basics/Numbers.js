const num = 400;

const var1 = new Number(400)

// console.log(var1);

// console.log(var1.toString().length) // You can convert number to String and get all the prototypes which can be performed on string.

// console.log(var1.toFixed(2)); // Fixing the precesion to 2 decimal points.

const var2 = 114.576985;

// console.log(var2.toPrecision(4));

const hundreds = 100000000000;

// console.log(hundreds.toLocaleString()); // By default US version.
// console.log(hundreds.toLocaleString('en-IN'));

// console.log(Number.MAX_VALUE);
// console.log(Number.MIN_VALUE);

// // This is the max/min valus that can be stred in a variable.
// console.log(Number.MAX_SAFE_INTEGER);
// console.log(Number.MIN_SAFE_INTEGER);

// +++++++++++++++++++++++ Maths ++++++++++++++++++++++++++

// console.log(Math.PI);
// console.log(Math.abs(-10));
// console.log(Math.round(4.6));
// console.log(Math.ceil(4.3));
// console.log(Math.floor(4.9));

// console.log(Math.min(4, -1, 2, 3));
// console.log(Math.max(4, -1, 2, 3));

console.log((Math.random()*10) + 1); // random() function will return random value form 0 -> 1

const min = 10
const max = 20

console.log(Math.floor(((Math.random()) * (max-min+1)) + min));
// this will return values from 10 -> 20 with 0 precison.