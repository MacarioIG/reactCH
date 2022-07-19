import ItemCount from "../itemCount/ItemCount"
import './itemDetail.css'


const ItemDetail = ({item}) => {
 
    const descArray = item.description
    console.log(descArray)  
  /*   const descMap = descArray.map((item) => (
        <li>{item}</li>
    )) */

    const {imageDetail,title,price} = item
    
    const onAdd = () => alert('producto agregado')
    
    return (
         <div className="containerItem">
            <img src = {imageDetail} className="image" alt = ""/>
            <div className="containerItem__details">
                <h3>{title}</h3>
                <div className="">
                    <ul>{descArray}</ul>
                </div> 
                <ItemCount stock={10} initial={1} price={price}onAdd={onAdd} />
            </div>
        </div>

    )

}

export default ItemDetail