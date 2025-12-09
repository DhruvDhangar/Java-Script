// for of

// const arr = [1, 2, 3, 4, 5]

// for (const num of arr) {
//     console.log(num);
// }

const greetings = "Hello World"

// for(const greet of greetings){
//     if(greet == " ")
//         break;
//     console.log(greet)
// }

// const map = new Map()

// map.set("IN", "India")
// map.set("USA", "United States of America")
// map.set("UK", "United Kingdom")

// for(const [key, value] of map){ // [key, value] - destructuring array.
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
    // console.log(item.languageFileName);
} )


// Filter on Array

const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// const newNum = myNums.filter( (num) => num > 4) // Filter will return new array.

// const newNum = myNums.filter( (num) => {return num > 4}) // if you use curly braces in callback function you have to return the value. otherwise filter will return empty array

// if you want to use for-Each loop.

// const newNum = []

// myNums.forEach( (num) => {
//     if(num > 4){
//         newNum.push(num)
//     }
// })

// console.log(newNum);

const books = [
    { title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004 },
    { title: 'Book Two', genre: 'Non-Fiction', publish: 1992, edition: 2008 },
    { title: 'Book Three', genre: 'History', publish: 1999, edition: 2007 },
    { title: 'Book Four', genre: 'Non-Fiction', publish: 1989, edition: 2010 },
    { title: 'Book Five', genre: 'Science', publish: 2009, edition: 2014 },
    { title: 'Book Six', genre: 'Fiction', publish: 1987, edition: 2010 },
    { title: 'Book Seven', genre: 'History', publish: 1986, edition: 1996 },
    { title: 'Book Eight', genre: 'Science', publish: 2011, edition: 2016 },
    { title: 'Book Nine', genre: 'Non-Fiction', publish: 1981, edition: 1989 },
  ];

  let userBooks = books.filter( (bk) => bk.publish >= 2000)

  console.log(userBooks);
  
  