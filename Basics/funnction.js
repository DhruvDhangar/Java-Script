function sayMyname(){
    console.log("Heisenbreg !!");
}

// sayMyname() // Executing function.

function addTwoNumbers(number1, number2){
    // console.log(number1 + number2); // problematic.
    return number1 + number2; // return statement.
}

const result = addTwoNumbers(2,3)
// console.log(result);

// function userNotification(username){
//     return `${username} just logged in`
// }

// console.log(userNotification("Dhruv"));

// console.log(userNotification()); // if we do not pass the argument it'll be considered as undefinned not null.

/*
    To solve this issue we can use if statement.
*/

function userNotification(username = "sam"){ // if you declare the parameter already for the function. if the user enters his own username, function declared value will be overwrited.
    if(!username){
        console.log("Please enter your Username !");
        return
    }
    return `${username} just logged in`
}

// console.log(userNotification());

// passing object and array in the function.

const user = {
    name : "Dhruv",
    userId : 1144
}

function handleUser(newuser){
    return `${newuser.userId} is ${newuser.name}.`
}

// console.log(handleUser(user));

// This also valid way.
console.log(handleUser({name : "Dhruv", userId : 1144}));

const myNewArry = [10, 20, 300]

function handleArray(arr){
    return arr[2]
}

// console.log(handleArray(myNewArry));

// this is also valid way.
console.log(handleArray([10, 20, 30, 40]));


// function wrapUp(...num1){ // This function will wrap up multiple arguments in an array.
//     return num1
// }

// console.log(wrapUp(100, 200, 300));

function wrapUp(val1, val2, ...num1){
    return num1
}

console.log(wrapUp(100, 200, 300, 500, 121)); // Starting from the third value array will be formed. Due to function defintion.

