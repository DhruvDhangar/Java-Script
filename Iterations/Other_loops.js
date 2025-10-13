// for of

// const arr = [1, 2, 3, 4, 5]

// for (const num of arr) {
//     console.log(num);
// }

const greetings = "Hello World"

// for(const greet of greetings){
//     if(greet == " ")
//         continue
//     console.log(greet)
// }

// const map = new Map()

// map.set("IN", "India")
// map.set("USA", "United States of America")
// map.set("UK", "United Kingdom")

// for(const [key, value] of map){
//     console.log(key, ":-", value)
// }

const myObj = {
    game1 : "GTAV",
    game2 : "RDR2"
}

// for of loop cann't be used on objects.

// for(const [key, val] of myObj){
//     console.log(key, ":-", val)
// }

const myObj2 = {
    js : "JavaScript",
    cpp : "C++",
    rb : "Ruby"
}

// For-in loop for Accessing Objects.

for (const key in myObj2) {
    // console.log(myObj2[key]);   
}

// For-in loop can be used to access arrays also.
// for Arrays their keys are indexes.

const programming = ['cpp', 'js', 'ruby', 'java']

for (const key in programming) {
    // console.log(programming[key]);
}

// const map = new Map()
// map.set("IN", "India")
// map.set("USA", "United States of America")
// map.set("UK", "United Kingdom")


// // We cann't iterate through map.
// for (const key in map) {
//     console.log(map[key]);
// }

// For-each loop.

const coding = ["Cpp", "JS", "Java", "Python", "Ruby"]

// coding.forEach(index => {
//     console.log(index);
// });

// coding.forEach( function (item) {
//     console.log(item);
// })

// function Print(item){
//     console.log(item);
// }

// You can pass any function as a reference in the for each loop.
// coding.forEach(Print)


// For-each loop can access multiple variables.
// coding.forEach( (item, index, arr) => {
//     console.log(item, index, arr);
// })


// For-each loop on Array of Objects.

const myCoding = [
    {
        languageName : "JavaScript",
        languageFileName : ".js"
    },
    {
        languageName : "C++",
        languageFileName : ".cpp"
    },
    {
        languageName : "HTML",
        languageFileName : ".html"
    }
]

myCoding.forEach( (item) => {
    console.log(item.languageFileName);
} )