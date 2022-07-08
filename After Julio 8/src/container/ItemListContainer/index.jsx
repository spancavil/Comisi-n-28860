import React from 'react';
import Post from '../../components/Post';
import Playa from '../../assets/playaDelCarmen.jpg';
import styles from './styles.module.scss'

const ItemListContainer = ({greeting}) => {
  return (
    <div className={styles.container}>
        <h1>{greeting}</h1>
        <Post title={"Un clima maravilloso"}> 
          <img src={Playa} style={{width: '80%'}} alt="playa"/>
          <p>Los mejores días de mis vacaciones</p>
        </Post>
        <Post title="Un anuncio">
          <p>Para comprar cryptos clickear aquí</p>
          <button>Click</button>
        </Post>
    </div>
  )
}

export default ItemListContainer