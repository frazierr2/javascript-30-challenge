(function(){
  function playSound(e){
    var audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
    var key = document.querySelector(`.key[data-key="${e.keyCode}"]`);

    if (!audio) return;  //stop function from running all together

    audio.currentTime = 0; //rewind to the start
    audio.play();
    key.classList.add('playing');
  }

  function removeTransition(e){
    if (e.propertyName !== 'transform') return;
    this.classList.remove('playing');
  }

  var keys = document.querySelectorAll('.key');
  keys.forEach(key => key.addEventListener('transitionend',removeTransition));
  window.addEventListener('keydown', playSound);
}());
