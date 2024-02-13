let canvas = document.getElementById("canvas");
let context = canvas.getContext("2d");

canvas.width = 400;
canvas.height = 400;

let grid = 16;
let count = 0;

let snake = {
  speed: 4,
  x: 0,
  y: 0,
  dx: grid,
  dy: 0,
  tails: [],
  countTails: 10,
};

let eat = {
  y: 0,
  x: 0,
};

function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}

function clear() {
  canvas.width = canvas.width;
  canvas.height = canvas.height;
}

function start() {
  requestAnimationFrame(start);
  if (count++ < snake.speed) {
    return;
  }
  count = 0;
  clear();
  drawEat();
  //   drawSnake();
  //   finish();
}

function drawEat() {
  context.fillStyle = "red";
  context.fillRect(eat.x, eat.y, grid - 1, grid - 1);
  if (snake.x == eat.x && snake.y == eat.y) {
    eat.x = getRandomInt(0, canvas.width / grid) * grid;
    eat.y = getRandomInt(0, canvas.height / grid) * grid;
  }
}

requestAnimationFrame(start);
