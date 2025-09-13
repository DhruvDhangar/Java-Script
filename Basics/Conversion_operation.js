let character = "";

let charToNumber = Number(character);

// console.log(charToNumber);
// console.log(typeof charToNumber);

/*
    String to Number Conversion.

    "33" => Number (33)
    "33abs" => Nan
    "" => Number (0)

*/

let str = " ";

let strToBool = Boolean(str);

// console.log(strToBool);
// console.log(typeof strToBool);

/*
    String to Boolean Conversion.

    "XyZ" => true
    "" => false
    " " => true
*/

let isLogIn = NaN;

let NumToBool = Boolean(isLogIn);

console.log(NumToBool);
console.log(typeof NumToBool);

/*
    Number to bool Conversion.

    .... -2, -1, 1, 2, .... => true
    0 => false
    null => false
    undefined => false
    NaN => false
*/

// ------operation-----------

// console.log(1+2);
// console.log(1-2);
// console.log(1*2);
// console.log(1/2);
// console.log(1%2);
// console.log(1**2);

// console.log("1" + 2 + 2);
// console.log(1 + "2" + 2);

console.log(+true);
