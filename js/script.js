//Carrousel de imagenes
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

//Validacion formulario
function validar(){
    //Expresion regular de un email
    let exregEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    //Expresion regular de 8 digitos para el telefono
    let exregTelf = /^\d{8}$/;
    let sinError = true;
    let nombre = document.getElementById("nombre");
    let email = document.getElementById("email");
    let telefono = document.getElementById("telef");
    let recomendaciones = document.getElementById("recomend");
    let ltaErrores = document.getElementById("ltaErrores");
    let ltaMensajes = document.getElementById("ltaMensajes");

    ltaErrores.innerHTML = "";
    ltaMensajes.innerHTML = "";

    nombre.classList.remove("error");
    recomendaciones.classList.remove("error");
    email.classList.remove("error");
    telefono.classList.remove("error");

    if(nombre.value.trim()==""){
        let item = document.createElement("li");
         ltaErrores.appendChild(item);
        item.innerHTML = "nombre invalido";
        nombre.classList.add("error");
        sinError=false;
        nombre.focus();
    }

    if(!exregEmail.test(email.value)){
        let item = document.createElement("li");
         ltaErrores.appendChild(item);
        item.innerHTML = "Email invalido";
        email.classList.add("error");
        sinError=false;
        email.focus();
    }
    if(!exregTelf.test(telefono.value)){
        let item = document.createElement("li");
        ltaErrores.appendChild(item);
        item.innerHTML = "telefono invalido";
        telefono.classList.add("error");
        sinError=false;
        telefono.focus();
    }
    if(recomendaciones.value.trim()=="" || recomendaciones.value.length > 50){
        let item = document.createElement("li");
         ltaErrores.appendChild(item);
        item.innerHTML = "mensaje invalido";
        recomendaciones.classList.add("error");
        sinError=false;
        recomendaciones.focus();
    }
    if(sinError){
        let item = document.createElement("li");
         ltaMensajes.appendChild(item);
        item.innerHTML = nombre.value+
        "<p></p>"+"Email:  "+
        email.value+
        "<p></p>"+
        "Tu recomendacion:  "+
        recomendaciones.value+
        " <p></p>Se registro.";
        recomendaciones.value = "";
        recomendaciones.focus();
    }

    return false;
}
