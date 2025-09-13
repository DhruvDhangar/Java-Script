let Str = "Dhruv";

// console.log("Hello " + Str); // This is old Method

console.log(`Hello ${Str}, How are you ${Str}?`); // This is Morden Method.

const node = new String("Dhangar"); // This will create a string object by calling constructor.

// console.log(node.length); //Provides the length of the string

// console.log(node.at(0)); // Returns the Character at the desired index.

// console.log(node[0]) // Returns the Character at the given index.

// console.log(node.charAt(3)) // Returns the Character at the given index.

// console.log(node.charCodeAt(3)); // Returns the Character's ASCII Code at the given index.

// console.log(node.codePointAt(3));

// console.log(node.concat(" Dhruv")); // Append the given string to the actual string.

// console.log(node.includes("Dh")); // Check if the string includes given substring ? Returns true/false.

// console.log(node.indexOf("Dha")); // Returns the starting position of the given substring of the string.

// console.log(node.lastIndexOf("gar")); // Returns the last index of the substring.

// console.log(node.localeCompare("A"));
// /*
//     Returns positive if the comparision string comes before the acutual string Alphabatically.

//     Returns negative if the comparision string comes after the actual string Alphabatically.

//     If the Comparison string is the same as the actual string it will return 0.
// */

// console.log(node.padEnd(10, "-")); // Add pading starting from the end of string to the maxlen and the given type of padding by default it is 'space'.

// console.log(node.padStart(10, '*')); // Add pading from the start till the end of the maxlen

// console.log(node.repeat(2)); // Repeats the string for the given times.

// console.log(node.replaceAll("Dha", "Fan")); // Returns the changed string after replacing provided substring and it's replacement.

// console.log(node.search("a")); // Returns the count of a substring is present in the given string.

// console.log(node.slice(3)); // returns the sliced string starting from the given index.

// console.log(node.startsWith('a', 2)); // Returns true/false if the given string is starting from the provided search string and specified index

// console.log(node.substring(1, 3)); // Returns the substring starting from 1 to till 3 which is 2.

// console.log(node.toLowerCase()); // converts string to lowercase
// console.log(node.toUpperCase()); // converts string to uppercase

// console.log(node.toString());

// console.log(node.trim()); // Remove unneccesory spacing from the starting as well fro the ending of the string.

// console.log(node.valueOf()); // returns string value as it is.

const str = "The quick red fox jumped over the lazy dog's back.";

const iterator = str[Symbol.iterator]();
let theChar = iterator.next();

while (!theChar.done && theChar.value !== " ") {
  console.log(theChar.value);
  theChar = iterator.next();
  // Expected output: "T"
  //                  "h"
  //                  "e"
}

// This is the best use of Symbol.iterator
