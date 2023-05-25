
const flag=document.getElementById("flag")
const lienzo=flag.getContext("2d")

lienzo.fillStyle="green"
lienzo.fillRect(0,0,200,400)

lienzo.fillStyle="red"
lienzo.fillRect(400,0,200,400)

lienzo.fillStyle="yellow"
lienzo.beginPath()
lienzo.moveTo(300,200)
lienzo.lineTo(200,400)
lienzo.lineTo(400,400)
lienzo.fill()

lienzo.fillStyle="blue"
lienzo.beginPath()
lienzo.arc(300,150,55,0,2*Math.PI)
lienzo.fill()

