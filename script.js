var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("gradient");
var button1 = document.getElementById("button1");
var button2 = document.getElementById("button2");





css.textContent = body.style.background + ";";


body.style.background = 
	"linear-gradient(to right, " 
	+ color1.value 
	+ ", " 
	+ color2.value 
	+ ")";

function setGradient() {
	body.style.background = 
	"linear-gradient(to right, " 
	+ color1.value 
	+ ", " 
	+ color2.value 
	+ ")";

	css.textContent = body.style.background + ";";
}

function setGradientRandom() {

}

function random_bg_color1() {
	var r = Math.floor(Math.random() * 256);
	var g = Math.floor(Math.random() * 256);
	var b = Math.floor(Math.random() * 256);
	var bgColor = "rgb(" + r + "," + g + "," + b + ")";
	body.style.background = 
	"linear-gradient(to right, " 
	+ bgColor
	+ ", " 
	+ bgColor
	+ ")";
}
function random_bg_color2() {
	var r = Math.floor(Math.random() * 256);
	var g = Math.floor(Math.random() * 256);
	var b = Math.floor(Math.random() * 256);
	var bgColor = "rgb(" + r + "," + g + "," + b + ")";
	body.style.background = 
	"linear-gradient(to right, " 
	+ color1.value 
	+ ", " 
	+ bgColor
	+ ")";
}


color1.addEventListener("input", setGradient);

color2.addEventListener("input", setGradient);

button1.addEventListener("click", random_bg_color1); 

button2.addEventListener("click", random_bg_color2); 