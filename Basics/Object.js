//singleton
// Object.create

// Object literals
const Sym = Symbol("key1"); // addinng symbol as a key in JSuser Object.

const JSuser = {
  name: "Dhruv",
  "full name": "Dhruv Dhangar",
  [Sym]: "mykey1",
  age: 18,
  email: "dhruv@gmail.com",
  location: "Surat",
};

// console.log(JSuser.email);
// console.log(JSuser["email"]);
// console.log(JSuser["full name"]);
// console.log(JSuser[Sym]);
// console.log(JSuser);

JSuser.email = "dhruv@google.com"; // you can change objecrt's specific data using this method.

// Object.freeze(JSuser); // Freezing the object, after that noone can change Object data/key.

JSuser.email = "dhruv@apple.com" // No change will reflect bcz object is freezed.

// console.log(JSuser);

JSuser.greeting = function(){
  console.log("Hello JS user");
}

JSuser.greetingtwo = function(){
  console.log(`Hello JS user, ${this.name}`); // refering objects data in the function.
}

// console.log(JSuser.greeting());
// console.log(JSuser.greetingtwo());

/*
most of the time you will use dot (.) operator.
but in some cases where you can only access the key
using [] operator. there is no way around.
 Remember this for interview perspective.
*/

const tinderUser = new Object() // Singleton object.

// const tinderUser = {} // this is same as above but it is not singleton object.

tinderUser.id = 1244223
tinderUser.name = "woosy"
tinderUser.isLoggedIn = true

// console.log(tinderUser); 

const regualrUser = {
  email : "some@gmail.com",
  fullname : {
    username: {
      firstname : "Dhruv",
      lastname : "Dhangar"
    }
  }
}

// console.log(regualrUser.fullname);
// console.log(regualrUser.fullname.username.firstname);

const obj1 = {1 : "a", 2 : "b"}
const obj2 = {3 : "a", 4 : "b"}
const obj3 = {5 : "a", 6 : "b"}

// const obj4 = {obj1, obj2} // problem in merging two array.
// console.log(obj4);


// const obj4 = Object.assign(obj1, obj2, obj3)

/*
Syntax of Object.assign---> 
const target = {...}
const source = {***}

const combined = Object.assign(target, source)

This will modify target array/object.
If you compare combined and target it will return true.
*/

// const obj4 = Object.assign({}, obj1, obj2, obj3)
// In this case {} array/object is the target.

const obj4 = {...obj1, ...obj2, ...obj3} // Using spread.

// console.log(obj4);

// console.log(obj4 == obj1); // this will return true.

// console.log(Object.keys(tinderUser));
// console.log(Object.values(tinderUser));

// // Less used.
// console.log(Object.entries(tinderUser));

// console.log(tinderUser.hasOwnProperty('id'));
 
// ---< Deconstructing> ---

const course = {
  coursename : "js in hindi",
  price : 999,
  courseInstructor : "hitesh" 
}

const {courseInstructor : teacher} = course // This is called deconstructing object.
console.log(teacher);

// JSON -> Java-Script Object Notation

// {
//   "name" : "Dhruv",
//   "location" : "Gandhinagar",
//   "age" : 20
// }
  