var canvas = document.getElementById("W1");
var canvas2 = document.getElementById("W2");
var canvas3 = document.getElementById("W3");
var canvas4 = document.getElementById("W4");

var ctx = canvas.getContext("2d");
var ctx2 = canvas2.getContext("2d");
var ctx3 = canvas3.getContext("2d");
var ctx4 = canvas4.getContext("2d");

var Input1 = document.getElementById("input1");
var Input2 = document.getElementById("input2");
var Input3 = document.getElementById("input3");
var Input4 = document.getElementById("input4");

var SButton = document.getElementById("SUB");

txt = document.getElementById("Title");

ctx.fillStyle = "#ffff00";
ctx2.fillStyle = "#ffff00";
ctx3.fillStyle = "#ffff00";
ctx4.fillStyle ="#ffff00";

function roundedRectangle(con, x, y, w, h)
{
  var context = con.getContext("2d");
  var mx = x + w / 2;
  var my = y + h / 2;
  context.beginPath();
  context.strokeStyle="#ffff00";   
  context.lineWidth="6";   
  context.moveTo(x,my);
  context.quadraticCurveTo(x, y, mx, y);
  context.quadraticCurveTo(x+w, y, x+w, my);
  context.quadraticCurveTo(x+w, y+h, mx, y+h);
  context.quadraticCurveTo(x, y+h, x, my);      
  context.stroke();
}


//ctx.rotate(20 * Math.PI / 180)



ctx.fillRect(0, 0, canvas.width, canvas.height)
ctx2.fillRect(0, 0, canvas2.width, canvas2.height);
ctx3.fillRect(0, 0, canvas3.width, canvas3.height)
ctx4.fillRect(0,0,canvas4.width, canvas4.height)

SButton.onclick = function() {




canvas.style.transform = "rotate("+ String(Input1.value) +"deg)";
canvas2.style.transform = "rotate("+ String(Input2.value) +"deg)";
canvas3.style.transform = "rotate("+ String(Input3.value) +"deg)";
canvas4.style.transform = "rotate("+ String(Input4.value) +"deg)";

}




