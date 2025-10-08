// for

const array = [1, 2, 3, 4, 5, 6]

// for (let i = 0; i < array.length; i++) {
//     const element = array[i];
//     console.log(element);
// }

// nested for loop

for (let i = 1; i <= 10; i++) {
    for (let j = 1; j <= 5; j++) {
        // console.log(i*j);  
    }
}

// use of continue and break in the for loop

// for (let i = 0; i < 5; i++) {
//     if(i == 3){
//         console.log("3 is detected");
//         break
//     }
//     console.log(i);
// }

for (let i = 0; i < 5; i++) {
    if(i == 3){
        console.log("3 is detected");
        continue // skips the next line of code below it for this iteration.
    }
    console.log(`value of i is : ${i}`);
}