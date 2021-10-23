let list = document.getElementById("list");
list.addEventListener("click", pickColor);


let canvas = document.getElementById("canvas");
let canvasContext = canvas.getContext("2d");
canvas.addEventListener("mousemove", drawOnCanvas);

let	colorCircles = [];
colorCircles[0] = document.getElementById("red");
colorCircles[1] = document.getElementById("blue");
colorCircles[2] = document.getElementById("green");
colorCircles[3] = document.getElementById("yellow");
colorCircles[4] = document.getElementById("cyan");
colorCircles[5] = document.getElementById("magenta");
colorCircles[6] = document.getElementById("lime");
colorCircles[7] = document.getElementById("indigo");
colorCircles[8] = document.getElementById("black");
colorCircles[9] = document.getElementById("white");
let fiveStart = {
    bigRadius: 50,
    smallRadius: 10,
    RotationAngle: 0
 }

function pickColor(e){
	console.log(e.target.tagName);
	if (e.target.tagName == "LI") {
		if (e.target.id == "red") {
			targetColor = "#FF0000";
		}
		else if (e.target.id == "blue") {
			targetColor = "#0000FF";
		}
		else if (e.target.id == "green") {
			targetColor = "#00FF00";
		}
		else if (e.target.id == "yellow") {
			targetColor = "#FFFF00";
		}
		else if (e.target.id == "cyan") {
			targetColor = "#00FFFF";
		}
		else if (e.target.id == "magenta") {
			targetColor = "#FF00FF";
		}
		else if (e.target.id == "lime") {
			targetColor = "#00FF00";
		}
		else if (e.target.id == "indigo") {
			targetColor = "#4B0082";
		}
		else if (e.target.id == "black") {
			targetColor = "#000000";
		}
		else if (e.target.id == "white") {
			targetColor = "#FFFFFF";
		}
		for (let i = 0; i < 10; i++) {
				colorCircles[i].style.height = "50px";
				colorCircles[i].style.width = "50px";
		}
		e.target.style.height = "80px";
		e.target.style.width = "80px";
	}
}
function drawOnCanvas(e) {
	if (e.which == 1) {
		canvasContext.fillStyle = targetColor;
		canvasContext.beginPath();
		for(var i = 0; i < 5; i++){
	        x = Math.cos((18+72*i-fiveStart.RotationAngle)/180*Math.PI);
	        x = x*fiveStart.bigRadius+e.offsetX;
	        y = -Math.sin((18+72*i-fiveStart.RotationAngle)/180*Math.PI);
	        y = y*fiveStart.bigRadius+e.offsetY;
	        canvasContext.lineTo(x,y);
	        x = Math.cos((54+i*72-fiveStart.RotationAngle)/180*Math.PI);
	        x = x*fiveStart.smallRadius+e.offsetX;
	        y = -Math.sin((54+i*72-fiveStart.RotationAngle)/180*Math.PI);
	        y = y*fiveStart.smallRadius+e.offsetY;
	        canvasContext.lineTo(x,y);
        }
		canvasContext.fill();
	}
}