function calcular(x, y) {
    var capital = parseInt(prompt('Introduce el importe a solicitar: '));
    var tiempo = parseInt(prompt('¿En cuantos meses deseas pagarlo?'));
    var redito = 0;

    if (tiempo <= 24) {
        redito = 0.08;
    } else if (tiempo <= 60) {
        redito = 0.10;
    } else {
        redito = 0.12;
    }

    var interes = (capital * redito * (tiempo/12));
    document.getElementById('resultado').innerHTML =
        'Crédito solicitado: ' + capital + '€' + '<br>' +
        'Tipo de interés: ' + redito * 100 + '%' + '<br>' +
        'Tiempo a pagar: ' + tiempo + ' meses' + '<br>' +
        'Intereses a abonar: ' + interes.toFixed(2) + '€' + '<br>' +
        '';

    var cuota = (interes + capital) / tiempo;
    document.getElementById('resultadoCuota').innerHTML =
        'El total de cuota al mes seria: ' + cuota.toFixed(2) + '€' + '<br>' +
        '';

}

function imprimir (x, y){
    window.print();
}