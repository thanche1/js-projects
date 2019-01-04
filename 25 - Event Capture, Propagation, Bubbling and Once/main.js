const divs = document.querySelectorAll('div');
const button = document.querySelector('button');

function logText(event) {
  console.log(this.classList.value);
  // event.stopPropagation(); // stop bubbling the event up.
}


divs.forEach(div => div.addEventListener('click', logText, {
  capture: false,
  once: true
}));

button.addEventListener('click', () => {
  console.log('Click!?!?!');
}, {
  once: true
});


// bubble when you click on an element that's nested the browser "zooms out".
// capture does this opposite. "zooms in". it runs the funcion on the way down.
// once will listen for an event once and then unbind itself. like removeEventListener
// you can use to do something only one time. eg. store checkout button.
