const slider = document.querySelector('.items');
let isDown = false;
let startX;
let scrollLeft;

slider.addEventListener('mousedown', (event) => {
  isDown = true;
  slider.classList.add('active');
  startX = event.pageX - slider.offsetLeft;
  scrollLeft = slider.scrollLeft;
});

slider.addEventListener('mouseleave', () => {
  isDown = false;
  slider.classList.remove('active');
});

slider.addEventListener('mouseup', () => {
  isDown = false;
  slider.classList.remove('active');
});

slider.addEventListener('mousemove', (event) => {
  if (!isDown) return; // stop function from running
  event.preventDefault();

  const x = event.pageX - slider.offsetLeft;
  const walk = (x - startX) * 3; // how much have we deviated from the initial point of clicking
  slider.scrollLeft = scrollLeft - walk;

});
