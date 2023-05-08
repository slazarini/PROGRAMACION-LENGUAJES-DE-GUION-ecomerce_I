//  1º Declaración de variables
var contador = 0;
var prenda1 = 179.99;
//  2º Variables secundarias
var total = 0;


function agregar() {
    sumaClick(++contador);
    venta();
    articulos();
}

function sumaClick(contador) {
    document.getElementById('nºClicks').innerHTML = (contador);
}

function borrar() {
    var contador = 0;
    total = 0;
    document.getElementById('nºClicks').innerHTML = (contador);
    document.getElementById('resultado').innerHTML = 'Carrito vacío.';
}

function venta(x, y) {
    var total = (contador * prenda1);
    document.getElementById('resultado').innerHTML = 'Total carrito: ' + total + '€';
}

function cambioPagina() {
    document.getElementById('idBotonComprar').href = 'https://www.wetsuitoutlet.es/';
}

function pedirInformacion(){
    document.getElementById('informacion').innerHTML = 'Contáctenos al info@curso.com';
}