//IIFE Función autoejecutada
(async () => {

    //Defino la promise
    const obtenerProductos = new Promise((accept, reject) => {
        console.log("Hola en promise");
        const aceptor = Math.random();
        if (aceptor > 0.5) {
            accept({ value: "Listado de productos" })
        }
        reject({ message: "No te devuelvo nada" })
    })

    console.log("Hola fuera de promise");
    //Bloque try-catch - consumimos la promesa
    try {
        const response = await obtenerProductos;
        console.log(response)
    } catch (error) {
        console.log("Hubo un error")
        console.log(error)
    }

    //Sin try catch, al haber un error se detiene la ejecución de mi app
    /* const response = await obtenerProductos;
    console.log(response) */
    console.log("Continua la ejecución del programa")

})()