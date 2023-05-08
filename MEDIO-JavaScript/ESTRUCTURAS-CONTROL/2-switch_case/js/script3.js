function inicio(x, y) {
    //  1º  
    var hoy = new Date();

    var hora = hoy.getHours();
    console.log(hora);
    var minutos = hoy.getMinutes();
    var segundos = hoy.getSeconds();

    var AMoPM = mostrarAMoPM(hora);

    minutos = ajusteDosDigitos(minutos);
    segundos = ajusteDosDigitos(segundos);

    var dia = hoy.getDay();
    var mes = hoy.getMonth();
    console.log('Mes: ' + mes);
    var annio = hoy.getFullYear();

    dia = ajusteDosDigitos(dia);

    //  2º  Representación de las variables en el docType.
    document.getElementById('reloj').innerHTML = hora + ':' + minutos + ':' + segundos + ' ' + AMoPM;

    //  3º Definir la llamada al mes, estructuras de configuración para detectar el mes
    var nombreMes = '';
    switch (mes) {
        case 0:
            nombreMes = 'enero';
            break;
        case 1:
            nombreMes = 'febrero';
            break;
        case 2:
            nombreMes = 'marzo';
            break;
        case 3:
            nombreMes = 'abril';
            break;
        case 4:
            nombreMes = 'mayo';
            break;
        case 5:
            nombreMes = 'junio';
            break;
        case 6:
            nombreMes = 'julio';
            break;
        case 7:
            nombreMes = 'agosto';
            break;
        case 8:
            nombreMes = 'septiembre';
            break;
        case 9:
            nombreMes = 'octubre';
            break;
        case 10:
            nombreMes = 'noviembre';
            break;
        case 11:
            nombreMes = 'diciembre';
            break;
        default:
            break;
    }

    document.getElementById('calendario').innerHTML = dia + '/' + nombreMes + '/' + annio;
    // llamadas a funcion DELIMITANDO EL TIEMPO, callback. Un ejemplod de callback es la funcion
    //setTimeOut(argumento1,argumento2);
    setTimeout(function () { inicio() }, 1000);//Temporizador que si no viene por defecto es 1000 milisegundo
    //Entendidas como llamadas redundaantes
}

function ajusteDosDigitos(dosDigitos) {
    if (dosDigitos < 10) {
        dosDigitos = '0' + dosDigitos;
    }
    return dosDigitos;
}

// Ejercicio, establecer una función general donde si indique si es antes del meridiano o después (AM o PM)
function mostrarAMoPM(hora) {
    var AMoPM = 'AM';
    if (hora < 13) {
        AMoPM = 'AM';
    }
    else {
        hora = hora - 12;
        AMoPM = 'PM';
    }
    ajusteDosDigitos(hora);
    return AMoPM;
}