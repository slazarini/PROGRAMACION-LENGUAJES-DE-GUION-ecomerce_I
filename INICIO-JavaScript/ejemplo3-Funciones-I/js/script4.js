function autorizacion(x, y) {
    //  1º declaro variables
    var nombre;
    var apellidos;
    var email;

    //  2º Recogida de datos
    nombre = document.getElementById('nombre').value;
    apellidos = document.getElementById('apellido').value;
    email = document.getElementById('correo').value;

    //  3º Muestra datos recogidos
    document.getElementById('resultado').innerHTML =
        'Autorizo a: ' + nombre + ' ' + apellidos + ' con email: ' + email;
}
