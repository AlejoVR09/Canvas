const flag=document.getElementById("flag")
const lienzo =flag.getContext("2d")

function drawLienzo(){
    lienzo.fillRect(0,0,600,400)
}

function clearLienzo(){
    lienzo.clearRect(0,0,600,400);
}

function drawCircule(x){
    lienzo.fillStyle="blue"
    lienzo.beginPath()
    lienzo.arc(x,20,20,0,2*Math.PI)
    lienzo.fill()
}

var x=0
var sentido=1

function animation(){
    clearLienzo()
    
    if (x<=0) {
        sentido=1
    } 
    else if(x>600){
        sentido=-1
    }
    x=x+sentido

    drawCircule(x)
    
}

setInterval(animation,10)

drawLienzo()