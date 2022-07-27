import ItemCount from "../itemCount/ItemCount"
import './itemDetail.css'
import { useContext, useState } from "react"
import { Link } from "react-router-dom"
import { CartContext } from "../../context/cartContext" //Llamo el contexto para utilizar la función addToCart

const ItemDetail = ({item}) => {
 
    const descArray = item.description
    
  /*   const descMap = descArray.map((item) => (
        <li>{item}</li>
    )) */

    
    const {imageDetail,title,price} = item

    const  [quantity, setQuantity] = useState(0)

    const {addToCart} = useContext(CartContext) // llamo a la función con el hook useContext
    
    const onAdd = (cantidad) => { // recibe la cantidad seleccionada del itemCount como parametro

        setQuantity(cantidad) // dicha cantidad es almacenada en quantity
        addToCart(item,cantidad)

    }
    
    return (
         <div className="containerItem">
            <img src = {imageDetail} className="imageDetail" alt = ""/>
            <div className="containerItem__details">
                <h3>{title}</h3>
                <div className="">
                    <ul>{descArray}</ul>
                </div> 
                {  quantity === 0 ?
                   <ItemCount stock={10} initial={1} price={price}onAdd={onAdd} /> : 
                   <Link to='/cart'>Go to cart!</Link>
                }
            </div>
        </div>

    )

}

export default ItemDetail