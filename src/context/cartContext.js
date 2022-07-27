// crear contexto 

import { createContext, useState,useEffect } from "react";
/* import Cart from "../Components/cart/cart"; */

export const CartContext = createContext()


//se crea nuestro componete como capa de abstracción y llamamos a los childrens de App para poder renderizarlos nuevamente
const Provider = (props) => {

    const [cart,setCart] = useState([])

    useEffect(() => {
        console.log(cart)
    },[cart])

    const addToCart = (item,cantidad) => {

        



        if (isInCart(item.id)) {

            alert("Ya esta en el carrito")

        }else {

            setCart([...cart,{...item,cantidad}]) // ...cart evita que se agrege un array vacio (generado por el valor inical de useSate), ...Item permite incluir "cantidad" como una nueva propiedad del item

        }
        

    }

    const isInCart = (id) => {

        return cart.some( prod => prod.id === id) //Recorre el array hasta que sea true la condición

    }

    return (
            <CartContext.Provider value={{addToCart}}>{props.children}</CartContext.Provider>
    )

}

export default Provider