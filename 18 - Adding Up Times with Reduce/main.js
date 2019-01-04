const timeNodes = Array.from(document.querySelectorAll('[data-time]'));

const seconds = timeNodes
.map(node => node.dataset.time)
.map(timeCode => {
  const [mins, secs] = timeCode.split(':').map(parseFloat);
  return (mins * 60) + secs;

  console.log(mins, secs);
})
.reduce((total, vidSeconds) => total + vidSeconds);

let secondsLeft = seconds;
const hours = Math.floor(secondsLeft / 3600);
secondsLeft = secondsLeft % 3600;

const mins = Math.floor(secondsLeft / 60);
secondsLeft = secondsLeft % 60;

console.log(hours, mins, secondsLeft);



/* timeNodes is a nodeList and not an array so it has to be converted.
  that's why we use Array.from.
  we use .map(parseFloat) because mins and secs are strings and need to be
  converted to floats.

  map takes an array and produces an array.
  reduce takes an array and produces anything we want.
 */
