import {update as updateSnake, draw as drawSnake, getSnakeHead, snakeIntersection, snakeBodySize, SNAKE_SPEED} from './snake.js'
import {update as updateFood, draw as drawFood} from './food.js'
import {outsideGrid} from './grid.js'

let lastRenderTime = 0
let gameOver = false;
const SNAKE_WIN_SIZE = 30
const gameBoard = document.getElementById('game-board')

function main(currentTime) {
    if (gameOver) {
        reloadWindows('You lost. Press ok to restart')
        return
    }
    if (checkWin()) {
        reloadWindows('You won. Would you like to try again? If so press "Ok" to restart.')
        return
    }

    window.requestAnimationFrame(main)

    const secondsSinceLastRender = (currentTime - lastRenderTime) / 1000;
    if (secondsSinceLastRender < 1 / SNAKE_SPEED) {
        return
    }

    console.log('Render');
    lastRenderTime = currentTime

    update();
    draw()
}

window.requestAnimationFrame(main)

function update() {
    updateSnake()
    updateFood()
    checkDeath()
    checkWin()
}

function draw() {
    gameBoard.innerHTML = '' // clear board to remove previos snake pieces

    drawSnake(gameBoard)
    drawFood(gameBoard)
}

function checkDeath() {
    gameOver = outsideGrid(getSnakeHead()) || snakeIntersection()
}

function checkWin() {
    return snakeBodySize() == SNAKE_WIN_SIZE;
}

function reloadWindows(message) {
    if (confirm(message)) {
        window.location = '/snake/index.html'
    }
}