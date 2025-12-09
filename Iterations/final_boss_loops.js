const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// const newNum = nums.map( (num) => num * 10)

// Chaining of methods/properties of array.
// const newNum = nums
//                 .map( (num) => num * 10)
//                 .filter( (num) => num > 30)

// console.log(newNum);

// Use of Reduce.

const totalNum = nums.reduce( (acc, curr) => acc + curr, 0)

console.log(totalNum);