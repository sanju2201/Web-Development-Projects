// <<<<--------Event in DOM---------->>>>
// mouse event + keyboard Event
// https://developer.mozilla.org/en-US/docs/Web/Events
// click
// button press
// hover

const btn = document.querySelector(".btn-headline");
btn.addEventListener("click",function(){
    console.log("Don't Click Me !!!!!")
});

// when we write normal anonymous function so the value of (this) will be current element for which that function has been called, here it is btn
// when we write Arrow function in that case the value of (this) will be 1 level up of that perticular element where it was called, here itwill be window object
