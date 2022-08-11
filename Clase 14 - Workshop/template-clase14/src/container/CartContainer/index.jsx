import React, { useContext } from 'react'
import { ShopData } from '../../context/Shop';
import './styles.css';
import {useNavigate} from 'react-router-dom'


const CartContainer = () => {

  const { cart, removeItem, clearCart, total } = useContext(ShopData);
  const navigate = useNavigate()

  const handlePurchase = () => {
    navigate('/checkout')
  }

  return (
    <div className='container'>
      {
      cart.length ? 
      <>
        {cart.map(product => {
          return (
            <div className='cart-item' key={product.id}>
              <img src={product.sprites.front_default} alt="producto-carrito" />
              <p>{product.name}</p>
              <p>Cantidad: {product.quantity}</p>
              <button onClick={() => removeItem(product.id)}>Eliminar producto</button>
            </div>
          )
        })}
        <div className='bottom-container'>
          <h3>Total: USD{total}</h3>
          <button onClick={clearCart}>Limpiar carrito</button>
          <button onClick={handlePurchase}>Confirmar comprar</button>
        </div>
      </>
      :
      <h3>El carrito está vacío</h3>
      }
    </div>
  )
}

export default CartContainer