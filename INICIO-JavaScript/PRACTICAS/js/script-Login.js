function autorizacion(x, y) {
    //  1º declaro variables
    var email;
    var password;

    //  2º Recogida de datos
    email = document.getElementById('correo').value;
    password = document.getElementById('password').value;


    //  3º Muestra datos recogidos
    loginCorrecto(email, password);
}

function loginCorrecto(email, password) {
    var autorizacionOK = false;
    if(email == lazaro.email@gmail.com){
        if(password = '123456'){
            autorizacionOK = true;
        }
        else{
            autorizacionOK = false;
        }
    }
    if(autorizacionOK == true){
        document.getElementById('resultado').innerHTML = 'Usuario autorizado.';
    }
    else{
        document.getElementById('resultado').innerHTML = 'No autorizado.';
    }
    document.getElementById('resultado').innerHTML = 'Usuario autorizado.';
}