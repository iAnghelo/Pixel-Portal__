const imgArray = [
    '../Imagenes/metro_slider1.jpg',
    '../Imagenes/metro_slider2.jpg',
    '../Imagenes/metro_slider3.jpg',
    '../Imagenes/metro_slider4.jpg',
    '../Imagenes/metro_slider5.jpg',
    '../Imagenes/metro_slider6.jpg'
]
const img = document.querySelector('#slide')
let i = 0
const slideShow = () => {
    img.src = imgArray[i]
    i = ( i < imgArray.length - 1) ? i+1 : 0
}
const interval = () => {
    setInterval(slideShow, 1800)
}