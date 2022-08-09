import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import ItemDetail from '../../components/ItemDetail';

import { doc, getDoc } from "firebase/firestore";
import { database } from '../../firebase/config';


const ItemDetailContainer = () => {

    const [pokemonDetail, setPokemonDetail] = useState(null);

    const {itemId} = useParams();

    console.log(itemId);
    
    useEffect(() => {
        const getPokemonDetail = async () => {
            try {
                //Query a firebase. El itemId viene de manera dinámica desde los params
                const docRef = doc(database, "products", itemId);
                //Llamada a firebase
                const docSnap = await getDoc(docRef);
                
                if (docSnap.exists()) {
                  console.log(`Document data:, id:${docSnap.id} => data: ${JSON.stringify(docSnap.data())}`);
                  setPokemonDetail({id: docSnap.id, ...docSnap.data()})
                } else {
                  // doc.data() will be undefined in this case
                  console.log("No such document!");
                }
                /* const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${itemId}`)
                const data = await response.json();
                console.log(data);
                setPokemonDetail(data); */
            } catch (error) {
                alert(`Hubo un error: ${error.message}`)
            }
        }
        getPokemonDetail();

    }, [itemId])

    return (
        <ItemDetail pokemonDetail={pokemonDetail}/>
    )
}

export default ItemDetailContainer