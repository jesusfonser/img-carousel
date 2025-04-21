import "./style.css";

const imgs = Array.from(document.querySelectorAll(".container"));
const bolitas = Array.from(document.querySelectorAll(".bolita"));
const derecha = document.getElementById("droite");
const izqda = document.getElementById("gauche");

derecha.addEventListener("click", () => arrow(1));
izqda.addEventListener("click", () => arrow(-1));

let index = 0;

bolitas.forEach((x, ind) =>{
    x.addEventListener("click", () =>{
        index = ind
        selectImg(index);
    })
});

function selectImg(i){
    imgs.forEach((x) => {
        x.style.display = "none";
    })
    
    bolitas.forEach((x) =>{
        x.style.color = "rgb(119, 235, 220)";
    })
    
    imgs[i].style.display = "block";
    bolitas[i].style.color = "blue";
}

function arrow(dir){
    index += dir;
    if (index > 2) index = 0;
    if (index < 0) index = 2;
    selectImg(index);
}

selectImg(index);