import "./style.css";

const imgs = Array.from(document.querySelectorAll(".container"));
const body = document.querySelector("body");
let index = 0;

function selectImg(i){
    imgs.forEach((x) => {
        x.style.display = "none";
    })    
    imgs[i].style.display = "block";
}

function arrow(dir){
    index += dir;
    if (index > 2) index = 0;
    if (index < 0) index = 2;
    selectImg(index);
}

selectImg(index);

const buttonAlante = document.createElement("button");
const buttonAtras = document.createElement("button");

buttonAlante.innerText = "P'alante";
buttonAtras.innerText = "P'atras";

buttonAlante.addEventListener("click", () => arrow(1));
buttonAtras.addEventListener("click", () => arrow(-1));

body.appendChild(buttonAlante);
body.appendChild(buttonAtras);