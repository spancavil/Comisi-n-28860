import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import ItemList from '../../components/ItemList';
import Modal from '../../components/Modal';

const ItemListContainer = ({ greeting }) => {

  const [pokemonsOriginales, setPokemonsOriginales] = useState([])
  const [pokemons, setPokemons] = useState([])
  const [modalVisible, setModalVisible] = useState(false)

  /* const traerProductos = new Promise ((accept, reject)=> {
    setTimeout(()=> {
      accept(productosRaw)
    }, 3000)
  })
 */
  const {categoryId} = useParams();

  //Queremos que la petición a la API se ejecute cuando montamos el componente
  useEffect(() => {

    //La petición debe estar en una función asíncrona
    const getPokemons = async () => {
      try {

        if (pokemonsOriginales.length === 0){
          const response = await fetch('https://pokeapi.co/api/v2/pokemon?limit=30')
          const data = await response.json();
          // console.log(data);
          // setPokemons(data.results);
          const auxiliar = []
          for (const pokemon of data.results) {
            const response = await fetch(pokemon.url);
            const detailPokemon = await response.json();
            // console.log(detailPokemon)
            auxiliar.push(detailPokemon);
          }
          setPokemonsOriginales(auxiliar)

        } else {
          let pokemonsFiltrados = [...pokemonsOriginales]
          if(categoryId) {
            pokemonsFiltrados = pokemonsOriginales.filter(pokemon => pokemon.types[0].type.name === categoryId)
          }
          setPokemons(pokemonsFiltrados)
        }

      } catch (error) {
        alert(`Hubo un error: ${error.message}`)
      }
    }
    getPokemons();
  }, [categoryId, pokemonsOriginales])

  const handleModal = () => {
    setModalVisible(true);
  }

  //Siempre que tengamos un array y queramos renderizar el contenido de cada elemento,
  //vamos a utilizar el método MAP.
  //El método map recorre cada uno de los elementos, lo procesa y me devuelve otro elemento procesado
  return (
    <>
      <ItemList pokemons={pokemons} />
      <button onClick={handleModal}>Show modal</button>
      {modalVisible && <Modal handleClose={()=> setModalVisible(false)}/>}
    </>
  )
}

export default ItemListContainer