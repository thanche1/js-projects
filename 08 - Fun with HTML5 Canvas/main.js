const canvas = document.querySelector('#draw');
const ctx = canvas.getContext('2d');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
ctx.strokeStyle = '#BADA55';
ctx.lineJoin = 'round';
ctx.lineCap = 'round';
ctx.lineWidth = 87;
ctx.globalCompositeOperation = 'multiply'; // photoshop attributes!! look it up

let isDrawing = false;
let lastX = 0;
let lastY = 0;
let hue = 0; // check out mother effin hsl
let direction = true;

function draw(event) {
  if(!isDrawing) return; //don't run the fn when not drawing
  console.log(event);
  ctx.strokeStyle = `hsl(${hue}, 100%, 50%)`; // also on mother effin hsl


  ctx.beginPath();
  // start from:
  ctx.moveTo(lastX, lastY);
  // go to:
  ctx.lineTo(event.offsetX, event.offsetY);
  ctx.stroke();
  [lastX, lastY] = [event.offsetX, event.offsetY]; // es6 trick to declare vars. restructuring and array.

  hue++; // increment so as to change color
  if(hue >= 360) {  //reset hue is it goes around. nothing serious though.
    hue = 0;
  }

  if(ctx.lineWidth >= 87 || ctx.lineWidth <= 1) {
    direction = !direction; //flips direction
  }

  if (direction){
    ctx.lineWidth++;
  } else {
    ctx.lineWidth--;
  }
}

canvas.addEventListener('mousedown', (event) => {
  isDrawing = true;
  [lastX, lastY] = [event.offsetX, event.offsetY];
});
canvas.addEventListener('mousemove', draw);
canvas.addEventListener('mouseup', () => isDrawing = false);
canvas.addEventListener('mouseout', () => isDrawing = false);
