import React, { useContext } from 'react'
import { ShopData } from '../../context/Shop';
import ordenGenerada from '../../services/generarOrden';
import './styles.css';

const CartContainer = () => {

  const { cart, removeItem, clearCart, total} = useContext(ShopData);

  const handlePurchase = () => {
    const order = ordenGenerada("Sebas", "sebas@live.com", cart, total)

    console.log(order);    
  }

  return (
    <div className='container'>
      {cart.map(product => {
        return (
          <div className='cart-item' key={product.id}>
            <img src={product.sprites.front_default} alt="producto-carrito"/>
            <p>{product.name}</p>
            <p>Cantidad: {product.quantity}</p>
            <button onClick={()=> removeItem(product.id)}>Eliminar producto</button>
          </div>
        )
      })}
      <div className='bottom-container'>
        <h3>Total: USD{total}</h3>
        <button onClick={handlePurchase}>Confirmar comprar</button>
      </div>
    </div>
  )
}

export default CartContainer