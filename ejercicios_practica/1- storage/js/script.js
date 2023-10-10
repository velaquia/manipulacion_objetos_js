"use strict";

/* Tarea
 * Objetivos: adquirir herramientas y poner
 * en práctica lo visto en clase
 */

/*
    Deberá realizar los siguientes enunciados todos en este
    script de javascript. Cada enunciado agrega una funcionalidad
    extra al programa.
/*

/* 1 - Enunciado

- Debera capturar el evento "onclick" del boton "Ingresar"
y leer los datos ingresados en "usuario" y "email".
- Tome esos datos y almacenelo en memoria permanente del explorador.
- Deberá completar las etiquetas <p> de id "usuarioLogeado" y "emailLogeado"
con los datos almacenados en memoria, a fin de darle la bienvenida al usuario logeado.

*/


/* 2 - Enunciado

- Al comenzar el script se debe verificar si en memoria se encuentran
almacenados los datos de "usuario" y "email".
- En caso de que hubiera datos almacenados se debe completar los elementos
"usuarioLogeado" y "emailLogeado".
- Se debe ocultar la sección "login" (puede usar la clase CSS hidden ya creada)
y deberá revelar la sección "logout" (quitar la clase hidden).

*/


/* 3 - Enunciado

- Debera capturar el evento "onclick" del boton "Salir". Cuando este
botón sea presionado deberá borrar de memoria las variables de este programa.
- Luego deberá refrescar la página (desde javascript, con window.location.reload()) y al
volverse a cargar debería aparecer nuevamente la sección de bienvenida
ya que no debería haber más datos en memoria cargados.

*/
function logueado() {
    const login = document.querySelector('#login');
    login.classList.add('hidden');
    const logout = document.querySelector('#logout');
    logout.classList.remove('hidden');
}


const ingresar = document.querySelector('#btnIngresar')
const usuario = document.getElementById('usuario')
const email = document.getElementById('email')

ingresar.onclick = () => {
    localStorage.setItem('usuario', usuario.value);
    localStorage.setItem('email', email.value);
    let usuarioLogueado = localStorage.getItem('usuario');
    let emailLogueado = localStorage.getItem('email');
    document.getElementById('usuarioLogeado').innerHTML=usuarioLogueado;
    document.getElementById('emailLogeado').innerHTML=emailLogueado;
    logueado()
}

if (localStorage.getItem('usuario') && localStorage.getItem('email') !==null) {
    let usuarioLogueado = localStorage.getItem('usuario');
    let emailLogueado = localStorage.getItem('email');
    document.getElementById('usuarioLogeado').innerHTML=usuarioLogueado;
    document.getElementById('emailLogeado').innerHTML=emailLogueado;
    logueado()
}

const salir = document.querySelector('#btnSalir')
salir.onclick = () => {
    localStorage.clear()
    window.location.reload()
}
