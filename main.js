function tocaSomPom (idElementoAudio) {
    document.querySelector(idElementoAudio).play();
}


const ListaDeTeclas = document.querySelectorAll('.tecla');

let contador = 0

while (contador < ListaDeTeclas.length) {
    ListaDeTeclas[contador].onclick = tocaSomPom
    contador = contador + 1 
}