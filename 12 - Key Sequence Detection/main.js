const pressed = [];
const secretCode = 'jethronap';

window.addEventListener('keyup', (event) => {
  console.log(event.key);
  pressed.push(event.key);
  // searches from end to start of array and then slices the array to the length we want. here 9.
  pressed.splice(-secretCode.length - 1, pressed.length - secretCode.length);

  if (pressed.join('').includes(secretCode)) {
    console.log('We Love You Satana!');
    cornify_add();
  }

  console.log(pressed);
})
