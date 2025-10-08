const user = {
    username: "Dhruv",
    profit : 999,

    welcomeMsg: function(){
        console.log(`${this.username} , wlcome to website`);
        console.log(this);
    }
}

// user.welcomeMsg()
// user.username = "Raju"
// user.welcomeMsg()

// console.log(this);

// function chai(){
//     let username = "dhruv"
//     // console.log(this.username); // Cann't used otherthan objects.
//     console.log(this);
// }

// chai()

const chai = () => {
    console.log("Hello, Arrow function here");
    console.log(this)
}

// chai()

// const addTwo = (num1, num2) => {
//     return num1 + num2;
// }

// const addTwo = (num1, num2) => (num1 + num2); // implicit return

// if you want to return object implicitly through arrow funtion you have to wrap it in paranthesis.

const objReturn = () => ({username : "Dhruv"})

console.log(objReturn());
