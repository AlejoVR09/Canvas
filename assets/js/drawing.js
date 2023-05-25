const flag=document.getElementById("flag")
const lienzo =flag.getContext("2d")

function drawLienzo(){
    lienzo.fillStyle="gray"
    lienzo.fillRect(0,0,600,400)
}

var colores=["blue","red","black"]
var indice=0
function drawCircule(x,y){
    lienzo.fillStyle=colores[indice]
    lienzo.beginPath()
    lienzo.arc(x,y,20,0,2*Math.PI)
    lienzo.fill()
}

function msg(event) {
    const x=event.pageX-flag.offsetTop
    const y=event.pageY-flag.offsetLeft
    drawCircule(x,y)
}


flag.onclick=msg

function indiceSelect(){
    indice++
    if (indice>=colores.length) {
        indice=0
    }
    return false
}

drawLienzo()

flag.oncontextmenu=indiceSelect 