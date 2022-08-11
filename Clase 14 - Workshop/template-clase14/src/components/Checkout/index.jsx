import React, { useState, useContext } from 'react'
import ordenGenerada from '../../services/generarOrden';
import { collection, addDoc, getDoc } from "firebase/firestore";
import { database } from '../../firebase/config';
import { doc, updateDoc } from "firebase/firestore";
import Swal from 'sweetalert2';
import { ShopData } from '../../context/Shop';

const Checkout = () => {

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [repeatEmail, setRepeatEmail] = useState("")

    const { cart, clearCart, total } = useContext(ShopData);


    const handleSubmit = async (e) => {
        e.preventDefault();
        const isEmailsEquals = repeatEmail === email;
        const isEmptyFields = name === "" || email === "" || repeatEmail === "";
  
        if ( isEmailsEquals && !isEmptyFields ) {
            const order = ordenGenerada(name, email, cart, total)
            // Add a new document with a generated id.
            const docRef = await addDoc(collection(database, "orders"), order);
            console.log("Document written with ID: ", docRef.id);
        
            //Actualizamos el stock del producto apenas se genera la orden
            for (const item of cart) {
        
                const docRef = doc(database, "products", item.id);
                //Llamada a firebase
                const docSnap = await getDoc(docRef);
        
                if (docSnap.exists()) {
                    const productoOriginal = { id: docSnap.id, ...docSnap.data() }
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
        } else {
            Swal.fire("Uno de los campos es inválido")
        }
    }

    return (
        <form className='p-5' onSubmit={handleSubmit}>
            <div className="mb-3">
                <label htmlFor="name" className="form-label">Name</label>
                <input type="text" className="form-control" id="exampleInputPassword1" value={name} onChange={e => setName(e.target.value)} />
            </div>
            <div className="mb-3">
                <label htmlFor="email" className="form-label">Email address</label>
                <input type="email" className="form-control" id="email" aria-describedby="emailHelp" value={email} onChange={e => setEmail(e.target.value)} />
            </div>
            <div className="mb-3">
                <label htmlFor="repeatEmail" className="form-label">Repeat email address</label>
                <input type="email" className="form-control" id="repeatEmail" aria-describedby="emailHelp" value={repeatEmail} onChange={e => setRepeatEmail(e.target.value)} />
            </div>

            <button type="submit" className="btn btn-primary">Submit</button>
        </form>
    )
}

export default Checkout
