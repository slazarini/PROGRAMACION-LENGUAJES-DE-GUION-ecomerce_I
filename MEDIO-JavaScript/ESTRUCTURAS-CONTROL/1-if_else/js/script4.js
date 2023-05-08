function calidad(x, y) {
    var trazabilidad = parseInt(prompt('introduce nº de trazabilidad: '));
    if (trazabilidad %2 == 0 ) {
        swal('Urgente, enviar a: Departamento de administración #Error de caducidad');
    }
    else {
        swal('Continua en producción. Responsable Departamento de logística.');
    }
}