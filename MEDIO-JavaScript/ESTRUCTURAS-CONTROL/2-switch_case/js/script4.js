function promocion(x, y) {
    //  1º Recogida de datos
    var cupon = document.getElementById('opcion').value;

    //  2º Suelto datos
    var respuesta = document.getElementById('resultado');

    //  3º Gestionar y definir el comportamiento de la variable
    var descuento = 0;
    var precio = 10.99;
    var precioFinal = 0;
    switch (cupon.toUpperCase()) {
        case 'PLATIUM':
            descuento = 2;
            precioFinal = precio - descuento;
            respuesta.innerHTML = descuento + '€ Abono excluivo de: ' + precioFinal + '€';
            break;
        case 'DELUXE':

            break;
        case 'PLUSORO':

            break;
        default:
            swal('No ha introducido ningún código promocial correcto, o error de código. Inténtelo de nuevo.');
            break;
    }
}