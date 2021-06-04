let w = document.querySelector(".w");
let r = document.querySelector(".r");
let g= document.querySelector(".g");
let b = document.querySelector(".b");
let solid = document.querySelector('.solid');
let dotted = document.querySelector(".dotted");
let fine = document.querySelector(".fine");
let topFIne= document.querySelector(".topFine");
let topNormal = document.querySelector(".topNormal");
let topEpais =document.querySelector(".topEpais");

let divCouleur= document.querySelector(".carreCouleur")


w.addEventListener("click", ()=>{
    divCouleur.style.backgroundColor = "grey"
});

r.addEventListener("click", ()=>{
    divCouleur.style.backgroundColor = "tomato"
});

g.addEventListener("click", ()=>{
    divCouleur.style.backgroundColor = "green"
});

b.addEventListener("click", ()=>{
    divCouleur.style.backgroundColor = "blue"
});

solid.addEventListener("click", ()=>{
    divCouleur.style.border = "2px solid black"
});

dotted.addEventListener("click", ()=>{
    divCouleur.style.border = "2px dotted black"
});

fine.addEventListener("click", ()=>{
    divCouleur.style.borderLeft = "1px solid black";
    divCouleur.style.borderRight = "1px solid black";
    divCouleur.style.borderBottom = "1px solid black";
    divCouleur.style.borderTop ="none"
});

topFIne.addEventListener("click", ()=>{
    divCouleur.style.borderTop = "2px solid red"
});
topNormal.addEventListener("click", ()=>{
    divCouleur.style.borderTop = "4px solid red"
});
topEpais.addEventListener("click", ()=>{
    divCouleur.style.borderTop = "8px solid red"
});

let inputColor = document.querySelector(".barrecoleur").firstElementChild;
let btn = inputColor.nextElementSibling;


btn.addEventListener("click", ()=>{
    divCouleur.style.backgroundColor = inputColor.value;
});

let inputBorder = document.querySelectorAll("input")[1];

inputBorder.addEventListener("click", ()=>{
    divCouleur.style.border=`${inputBorder.value}px solid black`;
});
let inputBorderRight = document.querySelectorAll("input")[2];

inputBorderRight.addEventListener("click", ()=>{
    divCouleur.style.borderRight=`${inputBorderRight.value}px solid black`;
});
let inputBorderLeft = document.querySelectorAll("input")[3];

inputBorderLeft.addEventListener("click", ()=>{
    divCouleur.style.borderLeft=`${inputBorderLeft.value}px solid black`;
});
let inputBorderTop = document.querySelectorAll("input")[4];

inputBorderTop.addEventListener("click", ()=>{
    divCouleur.style.borderTop=`${inputBorderTop.value}px solid black`;
});
let inputBorderBottom = document.querySelectorAll("input")[5];

inputBorderBottom.addEventListener("click", ()=>{
    divCouleur.style.borderBottom=`${inputBorderBottom.value}px solid black`;
});


let inputRadius = document.querySelectorAll("input")[6];
let inputRadiusRB = document.querySelectorAll("input")[7];
let inputRadiusBR = document.querySelectorAll("input")[8];
let inputRadiusLB = document.querySelectorAll("input")[9];
let inputRadiusTL = document.querySelectorAll("input")[10];

inputRadius.addEventListener("click", ()=>{
    divCouleur.style.borderRadius = `${inputRadius.value}px`
});
inputRadiusTL.addEventListener("click", ()=>{
    divCouleur.style.borderRadius = ` ${inputRadiusTL.value}px ${inputRadiusRB.value}px ${inputRadiusBR.value}px ${inputRadiusLB.value}px`
});

inputRadiusRB.addEventListener("click", ()=>{
    divCouleur.style.borderRadius = ` ${inputRadiusTL.value}px ${inputRadiusRB.value}px ${inputRadiusBR.value}px ${inputRadiusLB.value}px`
});

inputRadiusBR.addEventListener("click", ()=>{
    divCouleur.style.borderRadius = ` ${inputRadiusTL.value}px ${inputRadiusRB.value}px ${inputRadiusBR.value}px ${inputRadiusLB.value}px`
});

inputRadiusLB.addEventListener("click", ()=>{
    divCouleur.style.borderRadius = `${inputRadiusTL.value}px ${inputRadiusRB.value}px ${inputRadiusBR.value}px ${inputRadiusLB.value}px`
});




