import React from 'react'
import { useParams } from 'react-router-dom';
import ItemList from '../../components/ItemList';
import useGetCollection from '../../hooks/useGetCollection';

const ItemListContainer = ({ greeting }) => {

  const { categoryId } = useParams();
  const {data, error, loading} = useGetCollection(categoryId);

  console.log(error);

  return (
      loading ? 
      <h4>Loading</h4>
      :
      <ItemList pokemons={data} />
  )
}

export default ItemListContainer