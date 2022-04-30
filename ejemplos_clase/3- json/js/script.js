"use strict";

console.log("----------------------------------------");
console.log("Almacenar un objeto como JSON");

const producto1 = { id: 2, producto: "Arroz" };
localStorage.setItem("producto1", producto1);

// Se guarda [object Object]
console.log(localStorage.getItem("producto1"));

const enJSON = JSON.stringify(producto1);
localStorage.setItem("producto1", enJSON);

// Se guarda '{"id":2,"producto":"Arroz"}'
console.log(localStorage.getItem("producto1"));

console.log("----------------------------------------");
console.log("Convertir JSON a objeto");

const producto2 = JSON.parse(localStorage.getItem("producto1"));
console.log(producto2);  // {id: 2, producto: 'Arroz'}
console.log(producto2.id);  // 2

console.log("----------------------------------------");
console.log("Estructura de un JSON complejo");

const jsonPokemon = {
       "id": 1,
       "name": "bulbasaur",
       "types": [
           {
               "slot": 1,
               "type": {
                   "name": "grass"
               }
           },
           {
               "slot": 2,
               "type": {
                   "name": "poison"
               }
           }
       ]
    }

console.log(JSON.stringify(jsonPokemon));
 

