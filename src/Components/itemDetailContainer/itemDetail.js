import ItemCount from "../itemCount/ItemCount"
import './itemDetail.css'


const ItemDetail = ({item}) => {
 
    const descArray = item.description
    console.log(descArray)  
  /*   const descMap = descArray.map((item) => (
        <li>{item}</li>
    )) */
    
    const onAdd = () => alert('producto agregado')
    
    return (
         <div className="containerItem">
            <img src = {item.imageDetail} className="image" alt = ""/>
            <div className="containerItem__details">
                <h3>{item.title}</h3>
                <div className="">
                <ul>{descArray}</ul>
                </div> 
                <span>{item.price}$</span>
                <ItemCount stock={10} initial={1} onAdd={onAdd} />
            </div>
        </div>

    )

}

export default ItemDetail