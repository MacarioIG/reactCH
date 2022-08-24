import { createContext, useState,useEffect } from "react";
export const CartContext = createContext()
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

    const addToCart = (item, cantidad) => {
        if (isInCart(item.id)) {
            
            setCart( cart.map((product) => {

                return product.id === item.id

                    ? {...product, cantidad:product.stock + cantidad}
                    : product
            }))

        } else {
            setCart([...cart, { ...item, cantidad }]);
            
        }
    }

    const isInCart = (id) => {

        return cart.some( prod => prod.id === id) 

    }

     const deleteOne = (id) => {

        const productsFiltered = cart.filter((prod)=>prod.id !== id);
        setCart(productsFiltered)
        
     }

    const deletAll = () => {

        setCart([])

    }
   
    return (
            <CartContext.Provider value={{ cart, addToCart,deletAll,deleteOne,sum}}>{props.children}</CartContext.Provider>
    )

}

export default Provider