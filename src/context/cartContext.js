// crear contexto 

import { createContext, useState,useEffect } from "react";
/* import Cart from "../Components/cart/cart"; */

export const CartContext = createContext()


//se crea nuestro componete como capa de abstracción y llamamos a los childrens de App para poder renderizarlos nuevamente
const Provider = (props) => {

    const [cart,setCart] = useState([])
    const [sum, setSum] = useState(0)

    const totalCart = () => {

        let suma = 0
        cart.forEach(item => suma += (item.price*item.stock))
        setSum(suma)

    }

    useEffect(() => {
        console.log(cart)
        totalCart()
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

    //función para sumar la cantidad de un mismo producto

    //funcion que elimine producto parti

     const deleteOne = (id) => {

        const productsFiltered = cart.filter((prod)=>prod.id !== id);
        setCart(productsFiltered)
        
     }

    //funcion que borre todos los items

    const deletAll = () => {

        setCart([])

    }
    //funcion para calcular total de unidades

    //funcion para calcular total de precio

    

    return (
            <CartContext.Provider value={{ cart, addToCart,deletAll,deleteOne,sum}}>{props.children}</CartContext.Provider>
    )

}

export default Provider