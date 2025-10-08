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

const map = new Map()

map.set("IN", "India")
map.set("USA", "United States of America")
map.set("UK", "United Kingdom")

for(const [key, value] of map){
    console.log(key, ":-", value)
}

const myObj = {
    game1 : "GTAV",
    game2 : "RDR2"
}

// for of loop cann't be used on objects.

// for(const [key, val] of myObj){
//     console.log(key, ":-", val)
// }