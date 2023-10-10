"use strict";

/* Tarea
 * Objetivos: adquirir herramientas y poner
 * en práctica lo visto en clase
 */

/*
    Deberá utilizar los datos en formato JSON disponible
    en "data.js" para realizar los siguientes enunciados.
/*

/* 1 - Enunciado

- Levantar los datos data.js parseando el JSON, generando
una array de personas.
- Con el array anterior utilice el metodo filter para generar
un array de personas mayores o igual a 18 años.
- Imprimir en consola el array resultante.

*/
const edadIngresada = document.getElementById('edad');
const personas = JSON.parse(personasJSON);
const ingresar = document.querySelector('#boton');
ingresar.onclick = () => {
    document.getElementById('datosPersonas').innerHTML= '';
    localStorage.clear()
    localStorage.setItem('edadIngresada', edadIngresada.value)
    let edadChekear = localStorage.getItem('edadIngresada')
    const personasFiltradas = personas.filter(persona => {
        return persona.edad > edadChekear;    
    })
    personasFiltradas.forEach(persona => {
        document.getElementById('datosPersonas').innerHTML+= 'Nombre:' + persona.nombre + ' ' + 'Edad:' + persona.edad + '<br>';
    })
    console.log(personasFiltradas)
}    


/* 2 - Enunciado

- Con el array de personas filtradas (resultado del enunciado anterior)
utilice le método forEach para en cada iteración con cada persona
renderizar el nombre y edad de esa persona en el HTML.
- Agregue al HTML los elementos que crea necesario e utilice los
mecanismos que prefiera para agregar por cada persona el nombre y edad
en el HTML (es decir, generar el contenido de forma dinámica).

*/

/* 3 - BONUS TRACK

- Si misión, en caso que decida aceptarla, es que la edad a filtrar
en el primer enunciado no sea un valor escrito en este script, sino
que sea un valor que se toma del HTML (un input).
- Que toda la acción de filtrado (enunciado 1) y renderizado (enunciado 2)
se dispare al presionar un botón en el HTML que usted agregue.

*/
