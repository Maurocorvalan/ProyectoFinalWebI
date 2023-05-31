let cont=0;
let imagenes = ["img/imgcarrousel1.jpg",
                "img/imgcarrousel2.jpg",
                "img/imgcarrousel3.jpg",
                "img/imgcarrousel4.jpg",
                "img/imgcarrousel5.jpg",
                "img/imgcarrousel6.jpg",
                "img/imgcarrousel7.jpg",
                "img/imgcarrousel8.jpg",
                "img/imgcarrousel9.jpg",
                "img/imgcarrousel10.jpg",
                ];
document.fotoCarrousel.src = imagenes[0];



let btnDerecho = document.querySelector(".cambioAdelante");
let btnIzquierdo = document.querySelector(".cambioAtras");
function moverAdelante(){
    cont++;
    if(cont > imagenes.length -1){
        cont = 0;
    }
    document.fotoCarrousel.src = imagenes[cont];
}
btnDerecho.addEventListener("click", moverAdelante);

function moverAtras(){
    cont--;
    if(cont < 0){
        cont = imagenes.length -1;
    }
    document.fotoCarrousel.src = imagenes[cont];
}
btnIzquierdo.addEventListener("click",moverAtras);
