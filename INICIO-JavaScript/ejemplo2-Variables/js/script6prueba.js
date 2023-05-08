//  Declaramos variables
var numero1;
var numero2;
var resultado;

//  Asignamos a través de prompt
numero1 = window.prompt('Introduce primer número: ');
numero2 = prompt('Introduce segundo número: ');

/*  1º  */
document.write(
    '<h4>Los valores introducidos son:</h4>'
    + '<p>' + numero1 + ' y ' + numero2 + ' </p>'
    + '<br><hr>'
);

//  Revisión y análisis de la variable
console.log(typeof(numero1));
console.log(typeof(numero2));

//  Comprobado que es un string, vamos a transformar el string a number
var entero1 = parseInt(numero1);
console.log(entero1 + typeof(entero1));
var decimal1 = parseFloat(numero1);
console.log(decimal1 + typeof(decimal1));

var entero2 = parseInt(numero2);
console.log(entero2 + typeof(entero2));
var decimal2 = parseFloat(numero2);
console.log(decimal2 + typeof(decimal2));

/*  Confirmamos datos recogidos  */
swal(
        'Los datos recogidos son: ' + numero1 + ' y ' + numero2    
);
/*
swal(
    {
        title: 'Datos recogidos',
        text: 'Pulse continuar para ver resultado',
        icon: 'success',
        button: 'continuar'
    }
);*/

/* 2º suma */
resultado = entero1 + entero2;
document.write(
    '<h5>La suma de ambos números enteros es: </h5>'
    + '<p>' + resultado + ' </p>'
);

resultado = decimal1 + decimal2;
document.write(
    '<h5>La suma de ambos números decimales es: </h5>'
    + '<p>' + resultado + ' </p>'
    + '<hr>'
);

/* 3º resta */
resultado = entero1 - entero2;
document.write(
    '<h5>La suma de ambos números enteros es: </h5>'
    + '<p>' + resultado + ' </p>'
);

resultado = decimal1 - decimal2;
document.write(
    '<h5>La suma de ambos números decimales es: </h5>'
    + '<p>' + resultado + ' </p>'
    + '<hr>'
);

/* 4º division */
resultado = entero1 / entero2;
document.write(
    '<h5>La suma de ambos números enteros es: </h5>'
    + '<p>' + resultado + ' </p>'
);

resultado = decimal1 / decimal2;
document.write(
    '<h5>La suma de ambos números decimales es: </h5>'
    + '<p>' + resultado + ' </p>'
    + '<hr>'
);

/* 5º multiplicacion */
resultado = entero1 * entero2;
document.write(
    '<h5>La suma de ambos números enteros es: </h5>'
    + '<p>' + resultado + ' </p>'
);

resultado = decimal1 * decimal2;
document.write(
    '<h5>La suma de ambos números decimales es: </h5>'
    + '<p>' + resultado + ' </p>'
    + '<hr>'
);

