//array

const arr = [1, 2, 3, 4, 5];

// console.log(arr[0]);
// console.log(Hero.length);

// arr.push(6)
// arr.push(7)
// arr.pop()

// arr.unshift(0) // inserts element at the start of the array.
// arr.shift() // removes the added element.

// console.log(arr.indexOf(5)); // returns the index of the element if it exists in the array. otherwise -1
// console.log(arr.includes(9)); // return true/false if the array is present or not in the array.

const newArr = arr.join(); // converts array into string.

// console.log(newArr);
// console.log(typeof newArr);

// console.log("i -> original array", arr);
// const myn1 = arr.slice(1, 3); // slice will return copy of portion from the given range here -> [1, 3).
// console.log(myn1);

// console.log("ii -> original array", arr);
// const myn2 = arr.splice(1, 3); // splice split the origianl array into two parts.
// console.log(myn2);

// console.log("iii -> original array", arr);

const MCU_Hero = ["Ironman", "Thor", "Hulk"];
const DC_Hero = ["Superman", "Batman", "Wonder-Woman"];

// MCU_Hero.push(DC_Hero) // it'll push entier DC_Hero array into MCU_Hero.
// console.log(MCU_Hero);

// const allHero = MCU_Hero.concat(DC_Hero) // this will return a new array
// console.log(allHero);

const arr1 = [1, 2, 3, [4, 5, 6], [7, 8, [9, 10]]];

// console.log(arr1.flat(Infinity)); // This will convert multi-dimensional array in to 1-D array.

console.log(Array.isArray("Dhruv"));
console.log(Array.from("Dhruv")); // Converts into array.
console.log(Array.from({ name: "Dhruv" })); // if it's unable to do it will return [] -> empty array.

let score1 = 100;
let score2 = 200;
let score3 = 300;

console.log(Array.of(score1, score2, score3));
