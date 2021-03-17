// Size of the game area (in px)
const GAME_AREA_WIDTH = 700;
const GAME_AREA_HEIGHT = 500;

// Size of the paddles (in px)
const PADDLE_HEIGHT = 100;
const PADDLE_WIDTH = 20;

// Size of the ball (in px)
const BALL_SIZE = 20;

// Get the computer paddle element
const computerPaddle = document.querySelector('.computer-paddle');
const yourPaddle = document.querySelector('.player-paddle');

// Initial computer paddle y-position and y-velocity
let computerPaddleYPosition = 0;
let computerPaddleYVelocity = 1;

let yourPaddleYPosition = 0;
let yourPaddleYVelocity = 1;

// Update the pong world
function update() {

    // Update the computer paddle's position
    // computerPaddleYPosition = computerPaddleYPosition + computerPaddleYVelocity;

    computerPaddleYPosition = ballYPosition - 30

    // If the computer paddle goes off the edge of the screen, bring it back
    //computerPaddleYPosition = computerPaddleYPosition % (GAME_AREA_HEIGHT - PADDLE_HEIGHT);

    // Apply the y-position 
    computerPaddle.style.top = `${computerPaddleYPosition}px`;
}

function moveUp() {
    if (!(yourPaddleYPosition <= 0)) {
        yourPaddleYPosition = yourPaddleYPosition - 10
        yourPaddle.style.top = `${yourPaddleYPosition}px`
    }
}
function moveDown() {
    if (!(yourPaddleYPosition >= GAME_AREA_HEIGHT - PADDLE_HEIGHT)) {
        yourPaddleYPosition = yourPaddleYPosition + 10
        yourPaddle.style.top = `${yourPaddleYPosition}px`
    }
}

document.addEventListener('keydown', function (event) {
    console.log(event.key)
    if (event.key === 'ArrowUp') {
        moveUp();
    }
    if (event.code === 'ArrowDown') {
        moveDown();
    }
});

// Call the update() function everytime the browser is ready to re-render
function loop() {
    update();
    BallMove();
    window.requestAnimationFrame(loop);
}
window.requestAnimationFrame(loop);