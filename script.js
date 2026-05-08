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

// Define what happens when button is clicked
function toggleMode(){
    console.log("triggered function");
    // 1. Flip the boolean variable to track the mode
    darkMode = !darkMode;
    console.log(darkMode);
    // 2. Conditionally apply styles depending on mode
    if (darkMode == true) {
        console.log("apply dark styles");
        body.style.background = "black";
        heading.style.color = "violet";
        description.style.color = "white";
        description.textContent = "Welcome to the dark side! 😈";
        toggleBtn.textContent = "Switch to light";
    }
    else {
        console.log("apply light styles");
        body.style.background = "white";
         heading.style.color = "pink";
        description.style.color = "black";
        description.textContent = "Welcome to the light side! 👼";
        toggleBtn.textContent = "Switch to dark";
    }
}

// Attach function to the actual button
toggleBtn.addEventListener("click", toggleMode);