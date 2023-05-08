/*
var valor1 = parseFloat(prompt('Introduce primer valor: '));
var valor2 = parseFloat(prompt('Introduce segundo valor: '));
*/

function suma() {
    let valor1 = prompt('Introduce primer valor: ');
    let valor2 = prompt('Introduce segundo valor: ');
    swal('Suma: ' + (parseFloat(valor1) + parseFloat(valor2)) );
}

function resta() {
    let valor1 = parseFloat(prompt('Introduce primer valor: '));
    let valor2 = parseFloat(prompt('Introduce segundo valor: '));
    swal('Resta: ' + (valor1 - valor2) );
}

function multiplicacion() {
    let valor1 = prompt('Introduce primer valor: ');
    let valor2 = prompt('Introduce segundo valor: ');
    swal('Multiplicacion: ' + (valor1 * valor2) );
}

function division() {
    let valor1 = prompt('Introduce primer valor: ');
    let valor2 = prompt('Introduce segundo valor: ');
    swal('Division: ' + (valor1 / valor2) );
}