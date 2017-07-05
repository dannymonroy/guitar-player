
window.addEventListener('keydown', function(e){
  const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
  const note = document.querySelector(`.note[data-key="${e.keyCode}"]`);
  if(!audio) return;
  audio.currentTime = 0;
  audio.play();
  note.classList.add('playing');

  setTimeout(function(){
    note.classList.remove('playing');
  }, 300);

});
