//Spread operator, uso para combinar objetos y arrays
//Uso para copiar sin mutar al ejemplo original (muy útil en React)
const array1 = ["hola", "qué", "tal"]

//console.log(array1.length) => 3

const array6 = array1 //array6 apunta a la misma posición de memoria que array1

const array2 = [...array1] //array2 ocupa una NUEVA posición de memoria. Es independiente de array1

array6.push("miércoles")

array2.push("cómo estás?")

// console.log(array2)
// console.log(array1)

//Uso para copiar el contenido de un objeto y añadir contenido a un objeto nuevo
const objeto1 = { nombre: "Sebas", apellido: "Ancavil" }

const objeto2 = { ...objeto1, edad: 18 }

// console.log(objeto1);
// console.log(objeto2);

//Destructuring arrays

const array4 = [1, "Héctor", false];

// const varA = array4[0]
// const varB = array4[1]

const [numLoteria, nombreGanador, vacunadoCovid, varD] = array4

// console.log(numLoteria, nombreGanador, vacunadoCovid, varD);

//Destructuring objetos

const objeto3 =
{
    propiedadA: "soleado",
    temperatura: 23,
    humedad: '87%',
    llueve: false
}

// const varE = objeto3.propiedadA;
// const varF = objeto3.temperatura;

const { temperatura, propiedadA, llueve } = objeto3;

// console.log(propiedadA);

const { nombre } = objeto3;

objeto3.temperatura = 27

// console.log(temperatura);

//Ejemplo de map (devolución de otro array) y diferencia con forEach (procesamiento)
const array5 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const tablaDelSiete = array5.map(elemento => elemento * 7);
const contenido = array5.map(numero => {
    const numeroModificado = numero *4;
    return (`<p>${numeroModificado}</p>`)
})

console.log(array5);
console.log(tablaDelSiete);
console.log(contenido)