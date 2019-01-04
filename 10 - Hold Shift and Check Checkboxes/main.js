const checkboxes = document.querySelectorAll('.inbox input[type="checkbox"]');
//console.log(checkboxes); to see that we really selected them

let lastChecked;


function handleCheck(event) {
  // check if shift key is down
  // AND that the box is checked.
  let inBetween = false; // flag variable set to initial value false
  if(event.shiftKey && this.checked) {
    // loop over every single checkbox
    checkboxes.forEach(checkbox =>{
      console.log(checkbox);
      if(checkbox === this || checkbox === lastChecked) { //in going up and down because of if statement
        inBetween = !inBetween
        console.log('Starting to check inbetween');
      }

      if(inBetween) {
        checkbox.checked = true;
      }
    });
  }

  lastChecked = this;
}

checkboxes.forEach(checkbox => checkbox.addEventListener('click', handleCheck))
