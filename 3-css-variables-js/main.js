(function(){

  var inputs = document.querySelectorAll('.controls input');

  function handleUpdate(){
    var suffix = this.dataset.sizing || '';
    document.documentElement.style.setProperty(`--${this.name}`, this.value + suffix);
    //this.name set to this.value
  }

// When changing and after you get done then it updates
  inputs.forEach(function(input){
    input.addEventListener('change', handleUpdate);
  });
  //When you move the mouse it updates
  inputs.forEach(function(input){
    input.addEventListener('mousemove', handleUpdate);
  });
}());
