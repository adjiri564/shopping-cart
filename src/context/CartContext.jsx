/* eslint-disable react/prop-types */

import { createContext, useState } from "react";

export const CartContext = createContext();

export const CartProvider = ({children}) =>{
    const [cartItems, setCartItems] = useState([]);

    const addToCart = (item) => {  
        setCartItems((prevItems) => [...prevItems, item]);  
    }; 

    return (
        <CartContext.Provider value={{cartItems, addToCart}}>
            {children}
        </CartContext.Provider>
    )
}