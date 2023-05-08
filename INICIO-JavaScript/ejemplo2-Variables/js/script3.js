//  1º Declaramos variables
var nombre;
var apellidos;
var edad;

//  2º Asignar valor
/* nombre = 'Toño'; */

//  3º Asignarlo a través de un método
nombre = window.prompt('Introduce tu nombre: ');
apellidos = prompt('Introduce tus apellidos: ');
edad = prompt('Introduce tu edad: ');

/*
*   En ocasiones el propio sistema operativo del usuario contribuye a la gestión
*   y el buen funcionamiento de los recursos:
*   window.prompt()
*/


/*  1º  */
document.write(
    '<h2>Acceso confirmado al Curso de Programación lenguajes de guión a:</h2>'
    + '<p>' + nombre + ' ' + apellidos + ', con una edad de: ' +
    edad + ' años.</p>'
);

/*  2º  */
console.log(
    'Acceso permitido a:\n' + nombre + ' ' + apellidos +
    '\ncon edad de: ' + edad + ' años.\n'
);

/*  3º  */
swal(
    {
        title: 'Aceeso',
        text: 'autorizado',
        icon: 'success',
        button: 'continuar'
    }
);
