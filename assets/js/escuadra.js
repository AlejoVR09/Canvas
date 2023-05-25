const flag=document.getElementById("flag")
const lienzo=flag.getContext("2d")

lienzo.fillStyle="yellow"
lienzo.beginPath()
lienzo.moveTo(50,50)
lienzo.lineTo(50,400)
lienzo.lineTo(400,400)
lienzo.fill()

lienzo.fillStyle="black"
lienzo.beginPath()
lienzo.moveTo(100,175)
lienzo.lineTo(100,350)
lienzo.lineTo(275,350)
lienzo.fill()

lienzo.fillRect(400,350,50,50)
lienzo.strokeStyle="green"
lienzo.strokeRect(400,350,50,50)