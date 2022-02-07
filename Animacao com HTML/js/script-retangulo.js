
let tela = document.getElementById("tela");

let ctx = tela.getContext("2d");



let circle = {

    x : 250,
    y : 250,
    raio : 100,
    inicio : 0,
    fin : 0,
    antHora: true,

}

function drawCircle(c){

    ctx.beginPath();
    ctx.rect(0, 0, 500, 500)
    ctx.fillStyle = "aquamarine";
    ctx.fill();


    ctx.beginPath();
    ctx.strokeStyle = "blue";
    ctx.arc(c.x, c.y, c.raio, c.inicio, c.fin, c.antHora);
    ctx.stroke();

}

setInterval(function() {

    if(circle.fin < 2 * Math.PI) {
        circle.fin += 0.3;
        circle.x += 3;
    }

    drawCircle(circle);
    
}, 110);



// ctx.beginPath();

// ctx.lineWidth = 4;
// ctx.strokeStyle = "red";
// ctx.moveTo(30, 30);
// ctx.lineTo(470, 30);
// ctx.lineTo(470, 400);
// ctx.lineTo(30, 400);
// ctx.closePath();
// ctx.stroke();

