
let tela = document.getElementById("tela");

let ctx = tela.getContext("2d");

ctx.beginPath();

ctx.lineWidth = 4;
ctx.strokeStyle = "red";
ctx.moveTo(30, 30);
ctx.lineTo(470, 30);
ctx.lineTo(470, 400);
ctx.lineTo(30, 400);
ctx.closePath();
ctx.stroke();