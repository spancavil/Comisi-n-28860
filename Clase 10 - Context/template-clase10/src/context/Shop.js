import React, { createContext, useState } from "react";

//1ero declaramos el context
export const ShopData = createContext();

//2do Declaramos el componente que será el proveedor del contexto
//Children representará toda la app
const ShopProvider = ({children}) => {

    const [darkMode, setDarkMode] = useState(true);

    return(
        <ShopData.Provider value = {{darkMode, setDarkMode}}>
            {children}
        </ShopData.Provider>
    )
}

export default ShopProvider;