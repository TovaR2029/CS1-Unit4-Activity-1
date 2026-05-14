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
        image.src = "blackfire.png";
    }
    else {
        console.log("apply light styles");
        body.style.background = "white";
         heading.style.color = "pink";
        description.style.color = "black";
        description.textContent = "Welcome to the light side! 👼";
        toggleBtn.textContent = "Switch to dark";
        image.src = "starfire.png";
    }
}

// Attach function to the actual button
toggleBtn.addEventListener("click", toggleMode);

//REVIEW: Making a button interactive
// 1. Select HTML elements for JS to target
const image = document.querySelector("#image");
const hackerBtn = document.querySelector(".hacker");
// 2. Attach a function to the button that triggers when clicked
hackerBtn.addEventListener("click", setHacker);
// 3. Define the function
function setHacker() {
    body.style.background = "black";
    body.style.fontFamily = "monospace";
    description.style.color = "rgb(235, 123, 162)";
    description.textContent = "YOU HAVE BEEN HACKED :(";
    image.src= "hacker.png";
    image.width= "350";
    heading.textContent= "MUHAHAHA";
}

const button = document.querySelector('#switch');
const pic = document.querySelector('#picture');

button.addEventListener('click', switchImage);

let toggle = true;

function switchImage() {
    toggle = !toggle;
    if(toggle == true) {
        pic.src = 'starfire.png';
    }
    else { 
        pic.src = 'blackfire.png';
    }
}


