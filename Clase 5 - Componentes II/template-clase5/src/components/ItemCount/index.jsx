import React, {useState} from 'react'

const ItemCount = ({stock}) => {
    const [quantity, setQuantity] = useState(1)

    const addQuantity = () => {
        if (quantity < stock){
            setQuantity(quantity + 1)
        }
    }

    const decrementQuantity = () => {
        if (quantity > 1){
            setQuantity(quantity - 1)
        }
    }

    const handleAddCart = () => {
        alert(`Se agregan ${quantity} productos al carrito!`);
    }

    return (
        <div>
            <button onClick={addQuantity}>+</button>
            <span>{quantity}</span>
            <button onClick={decrementQuantity}>-</button>
            <button onClick={handleAddCart}>Add cart</button>
        </div>
    )
}

export default ItemCount