import React, { useEffect, useState } from 'react'
import ItemList from '../../components/ItemList';
import { productosRaw } from '../../mocks/productos';

const ItemListContainer = ({greeting}) => {

  const [productos, setProductos] = useState([])

  const [pokemons, setPokemons] = useState([])
  
  /* const traerProductos = new Promise ((accept, reject)=> {
    setTimeout(()=> {
      accept(productosRaw)
    }, 3000)
  })
 */

  //Queremos que la petición a la API se ejecute cuando montamos el componente
  useEffect(()=> {

    //La petición debe estar en una función asíncrona
    const getPokemons = async () => {
      try {
        const response = await fetch('https://pokeapi.co/api/v2/pokemon?limit=10')
        const data = await response.json();
        console.log(data);
        setPokemons(data.results);
      } catch (error) {
        alert(`Hubo un error: ${error.message}`)
      }
    }

    getPokemons();

  }, [])

  console.log(pokemons);

  //Siempre que tengamos un array y queramos renderizar el contenido de cada elemento,
  //vamos a utilizar el método MAP.
  //El método map recorre cada uno de los elementos, lo procesa y me devuelve otro elemento procesado
  return (
    <ItemList pokemons={pokemons}/>
  )
}

export default ItemListContainer