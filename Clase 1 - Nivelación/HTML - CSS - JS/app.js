//Un comentario

/* 
Otro comentario
*/
//Para declarar variables tenemos 2 maneras: let declaramos variables cuyo contenido puede cambiar
//const declaramos variables cuya posición de memoria es constante. 

const personajes = [
    {
        id: 1,
        name: "Superman",
        ability: "Invencible"
    },
    {
        id: 2,
        name: "Wonderwoman",
        ability: "Superpower"
    },
    {
        id: 3,
        name: "Aquaman",
        ability: "Swimming"
    }
]

let personajes2 = null;

const EDAD = 22
let nombre = "Sebastian"
nombre = "Omar"

/* Tipos de variables primitivas
string: cadena de caracteres
number: números (entero o float)
boolean: true o false
null: no tiene contenido
undefined: no tiene contenido definida, no existe
 */

// console.log(personajes2);

const showButton = document.getElementById("show");
const hideButton = document.getElementById("hide");
const search = document.getElementById("search");
const list = document.getElementById("list");

console.log(showButton);

//Mostrar personajes
showButton.addEventListener('click', () => {
    // console.log("Click");
    let text = '';
    for (const personaje of personajes) {
        text = text + `<li>Id: ${personaje.id}, nombre: ${personaje.name}, habilidad: ${personaje.ability}.</li>`
    }
    list.innerHTML = text
})

//Ocultar personajes
hideButton.addEventListener('click', () => {
    list.innerHTML = ''
})

//Mostrar sólo los filtrados según input
search.addEventListener('keyup', (evento) => {
    const input = evento.target.value
    console.log(evento.target.value)
    console.log(personajes.length)
    console.log(personajes[2])

    //Filter devuelve un NUEVO array sin alterar el original, según la función callback que se cumpla dentro.
    const personajesFiltrados = personajes.filter(personaje => personaje.name.toLowerCase().includes(input))
    console.log(personajesFiltrados);

    //Mostramos el contenido en el HTML
    let text = ''
    for (const personaje of personajesFiltrados) {
        text = text + `<li>Id: ${personaje.id}, nombre: ${personaje.name}, habilidad: ${personaje.ability}.</li>`
    }
    list.innerHTML = text
})