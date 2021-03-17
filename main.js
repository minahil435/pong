let ballYPosition = GAME_AREA_HEIGHT / 2;
let ballYVelocity = 1;
let ballXPosition = 0;
let ballXVelocity = 1;

const ball = document.querySelector('.ball');

function BallMove() {

    ballYPosition = ballYPosition + ballYVelocity;
    ballXPosition = ballXPosition + ballXVelocity;

    ball.style.top = `${ballYPosition}px`;
    ball.style.left = `${ballXPosition}px`;

    if (ballYPosition === GAME_AREA_HEIGHT - BALL_SIZE || ballYPosition === 0) {
        ballYVelocity = ballYVelocity * - 1
    }
    if (ballYPosition >= computerPaddleYPosition &&
        ballYPosition <= (computerPaddleYPosition + PADDLE_HEIGHT) &&
        ballXPosition === GAME_AREA_WIDTH - PADDLE_WIDTH) {
        ballXVelocity = ballXVelocity * - 1
        return
    }

    if (ballYPosition >= yourPaddleYPosition &&
        ballYPosition <= (yourPaddleYPosition + PADDLE_HEIGHT) &&
        ballXPosition === PADDLE_WIDTH) {
        ballXVelocity = ballXVelocity * - 1
        return
    }

    if (ballXPosition === GAME_AREA_WIDTH - BALL_SIZE || ballXPosition === 0) {
        ballYPosition = GAME_AREA_HEIGHT / 2; ballXPosition = GAME_AREA_WIDTH / 2;
    }
}


