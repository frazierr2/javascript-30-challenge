(function(){
  const checkboxes = document.querySelectorAll('.inbox input[type="checkbox"]');
  // console.log(checkboxes);


  let lastChecked;

  function handleCheck(e){
    // console.log(e);
    // Check if they have the shift key down
    // And check that they are checking it
    let inBetween = false;

    if(e.shiftKey && this.checked){
      //go ahead do what we please
      //loop over every checkbox
      checkboxes.forEach(checkbox => {
        if(checkbox === this || checkbox === lastChecked){
          inBetween = !inBetween;
        }
        if(inBetween){
          checkbox.checked = true;
        }
      });
    }

    lastChecked = this;
  }
  checkboxes.forEach(checkbox => checkbox.addEventListener('click', handleCheck));
}());
