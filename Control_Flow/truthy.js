// const userEmail = []

// if (userEmail) {
//     console.log("Got the email");
// }
// else {
//     console.log("Don't have user email");
// }

// Falsey Values
// -> false, 0, -0, BigInt 0n, "", null, undefined, NaN

// Truthy Values
// "0", 'false', " ", [], {}, function(){}

// if(userEmail.length === 0){
//     console.log("Array is empty");
// }

// const emptyObj = {}

// if(Object.keys(emptyObj).length === 0){
//     console.log("Object is empty");
// }


// false == 0 -> true
// false == '' -> true
// 0 == '' -> true


// Nullish Coalescing Operator (??) : null undefined

// let val
// val = 10 ?? 20
// val = null ?? 20
// val = undefined ?? 30
// val = 10 ?? 20 ?? 30

// console.log(val);

// terniary oprator
// Syntax-> condition ? true : false;

let val = (10 > 9) ? "yes" : "no"
console.log(val);