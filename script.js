var css = document.querySelector("h3");
var color1 = document.getElementById("color1");
var color2 = document.getElementById("color2");
var body = document.getElementById("gradient");
var random = document.getElementById("random");

function changeBackgroundGradient(){
	body.style.background = "linear-gradient(to right, "+ color1.value+", "+color2.value+")";
	css.textContent = body.style.background + ";";
}

//random color generator
function getRandomColor() {
  var letters = '0123456789ABCDEF';
  var color = '#';
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

function generateRandomBackground(){

	var randomColor1 = getRandomColor();
	var randomColor2 = getRandomColor();

	body.style.background = "linear-gradient(to right, "+ randomColor1 +", "+ randomColor2 +")";
	css.textContent = body.style.background + ";";
	color1.value = randomColor1;
	color2.value = randomColor2;
}

color1.addEventListener("input", changeBackgroundGradient);
color2.addEventListener("input", changeBackgroundGradient);
