function presiona() {
    var fecha = new Date();
    var dia = fecha.getDay();
    console.log(dia);

    var respuesta = document.getElementById('resultado');

    switch (dia) {
        case 1:
            respuesta.innerHTML = 
            'Día 1' + '<br>' +
            ' Cocido madrileño' + ' precio 9€';
            break;
        case 2:
            respuesta.innerHTML = 
            'Día 2'+ '<br>' +
            ' Cocido madrileño' + ' precio 9€';
            break;
        case 3:
            respuesta.innerHTML = 
            'Día 3' + '<br>' +
            ' Cocido madrileño' + ' precio 9€';
            break;
        case 4:
            respuesta.innerHTML = 
            'Día 4' + '<br>' +
            ' Cocido madrileño' + ' precio 9€';
            break;
        case 5:
            respuesta.innerHTML = 
            'Día 5' + '<br>' +
            ' Cocido madrileño' + ' precio 9€';
            break;
        case 6:
            respuesta.innerHTML = 
            'Día 6' + '<br>' +
            ' Cocido madrileño' + ' precio 9€';
            break;
        default:
            respuesta.innerHTML = 'Error';
            break;
    }
}