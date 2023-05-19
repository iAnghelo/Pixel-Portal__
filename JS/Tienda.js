const imgArray = [
    '../Imagenes/banner2.jpg',
    '../Imagenes/banner3.jpg',
    '../Imagenes/banner4.jpg',
    '../Imagenes/banner5.jpg'
]
const img = document.querySelector('#slide')
let i = 0
const slideShow = () => {
    img.src = imgArray[i]
    i = ( i < imgArray.length - 1) ? i+1 : 0
}
const interval = () => {
    setInterval(slideShow, 2000)
}