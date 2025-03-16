const canvas = document.getElementById("backgroundCanvas");
const ctx = canvas.getContext("2d");

let time = 0;
let speed = 0.05;

function resizeCanvas() {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  drawBackground();
}

function drawBackground() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  let gradientShift = Math.sin(time) * 30;
  let gradient = ctx.createLinearGradient(0, 0, canvas.width * 1.1, canvas.height * 2);
  gradient.addColorStop(0, `rgb(0, 0, 0)`);
  gradient.addColorStop(1, `rgb(60, 60, ${(160) + gradientShift})`);
  ctx.fillStyle = gradient;
  ctx.fillRect(0, 0, canvas.width, canvas.height);
  drawWave();
}

function drawWave() {
  ctx.beginPath();
  ctx.strokeStyle = "rgba(255, 255, 255, 0.8)";
  ctx.lineWidth = 2;
  let prevX = null, prevY = null;

  for (let x = 0; x < window.innerWidth + 200; x += 140) { 
    let y = canvas.height - 50 + Math.sin((x + time * 100) * 0.01) * (Math.sqrt(x) / 32)* 30;
    ctx.fillStyle = "rgba(255, 255, 255, 0.8)";
    ctx.fillRect(x - 2, y - 2, 4, 4); // Tiny square at each vertex
    
    if (prevX !== null && prevY !== null) {
      ctx.moveTo(prevX, prevY);
      ctx.lineTo(x, y);
    }
    prevX = x;
    prevY = y;
  }
  ctx.stroke();
}

function animateBackground() {
  time += (speed / 3);
  drawBackground();
  requestAnimationFrame(animateBackground);
}

window.addEventListener("resize", resizeCanvas);
resizeCanvas();
animateBackground();    