//Fecha
// Obtener la fecha actual
var fechaActual = new Date();

// Obtener el año actual y asignar en la variable
document.getElementById('fecha').textContent = fechaActual.getFullYear();





//VALIDAR FORMULARIO DE CONTACTO

if (document.getElementById('formulario-contacto')) {
    //declarar las variables
    const nombreApellido = document.getElementById('nombre-apellido');
    const correoElectronico = document.getElementById('email');
    const mensaje = document.getElementById('mensaje');

    document.getElementById('formulario-contacto').addEventListener('submit', (evento) =>{
        evento.preventDefault();
        //evita que el formulaio se envie
        
        let erroresEncontrados = false;

        //ocultar el mensaje error antes de realizar la validación
        document.getElementById('mensaje-error-nombre').style.color = 'white';
        document.getElementById('mensaje-error-email').style.color = 'white';
        document.getElementById('mensaje-error-mensaje').style.color = 'white';

        console.clear();
        console.log('-'.repeat(20));
        console.log('Error al enviar el formulario:');

        //validamos
        if(!/^[a-zA-ZÀ-ÿ]{2,50}(?: [a-zA-Z]{2,50})*$/.test(nombreApellido.value)){
            document.getElementById('mensaje-error-nombre').style.color = 'red';
            console.log('Nombre y apellido incorrectos');
            erroresEncontrados = true;
        }
        if(!/^.+@.+\.com$/.test(correoElectronico.value)){
            document.getElementById('mensaje-error-email').style.color = 'red';
            console.log('Correo eléctronico incorrecto');
            erroresEncontrados = true;
        }
        if(!mensaje.value){
            document.getElementById('mensaje-error-mensaje').style.color = 'red';
            console.log('Mensaje incorrecto o vacio')
            erroresEncontrados = true;
        }

        //Si no hubo errores, podemos continuar con el envío del formulario
        if(erroresEncontrados){
            console.log('-'.repeat(20));
        }
        else{
            console.clear();
            console.log('Formulario enviado exitosamente.');
            //resetear formulario
            document.getElementById('formulario-contacto').reset();
            //Mostrar mensaje enviado exitosamente
            document.getElementById('mensaje-enviado').style.display = 'block';

            //Ocultar el mensaje después de 5 segundos
            setTimeout(()=>{
                document.getElementById('mensaje-enviado').style.display = 'none';
            }, 3000);
            //3000 milisegundos
        }
    })
}




//VALIDAR FORMULARIO DE INICIO DE SESION
if(document.getElementById('formulario-iniciar-sesion')){
    //declarar las variables
    const correoElectronicoUsuario = document.getElementById('email-usuario');
    const contrasenia = document.getElementById('contrasenia');

    document.getElementById('formulario-iniciar-sesion').addEventListener('submit', (evento) =>{
        evento.preventDefault();
        //evita que el formulaio se envie
        
        let erroresEncontrados = false;

        //ocultar el mensaje error antes de realizar la validación
        document.getElementById('mensaje-error-email-usuario').style.color = 'white';
        document.getElementById('mensaje-error-contrasenia').style.color = 'white';

        console.clear();
        console.log('-'.repeat(20));
        console.log('Error al enviar el formulario:');

        //validamos
        if(!/^.+@.+\.com$/.test(correoElectronicoUsuario.value)){
            document.getElementById('mensaje-error-email-usuario').style.color = 'red';
            console.log('Correo eléctronico incorrecto');
            erroresEncontrados = true;
        }
        if(contrasenia.value.length < 8){
            document.getElementById('mensaje-error-contrasenia').style.color = 'red';
            console.log('contraseña incorrecta')
            erroresEncontrados = true;
        }

        //Si no hubo errores, podemos continuar con el envío del formulario
        if(erroresEncontrados){
            console.log('-'.repeat(20));
        }
        else{
            console.clear();
            console.log('Formulario enviado exitosamente.');
            //resetear formulario
            document.getElementById('formulario-iniciar-sesion').reset();
            //Redireccionar a la página de inicio
            location.href = 'index.html';

        }
    })
}




//VALIDAR FORMULARIO DE REGISTRO
if(document.getElementById('formulario-registrar')){
    //declarar las variables
    const correoElectronicoRegistrar = document.getElementById('email');
    const contraseniaNueva = document.getElementById('contrasenia-nueva');
    const contraseniaVerificar = document.getElementById('contrasenia-verificar');

    document.getElementById('formulario-registrar').addEventListener('submit', (evento) =>{
        evento.preventDefault();
        //evita que el formulaio se envie
        
        let erroresEncontrados = false;

        //ocultar el mensaje error antes de realizar la validación
        document.getElementById('mensaje-error-email-registro').style.color = 'white';
        document.getElementById('mensaje-error-contrasenia-1').style.color = 'white';
        document.getElementById('mensaje-error-contrasenia-2').style.color = 'white';

        console.clear();
        console.log('-'.repeat(20));
        console.log('Error al enviar el formulario:');

        //validamos
        if(!/^.+@.+\.com$/.test(correoElectronicoRegistrar.value)){
            document.getElementById('mensaje-error-email-registro').style.color = 'red';
            console.log('Correo eléctronico incorrecto');
            erroresEncontrados = true;
        }
        if(contraseniaNueva.value.length < 8){
            document.getElementById('mensaje-error-contrasenia-1').style.color = 'red';
            console.log('contraseña incorrecta')
            erroresEncontrados = true;
        }
        if(contraseniaVerificar.value !== contraseniaNueva.value || !contraseniaVerificar.value){
            document.getElementById('mensaje-error-contrasenia-2').style.color = 'red';
            console.log('contraseña incorrecta')
            erroresEncontrados = true;
        }

        //Si no hubo errores, podemos continuar con el envío del formulario
        if(erroresEncontrados){
            console.log('-'.repeat(20));
        }
        else{
            console.clear();
            console.log('Formulario enviado exitosamente.');
            //resetear formulario
            document.getElementById('formulario-registrar').reset();

            //Mostrar mensaje de registro exitoso
            document.getElementById('contenido-sesion').style.display = 'none';
            document.getElementById('registro-exitoso').style.display = 'flex';
            document.getElementById('contenido-imagen').style.display = 'inline-flex';


        }
    })
}



