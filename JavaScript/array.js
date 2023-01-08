// <<<<--------array---------->>>>
// array is referance type object
// arrays are mutable can be change at any instense

// let fruits = ["apple","mango", "grapes"];
// console.log(fruits);  // output ==>  ['apple', 'mango', 'grapes']
// console.log(fruits[0]); // output ==> apple

// fruits[1] ="banana"; // mango will replaced by Banana in the actual array
// console.log(fruits);

// let mixed = [1,"sanju",1.25, {firstName : "sanju", lastName : "manna"}, null, undefined]
// console.log(mixed);

// console.log(typeof mixed); // output ==> object


// <<<<--------Array.isArray() Methods---------->>>>

// console.log(Array.isArray(mixed));  // to check the object is an array or not

// let obj = {};  // this is an object literals
// console.log(typeof obj); // output ==> object
// console.log(Array.isArray(obj)); // output ==> false

// <<<<--------.push() .pop() .shift() .unshift() Method---------->>>>

// let fruits = ["apple","mango", "grapes"];

// fruits.push("potato"); // to add at the end
// console.log(fruits);

// fruits.pop(); // to remove from the last and return the value
// console.log(fruits);

// fruits.unshift("tomato","man"); // to add at the start
// console.log(fruits);

// fruits.shift(); // to remove from the start and return the value
// console.log(fruits);

// <<<<-------- Cloning Array Method---------->>>>

// let fruits = ["apple","mango", "grapes"];

// .slice(start inex) Method
// let clonedArray1 = fruits.slice(0); // slice(start index) // slice method will clone a array from the starting index to till the end.
// console.log(clonedArray1);

// .concat(fruits) Method
// let clonedArray2 = [].concat(fruits);
// console.log(clonedArray2);

// Spread operator
// let clonedArray3 = [...fruits];
// console.log(clonedArray3);

// Create a new Array that should contains elements of old array and two more elements to be add
// 1st way
// let newArray1 = fruits.slice(0).concat(["banana","pineapple"]);
// console.log(newArray1);

// //2nd way
// let newArray2 = [].concat(fruits,["banana","pineapple"]);
// console.log(newArray2);

// // 3rd way
// let newArray3 = [...fruits,"banana","pineapple"];
// console.log(newArray3);

// <<<<--------Loops in array---------->>>>

let fruits = ["apple","mango", "grapes"];




