var imgs = []
var slider
var imgAtual
var MaxImg
var tmp
var tempoTroca
function Preload(){
    var s=1   
    
    for(let i = 0; i < 5; i ++){
    imgs[i] = new Image()
    imgs[i].src= "imgs/s"+s+".jpg"
    s++
    }
}


function carregaimgs(img){
    slider.style.backgroundImage = "url('"+imgs[img].src+"')"



}

function inicia(){
    Preload()
    imgAtual = 0
    MaxImg = imgs.length-1
    slider = document.getElementById("Slider")
    carregaimgs(imgAtual)
    tempoTroca = 3000
    tmp = setInterval(troca, tempoTroca)
}

function troca(){
    imgAtual++
    if(imgAtual > MaxImg){
        imgAtual = 0
    }
    carregaimgs(imgAtual)
}


window.addEventListener("load", inicia)

