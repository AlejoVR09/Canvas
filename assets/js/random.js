const flag=document.getElementById("flag")
const lienzo =flag.getContext("2d")

const radio=10
var positionX;
var positionY
function drawLienzo(){
    lienzo.fillRect(0,0,600,400)
}

function clearLienzo(){
    lienzo.clearRect(0,0,600,400);
}

function drawCircule(x,y,radius,color){
    lienzo.fillStyle=color
    lienzo.beginPath()
    lienzo.arc(x,y,radius,0,2*Math.PI)
    lienzo.fill()
}

function drawObjective(x,y) {
    drawCircule(x,y,radio+20,"red")
    drawCircule(x,y,radio+10,"white")
    drawCircule(x,y,radio,"red")
    console.log(x,y)
}

function randomPosition(top){
    return Math.round(Math.random()*top)
}

function animation(){
    clearLienzo()
    positionX=randomPosition(600)
    positionY=randomPosition(400)
    drawObjective(positionX,positionY)
    
}

drawLienzo()
setInterval(animation,1000)

function shot(event) {
    var x=event.pageX-flag.offsetTop;
    var y=event.pageY-flag.offsetLeft;

    if((x<positionX+radio) &&
    (x>positionX-radio) && 
    (y<positionY+radio) &&
    (y>positionY-radio)){
        alert("Shot")
    }
}

flag.onclick=shot