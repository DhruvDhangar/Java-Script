//singleton
// Object.create

const {jsx} = require("react/jsx-runtime");

// Object literals
const Sym = Symbol("key1");

const JSuser = {
  name: "Dhruv",
  "full name": "Dhruv Dhangar",
  [Sym]: "mykey1",
  age: 18,
  email: "dhruv@gmail.com",
  location: "Surat",
};

console.log(JSuser.email);
console.log(JSuser["email"]);
