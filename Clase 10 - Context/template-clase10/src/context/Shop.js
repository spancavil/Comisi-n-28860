import React, { createContext, useState } from "react";

//1ero declaramos el context
export const ShopData = createContext();

//2do Declaramos el componente que será el proveedor del contexto
//Children representará toda la app
const ShopProvider = ({children}) => {

    const [darkMode, setDarkMode] = useState(true);

    const [cart, setCart] = useState([]);

    const isInCart = (productId) => {
        const productoEncontrado = cart.find(producto => producto.id === productId);
        if (productoEncontrado) return true
        return false
    }

    const addItem = (item, quantity) => {
        
        const qty = quantity
        const flag = isInCart(item.id)

        if (flag) {
            //Con el map hacemos un procesamiento del cart original, y en caso que 
            //el producto esté repetido, agregamos la cantidad que viene por parámetro (qty)
            //si el producto no está repetido, lo devolvemos tal cual está en el original
            const cartModificado = cart.map(product => {
                if (product.id === item.id) return {...product, quantity: product.quantity + qty}
                else return product
            })
            setCart(cartModificado)
        }
        else {
            //Hacemos un spread de las propiedades existentes del item y le agregamos la quantity
            const itemToAdd = {
                ...item,
                quantity: quantity
            }
    
            //No podemos hacer push de estados ya que son inmutables. Debemos generar
            //nuevos arrays en nuevas posiciones de memoria. Por eso utilizamos el spread operator
            const cartModificado = [...cart, itemToAdd];
            setCart(cartModificado);
        }

    }


    return(
        <ShopData.Provider value = {{darkMode, setDarkMode, addItem}}>
            {children}
        </ShopData.Provider>
    )
}

export default ShopProvider;