var contador = 0;

function sumaClick(contador) {
    document.getElementById('numeroClicks').innerHTML = contador;
}

function incrementarClick() {
    //  Variable funcional
    sumaClick(++contador);
}

function limpiar() {
    contador = 0;
    sumaClick(contador);
}
