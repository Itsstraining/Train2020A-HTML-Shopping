var textInput = document.getElementById('textInput');

textInput.addEventListener('keydown', function(e){
  keyDown(e.code);
});

textInput.addEventListener('keyup', function(e){
  keyUp(e.code);
});

function keyDown(key) {
  var keyPressed = document.getElementById(key);
  keyPressed.classList.add('pressed');
}

function keyUp(key) {
  var keyPressed = document.getElementById(key);
  keyPressed.classList.remove('pressed');
}

document.body.addEventListener('click', function(e) {
  console.log(e);
});