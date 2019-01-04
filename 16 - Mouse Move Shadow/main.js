const hero = document.querySelector('.hero')
const text = hero.querySelector('h1')
const walk = 100 //100px

function shadow(event) {
  const width = hero.offsetWidth;
  const height = hero.offsetHeight;
  // es6: const { offsetWidth: width, offsetHeight: height } = hero;
  let {offsetX: x, offsetY: y} = event //we could write this in the above not es6 format.
                                      //and we use let because we'll reassign x and y below.

  //console.log(x, y); //it show also the child coordinates not only the whole page.

  // this is always hero. event.target is other elements: console.log(this, event.target);

  if ( this !== event.target) {
    x = x + event.target.offsetLeft;
    y = y + event.target.offsetTop;
  }
  const xWalk = Math.round((x / width * walk) - (walk / 2));
  const yWalk = Math.round((y / height * walk) - (walk / 2));
                                                  // instead of rgba simply red
  text.style.textShadow = `
                           ${xWalk}px ${yWalk}px 0 rgba(255, 0, 255, 0.7),
                           ${xWalk * -1}px ${yWalk}px 0 rgba(0, 255, 255, 0.7),
                           ${yWalk}px ${xWalk * -1}px 0 rgba(0, 255, 0, 0.7),
                           ${yWalk * -1}px ${xWalk}px 0 rgba(0, 0, 255, 0.7)`; //* -1 makes it negative

}

hero.addEventListener('mousemove', shadow)
