import './item.css'
import { Link } from 'react-router-dom'


const Item = ({item}) => {

    const {title,price,id,imageList} = item
   

    return (

        <div className="item" >

            <img src = {imageList} className="image" alt = ""/>
            <h3>{title}</h3>
            <span>{price}$</span>
            <Link className="link" to={`/item/${id}`}><button className='counter__button'>Buy Now!</button></Link>
            
        </div>

    )

}

export default Item 