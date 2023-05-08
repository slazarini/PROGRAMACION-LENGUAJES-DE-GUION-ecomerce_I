/*
*       ==============================
*           metodo: getElemtById()
*       ==============================
*/

function funcionesMath(x, y) {
    /*
objeto Math, integrado en el metalenguaje que permite realizar todo tipo de calculos algoritmicos
sin olvidar que es un objeto de caracterista estática. - no se instancia el objeto -
new Math() = variable
*/
    var numero = 8;
    console.log(numero);
    var noNumero = numero.toString(numero);
    console.log(noNumero);
    document.getElementById('resultado').innerHTML =
        '<label style="color:red; font-weight:bold"> logaritmo:</label> ' + Math.log(1000) + '<br>' +
        '<label style="color:red; font-weight:bold"> Exponencial:</label> ' + Math.exp(8) + '<br>' +
        '<label style="color:red; font-weight:bold"> Raiz cuadrada:</label> ' + Math.sqrt(9) + '<br>' +
        '<label style="color:red; font-weight:bold"> Potencia de 2 elevado a 8:</label> ' + Math.pow(2, 8) + '<br>' +
        '<label style="color:red; font-weight:bold"> Valores absolutos:</label> ' + Math.abs(-122.08) + '<br>' +
        '<label style="color:red; font-weight:bold"> Redondeo medio:</label> ' + Math.round(72.4542) + '<br>' +
        '<label style="color:red; font-weight:bold"> Redondeo alza:</label> ' + Math.ceil(72.8542) + '<br>' +
        '<label style="color:red; font-weight:bold"> Semilla:</label> ' + Math.random() + '<br>' +
        '<label style="color:red; font-weight:bold"> Semilla entre el 1 y el 10:</label> ' + Math.random() * 10 + '<br>' +
        '<label style="color:red; font-weight:bold"> Valor Máximo:</label> ' + Math.max(2, 8, 6, 9) + '<br>' +
        '<label style="color:red; font-weight:bold"> (Anidacion) coseno Pi:</label> ' + Math.cos(Math.PI) + '<br>' +
        /*Fuera del rango del objeto*/
        '<label style=" color:red; font-weight:bold"> De numero a string:</label> ' + noNumero + '<br>' +
        ''
}


function funcionString() {
    /*
    Métodos de configuración, representación, manipulación....de las secuencias de caracteres
    */
    var texto = 'JavaScript structuras de Cadena de Texto';
    document.getElementById('resultado').innerHTML =
        '<label style="color:red; font-weight:bold"> Minúsculas:</label> ' + texto.toLocaleLowerCase() + '<br>' +
        '<label style="color:red; font-weight:bold"> Mayúsculas:</label> ' + texto.toLocaleUpperCase() + '<br>' +
        '<label style="color:red; font-weight:bold"> Longitud del texto:</label> ' + texto.length + '<br>' +
        '<label style="color:red; font-weight:bold"> Valores Unicodes:</label> ' + texto.indexOf('J') + '<br>' +
        ''
}


function funcionDate() {
    /*
    Objeto Date, integrado en el metalenguake que permite acceder y almacer fechas, horas, ...asociado
    a datos del calendario. Tendremos en ese instante acceso a un conjunto de métodos.
    Al ser un objeto dinámico, sin olvida que se instancia el objeto. Ej:
    var fecha = new Date();
    *Orientado a objeto
    */
    var fecha = new Date();
    document.getElementById('resultado').innerHTML =
    '<label style="color:red; font-weight:bold"> Fecha:</label> ' + fecha.toLocaleDateString() + '<br>' +
    '<label style="color:red; font-weight:bold"> Hora completa:</label> ' + fecha.toLocaleTimeString() + '<br>' +
    '<label style="color:red; font-weight:bold"> Minutos:</label> ' + fecha.getMinutes() + '<br>' +
    '<label style="color:red; font-weight:bold"> Segundos:</label> ' + fecha.getSeconds() + '<br>' +
    ''
}
