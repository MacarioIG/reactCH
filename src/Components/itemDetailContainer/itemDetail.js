import ItemCount from "../itemCount/ItemCount"
import './itemDetail.css'
import { useState } from "react"
import { Link } from "react-router-dom"


const ItemDetail = ({item}) => {
 
    const descArray = item.description
    console.log(descArray)  
  /*   const descMap = descArray.map((item) => (
        <li>{item}</li>
    )) */

    
    const {imageDetail,title,price} = item

    const  [quantity, setQuantity] = useState(0)
    
    const onAdd = (cantidad) => { // recibe la cantidad seleccionada del itemCount como parametro

        setQuantity(cantidad) // dicha cantidad es almacenada en quantity
        alert(`agregaste ${cantidad} de productos!`)

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