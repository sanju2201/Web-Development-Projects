// <<<<--------functions---------->>>>

// Function Declaration
// function isEvenDeclaration(num){
//     return num % 2 === 0;
// }
// console.log(isEvenDeclaration(4));

// Function Expression
// const isEvenExpression = function(num){
//     return num % 2 === 0;
// }
// console.log(isEvenExpression(5));

// Arrow Function 
// Rule to Write a Arrow Functions
// 1. if there is 0 or more then 1 parameter paranthesis are required. For 1 parameter only its optional.
// 2. if there is one line of code in literal or body, curly braces are not required.
// 3. if there is only 1 line of code in body and that also return statement than the return keyword is also optional.

// const functionName = ()=>{}; 

// 1st way
// const isEvenArrow1 = (num) => {
//     return num % 2 === 0;
// };
// console.log(isEvenArrow1(9));

// 2nd way
// const isEvenArrow2 = num => num % 2 === 0;
// console.log(isEvenArrow2(2));

// 3rd way
// const addTwo = (num1,num2) => num1 + num2;
// console.log(addTwo(9,5));

// <<<<--------Functions inside Function---------->>>>

// function app(a,b){
//     const twoSum = (num1,num2)=>{
//         console.log(num1+num2);
//     }

//     const miltiply = function(x,y){
//         return x*y;
//     }
//     twoSum(a,b);
//     console.log(miltiply(a,b));
// console.log("Inside function");
// };
// app(5,2);

// <<<<--------LEXICAL SCOPE---------->>>>

// const myVar = "value1";
// function myApp(){
//     function myFun(){
//         // const myVar = "value23";
//         console.log("inside mFunc" ,myVar);
//     }
//     console.log(myVar);
//     myFun();
// }
// myApp();

// result at start
// value1
// inside mFunc value23

// as line 58 comment out result will be
// value1
// inside mFunc value1
// beacuse functions are tring to find the value for the variable 
// if they dont get value at there own level, they will search it on lexical parent


// <<<<--------block Scope and  Function Scope---------->>>>

// let and const ==> block Scope { block scope, variable created inside block spaces cannot be access outside the block scope}
//    {
//     let x ="sdsd";
//     console.log("Only access inside this block",x);
//    }

// var ==> function Scope
// variable created with var can be access anywhere and can be modified anywhere

// <<<<--------Defalut Parameters---------->>>>

// function myName(firstName ="sanju",lastName ="manna"){
//     console.log(firstName +" "+lastName);
// }
// myName("nikki","sanju");

// <<<<--------Rest Parameters---------->>>>


