function calculo(n1, n2) {
    var inputNumero = parseInt(numero.value);
    console.log(inputNumero);
    var contenedor = 'fdbfd';
    console.log(contenedor);
/*
    for (var i = 1; i <= 12; i++){
        contenedor += inputNumero + ' x ' + i + ' = ' + i * inputNumero + '<br>';
        console.log(contenedor);
    }
*/
    document.getElementById('resultado').innerHTML = 'Resultado: ' + contenedor;
}
