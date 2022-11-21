var background = document.getElementById('background-color');
background.addEventListener('click', changeColor, false);
background.addEventListener('dbclick', changeColor, false);


var colors = ["grey", "aqua", "cornflowerblue", "salmon", "orange", "black", "purple", "pink"];

function changeColor() {
  var col = document.getElementById("background-color");
  col.style.backgroundColor =
colors[Math.floor((Math.random()*4)+1)];
}
