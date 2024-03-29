let canvas = document.getElementById("canvas");
let ctx = canvas.getContext("2d");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let config = {
  lineSize: 5,
  color: "black",
};

let posX = [];
let posY = [];
let draw = false;

canvas.addEventListener("mousedown", () => {
  draw = true;
  ctx.beginPath();
});
canvas.addEventListener("mouseup", () => {
  draw = false;
});
canvas.onmousemove = (e) => recordMousePos(e);
function recordMousePos(e) {
  if (draw) {
    posX.push(e.clientX);
    posY.push(e.clientY);
    drawLine(e.clientX, e.clientY);
  }
}
function drawLine(x, y) {
  ctx.lineWidth = config.lineSize;
  ctx.strokeStyle = config.color;
  ctx.lineTo(x, y);
  ctx.stroke();
}
function clearCanvas() {
  canvas.width = canvas.width;
  canvas.height = canvas.height;
}
document.addEventListener("keydown", (e) => {
  if (e.code == "KeyC") {
    clearCanvas();
  }
  if (e.code == "KeyZ") {
    clearCanvas();
    reDraw();
  }
  if (e.code == 'Space') {
    saveImage();
  }
});
function reDraw() {
  posX.splice(-5);
  posY.splice(-5);
  for (let i =0; i< posX.length; i++){
    drawLine(posX[i], posY[i]);
  }
}
function saveImage() {
  let image = canvas
      .toDataURL("image/png")
      .replace("image/png", "image/octet-stream");
  window.location.href = image;

}


