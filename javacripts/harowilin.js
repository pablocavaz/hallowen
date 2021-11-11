/*******Javascripts de la presentacion de harowilin********/

function mostrar(imagen){
    document.getElementById(imagen).style.visibility="visible"
}


function ocultar(imagen){
    document.getElementById(imagen).style.visibility="hidden"
}

function sonar(sonido){
    document.getElementById(sonido).play();
}

function pausar(sonido){
    document.getElementById(sonido).pause();
}
