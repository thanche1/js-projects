const dogs = [{ name: 'Snickers', age: 2 }, { name: 'hugo', age: 8 }];

function makeGreen() {
  const p = document.querySelector('p');
  p.style.color = '#BADA55';
  p.style.fontSize = '50px';
}

// Regular
console.log('hello');

// Interpolated
console.log('Hello I am %s string!', '+poop');

// Styled
console.log('%c I am some great Text', 'font-size: 50px; background: red; text-shadow: 10px 10px 0 blue;');

// warning!
console.warn('OH NOOOOOooo');

// Error :|
console.error('Shiiiit!!');

// Info
console.info('crocodiles eat 3 to 4 people per year!!')

// Testing
const p = document.querySelector('p');
console.assert(p.classList.contains('ouch'), 'that is wrong'); // will fire only if somethings wrong.

// clearing
console.clear();

// Viewing DOM Elements
console.log(p); // the actual element
console.dir(p); // all the methods

// Grouping together
dogs.forEach(dog => {
  console.group(`${dog.name}`);
  console.log(`This is a ${dog.name}`);
  console.log(`${dog.name} is ${dog.age} years old`);
  console.log(`${dog.name} is ${dog.age * 7} dog years old`);
  console.groupEnd(`${dog.name}`);
});
// counting
console.count('Jnap');
console.count('Jnap');
console.count('Ckreakch');
console.count('Jnap');
console.count('Jnap');
console.count('Ckreakch');
console.count('Jnap');
console.count('Ckreakch');
console.count('Ckreakch');
console.count('Jnap');

// timing
console.time('fetching data');
fetch('https://api.github.com/users/wesbos')
  .then(data => data.json())
  .then(data => {
    console.timeEnd('fetching data');
    console.log(data);
  });

console.table(dogs)
