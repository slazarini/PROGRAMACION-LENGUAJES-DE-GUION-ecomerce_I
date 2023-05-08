function mensaje(x, y) {
    //  1º declaro variables
    var clave;
    var email;

    //  2º Recogida de datos
    clave = document.getElementById('password').value;
    email = document.getElementById('correo').value;

    //  3º Muestra datos recogidos
    document.getElementById('resultado').innerHTML =
        'Autorizo a: ' + email + ' ';
}

function limpiar() {
    document.getElementById('resultado').innerHTML = '</br>';
}

function ordenSecundaria() {
    window.location.href = 'file:///Y:/Paro/Cursos/20_1072%20IFCT01PO%20PROGRAMACIÓN%20CON%20VISUL%20BASIC%20ASP.NET%203.5%20EN%20COMERCIO%20ELECTRÓNICO/PROGRAMACION-LENGUAJES+ecommerce/INICIO-JavaScript/ejemplo3-Funciones-I/ejercicio4-value+recogidaDatos.html';
}

function descarga(){
    window.print();
}

