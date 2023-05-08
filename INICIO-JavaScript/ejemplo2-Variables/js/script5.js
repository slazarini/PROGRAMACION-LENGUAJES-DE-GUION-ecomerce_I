//  1º Defino variable
var dato = prompt('Introduce un número');
//  Revisión y análisis de la variable
console.log(typeof(dato));

//  Comprobado que es un string, vamos a transformar el string a number

var decimal = parseFloat(dato);
console.log(decimal + typeof(decimal));


var entero = parseInt(dato);
console.log(entero + typeof(entero));

