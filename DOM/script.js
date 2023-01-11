// <<<<--------DOM (Document object Model)---------->>>>

// console.log(window); // this will print window object
// console.log(window.document); // this will print human readable format of Document Object
// console.dir(document); // This will print autual Document object which appears in web

// <<<<--------selecting Element---------->>>>

// console.log(document.getElementById("main-heading")); // return human readable object
// console.dir(document.getElementById("main-heading"));   //return actual Object 

// const mainHeading = document.getElementById("main-heading");
// console.log(mainHeading);

// <<<<--------selecting Element by querySelecetor---------->>>>

// const mainHeading = document.querySelector("#main-heading");  // selecting ID
// console.log(mainHeading);

// const headerClass = document.querySelector(".header"); // Selecting class
// console.log(headerClass);

// const navItem = document.querySelector(".nav-item");  // this will only select the 1st element which ever come and return from their
// console.log(navItem);

// const navItem = document.querySelectorAll(".nav-item");  // to select all item with same class
// console.log(navItem);
// this .querySelectorAll method will return a Nodelist

// <<<<--------Change Text---------->>>>
// innerText , textContent

// const mainHeading = document.querySelector("#main-heading");
// console.log(mainHeading.textContent); // .textContent will return all the content present inside the perticular tag they might be visible or hide in the web                                                                                                                                                                                                  

// to change the value of any perticular thing 1st we have to select the item and assign it value using =.

// mainHeading.textContent = "my name is Sanju"; // this change the actual content on the web page
// console.log(mainHeading.textContent);

// const mainHeading = document.querySelector("#main-heading");
// console.log(mainHeading.innerText); // innerText will return what ever shown to website

// <<<<--------Change style of Element---------->>>>

// const mainHeading = document.querySelector("div.headline h2");
// console.log(mainHeading.style);
// mainHeading.style.color = "blue";
// mainHeading.style.backgroundColor = "red"; // property that we write in HTML using abc-def ==> in JS we have to use camelCase abcDef = "xyz"

// <<<<--------Get and Set Attribute---------->>>>

// const link1 = document.querySelector("a");
// console.log(link1.getAttribute("href"));

// link1.setAttribute("href","https://google.com");
// console.log(link1.getAttribute("href"));

// <<<<--------get multiple element using getElements by className---------->>>>

// const navItems = document.getElementsByClassName("nav-item");
// console.log(navItems);// this will give HTML collection of all elementwith same class
// console.log(navItems[0]);// to get 1st Element
// console.log(navItems[1]); // to get 2nd Element
// console.log(typeof navItems);

// <<<<--------get multiple element using querySelectorAll---------->>>>

// const navItem = document.querySelectorAll(".nav-item");
// console.log(navItem); // return NodeList
// console.log(navItem[0]); // return 1st element


// <<<<--------convert an HTML Collections into Array---------->>>>

// let navItem = document.getElementsByClassName(".nav-item");
// navItem = Array.from(navItem);
// console.log(navItem);

// <<<<--------innerHTML---------->>>>

