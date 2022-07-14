//Declaración de la promesa
const promesa = new Promise ((accept, reject) => {
    //Hay determinado codigo dentro de la promise que tarda en resolverse
    //Puede tener dos resultados: accept (se resuelve la promesa) y otro resultado
    //para reject (se rechazaría la promesa, por algún error que haya ocurrido)
    console.log("Hola en promise");
    if (Math.random() > 0.7) {
        accept({value: "Se cumple la promise"})
    } else {
        reject({errorMessage: "Se rechazó la promise"})
    }
})

console.log("Fuera de la promise");

promesa.then(
    result => console.log(`Se resolvió bien: ${result.value}`),
    error => console.log(`Hubo un error: ${error.errorMessage}`)
)

//Otra forma
/* promesa
.then(result => console.log("Se cumplió la promesa. El resultado fue: ", result))
.catch(error => console.log("Hubo un error: ", error)) */