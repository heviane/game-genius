/* -------------- Game Colors
    0 - Green
    1 - Red
    2 - Yellow
    3 - Blue
*/
const green  = document.querySelector('.green');
const red    = document.querySelector('.red');
const yellow = document.querySelector('.yellow');
const blue   = document.querySelector('.blue');

let score = 0;
let order = [];
let clickedOrder = [];

// Create a random order of colors
let shuffleOrder = () => {
    let colorOrder = Math.floor(Math.random() * 4);
    order[order.length] = colorOrder;
    clickedOrder = [];
    for(let i in order) {
        let elementColor = createColorElement(order[i]);
        lightColor(elementColor, Number(i) + 1);
    }
}

// Turn on the next color
let lightColor = (element, number) => {
    number = number * 500;
    setTimeout(() => {
        element.classList.add('selected');
    }, number - 250);
    setTimeout(() => {
        element.classList.remove('selected');
    });
}

// Checks if the buttons clicked are the same as the order generated in the game
let checkOrder = () => {
    for(let i in clickedOrder) {
        if(clickedOrder[i] != order[i]) {
            gameOver();
            break;
        }
    }
    if(clickedOrder.length == order.length) {
        alert(`Score: ${score}\nYou won! Starting next level!`);
        nextLevel();
    }
}

// User click function
let click = (color) => {
    clickedOrder[clickedOrder.length] = color;
    createColorElement(color).classList.add('selected');
    setTimeout(() => {
        createColorElement(color).classList.remove('selected');
        checkOrder();
    },250);
}

// Function that returns color
let createColorElement = (color) => {
    if(color == 0) {
        return green;
    } else if(color == 1) {
        return red;
    } else if (color == 2) {
        return yellow;
    } else if (color == 3) {
        return blue;
    }
}

// Next game level function
let nextLevel = () => {
    score++;
    shuffleOrder();
}

// Game over function
let gameOver = () => {
    alert(`Score: ${score}!\nGame Over!\nClick OK to start a new game.`);
    order = [];
    clickedOrder = [];
    playGame();
}

// Game start function
let playGame = () => {
    alert('Welcome to Genesis! Starting new game!');
    score = 0;
    nextLevel();
}

// Click events for colors
green.onclick  = () => click(0);
red.onclick    = () => click(1);
yellow.onclick = () => click(2);
blue.onclick   = () => click(3);

// Starting the game
playGame();