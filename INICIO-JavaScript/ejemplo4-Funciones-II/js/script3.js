function mostrarHora(contador) {
    let hora = new Date();
    document.getElementById('reloj').innerHTML =
        '<label style="color:red; font-weight:bold;"> Hora:</label> ' + hora.getHours() + ':' + hora.getMinutes() + ':' + hora.getSeconds() +
        '<br><img src="images/24-hour-assistance-clock-symbol-clock-icon-free-vector.jpg" width="200" height="200">' +
        '';
}

function limpiar() {
    document.getElementById('reloj').innerHTML = '</br>';
}
