function calcular(x, y) {
    var peso;
    peso = parseFloat(calculoPeso.value);
    var altura;
    altura = parseFloat(calculoAltura.value);

    var imc = peso / (altura / 100 * altura / 100);
    console.log(imc);

    var respuesta = document.getElementById('resultado');

    /*  menor de 18.5 o igual extrema delgadez
    menor o igual a 24,9 normal
    menor o igual a 29.9 ligero sobrepeso
    mayor a 30 obesidad
    */
    var condicion = '';
    if (imc < 18.5) {
        condicion = 'Extrema delgadez';
    } else if (imc < 24, 9) {
        condicion = 'Normal';
    } else if (imc < 30) {
        condicion = 'Ligero sobrepeso';
    } else if (imc >= 30) {
        condicion = 'Obesidad';
    }
    console.log(condicion);
    respuesta.innerHTML = 'IMC: ' + condicion;
}

