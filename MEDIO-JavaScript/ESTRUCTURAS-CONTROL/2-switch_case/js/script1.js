function identificacion(x, y) {
    var sexo = prompt('Define tu percepción identitaria: ');

    switch (sexo.toLocaleLowerCase) {
        case 'hombre':
            break;
        case 'mujer':
            break;
        case 'transgenero':
            break;
        case 'binarios':
            break;
        case 'no binarios':
            break;
        case 'pansexuales':
            break;
        case 'fluidos':
            break;
        default:
            swal('Identificación no encontrada.');
            break;
    }
    
}