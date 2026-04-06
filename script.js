console.log("Script Started");

//Start the game
function start() {
    createSquare(93, "Black");
    createSquare(55, "White");
    createSquare(75, "Blue");
    createSquare(200, "Brown");
     console.log(Math.random() * 1000);
}

//Creates Square.

function createSquare(size, color) {
    //Creates an element.

    //Adds it to the page
   let square = document.createElement("div");

   //Add click event.
   square.addEventListener("click", handleClick);

    //Set some styles to make it a square.
    square.style.background = color;
    square.style.borderRadius = "19px";
    square.style.width = size + "px";
    square.style.height = size + "px";
    square.style.position = "absolute";
    square.style.top = getRandomY() + "px";
    square.style.left = getRandomX() + "px";

    //Add it to the page.
    document.body.appendChild(square);
}   

//Create random X coordinate.
function getRandomX() {
    let randX = Math.random() * window.innerWidth;
    return randX;
}

function getRandomY() {
    let randY = Math.random() * window.innerHeight;
    return randY;
}

// Hand the claper clicking a sqaure
function handleClick(event) {
    let square = event.target
    console.log(square);
    square.remove();
}