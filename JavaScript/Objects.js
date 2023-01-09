// <<<<--------Objects---------->>>>

// Object are reference type
// const person = {name:"sanju",age:"24",email:"sanju@manna.com"};
// // Store as key value pair
// // Keys are called as property of the objects
// console.log(person);
// console.log(typeof person);
// console.log(person.name);
// console.log(person.age);

// const person = {name:"sanju",
//                 age:"24",
//                 hobbies : ["cricket","football","Coding"],
//                 parents : {mom : "sharmila",
//                            dad : "asit"},
//                 email : "sanju@manna",
//                 mobile:["8435181981","7000509658"],
//                 "last name" : "manna"};

// if we want to add any property name with space we have to write with "property name" : "xyz";                

// console.log(person);
// console.log(person.parents.dad);
// console.log(person.mobile[1]);

// <<<<--------Property adding using dot notaion---------->>>>

// To add new property or key:value pair to the object using dot notation
// person.gender = "male";
// person.liveIn = "bhilai";
// console.log(person);

// <<<<--------Property adding using Bracket notaion---------->>>>

// We can also called a property of an object using ["Property"]
// This method is usefull if we store any key with space as String which is otherwise not allowed
// console.log(person["parents"]);
// console.log(person["last name"]);

// To add new property or key:value pair to the object using bracket notation
// person["Village"] = "kolkata";
// console.log(person);

// to add a key which is coimg from a variable or constant
// const keyToBeAdd = "DOB"; // we need to add key as DOB

// person["keyToBeAdd"] = "22-01-1998"; // Wrong way, this will be store0 as keyToBeAdd : "date"
// console.log(person);

// person[keyToBeAdd] = "22-01-1998"; // Correct way, this will be store as DOB : "date"
// console.log(person);

// <<<<--------Iterate over the Object---------->>>>

// const person = {name:"sanju",
//                 age:"24",
//                 hobbies : ["cricket","football","Coding"],
//                 parents : {mom : "sharmila",
//                            dad : "asit"},
//                 email : "sanju@manna",
//                 mobile:["8435181981","7000509658"],
//                 "last name" : "manna"};

// To treverse through the object 
//  for(let key in person){
//      console.log(person[key]);
//  }

// to print keys and values we can use tempate string
// for(let key in person){
//     // console.log(`${key} : ${person[key]}`); 
//     // or
//     console.log(key, " : ",person[key]);
// }

// <<<<--------Getting all keys or values as an Array---------->>>>

// const keyArray = Object.keys(person);
// console.log(keyArray);

// const valuesArray = Object.values(person);
// console.log(valuesArray);

// <<<<--------Computed Properties---------->>>>

// const key1 = "object1";
// const key2 = "object2";

// const value1 = "myValue1";
// const value2 = "myValue2";

// 1st Way
// const myObj = {
//     [key1]:value1,
//     [key2]:value2
// };
// console.log(myObj);

//2nd Way

// const myObj = {};
// myObj[key1] = value1;
// myObj[key2] = value2;
// console.log(myObj);

// <<<<--------Spread Operator---------->>>>

