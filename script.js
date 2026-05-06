// Create a boolean variable to track current mode
let darkMode = false;

/* NEW FUNCTION: document.querySelector()
    lets us SELECT an HTML ELEMENT from the page to store a REFRENCE (pointer) to that element
*/

const body = document.querySelector("body");

// heading is a JS VARIABLE that points to the element with the id="main-heading" (like selecting in CSS)
const heading = document.querySelector("#main-heading");
const description = document.querySelector("#description");
const toggleBtn = document.querySelector("#toggle")

// Can change attributes & properties using JS
heading.textContent = "Light & Dark Website"; // JS wrote HTML code!
heading.style.color = "hotpink";
body.style.background = "pink";
