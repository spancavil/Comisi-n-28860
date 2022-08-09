import React, { useContext } from 'react'
import { ShopData } from '../../context/Shop';
import ordenGenerada from '../../services/generarOrden';
import './styles.css';
import { collection, addDoc, getDoc } from "firebase/firestore";
import { database } from '../../firebase/config';
import { doc, updateDoc } from "firebase/firestore";
import Swal from 'sweetalert2';

const CartContainer = () => {

  const { cart, removeItem, clearCart, total } = useContext(ShopData);

  const handlePurchase = async () => {
    const order = ordenGenerada("Sebas", "sebas@live.com", cart, total)

    // Add a new document with a generated id.
    const docRef = await addDoc(collection(database, "orders"), order);
    console.log("Document written with ID: ", docRef.id);

    //Actualizamos el stock del producto apenas se genera la orden
    for (const item of cart) {

      const docRef = doc(database, "products", item.id);
      //Llamada a firebase
      const docSnap = await getDoc(docRef);

      if (docSnap.exists()) {
        const productoOriginal = {id: docSnap.id, ...docSnap.data()}
        const productoParaActualizar = doc(database, "products", item.id);
        // Set the "capital" field of the city 'DC'
        await updateDoc(productoParaActualizar, {
          stock: productoOriginal.stock - item.quantity
        });
      } else {
        // doc.data() will be undefined in this case
        console.log("No such document!");
      }

    }
    Swal.fire("Orden generada, ticket número:", docRef.id)
    clearCart()
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