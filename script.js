var imgs = []
var slider
var imgAtual
var MaxImg
var tmp
var tempoTroca
function Preload(){
    var s=1   
    
    for(let i = 0; i < 4; i ++){
    imgs[i] = new Image()
    imgs[i].src= "imgs/s"+s+".png"
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
    tempoTroca = 0
    anima()
}

function troca(dir){
    tempoTroca = 0
    imgAtual+=dir
    if(imgAtual > MaxImg){
        imgAtual = 0
    } else if(imgAtual < 0){
    imgAtual = MaxImg
}
    carregaimgs(imgAtual)
}

function anima(){
    tempoTroca++
    if(tempoTroca >= 300){
        tempoTroca = 0
        troca(1)
    }
    window.requestAnimationFrame(anima)
}


window.addEventListener("load", inicia)


let btntop = document.getElementById("btntop")

btntop.addEventListener("click", ()=>{
    window.scrollTo(0, 0)
} )