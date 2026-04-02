console.log("Script Started");

//Start the game
function start() {
    createSquare(23);
    createSquare(45);
    createSquare(75);
    createSquare(200);
    createSquare(16);
    createSquare(47);
    createSquare(90);
     console.log(Math.random() * 1000);
}

//Creates Square.

function createSquare(size) {
    //Creates an element.
   let square = document.createElement("div");

    //Set some styles to make it a square.
    square.style.background = "white";
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