import { useContext } from 'react'
import './cart.css'
import {CartContext} from '../../context/cartContext'
import { Link } from 'react-router-dom'
import { faXmark } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'



const Cart = () => {

    
    const valores = useContext(CartContext)
    const {deletAll,deleteOne,sum} = useContext(CartContext)

    
    if(valores.cart.length === 0) {

        return<h3>No sumaste ningún item al carrito, volver al <Link to='/'>Inicio</Link></h3>

    }

    
    return(
        <div className="cart"> 
        
        {
            valores.cart.map((product) => (

                <div key={product.id} className="cart__item">
                    <div className='cart__item__detail'>
                        <img src={product.imageList} alt= "" className="cart__item__detail__img"/>
                        <div>
                            <h3>{product.title}</h3>
                            <p>${product.price}</p>
                            <p>{product.stock}</p>
                        </div>
                    </div>
                    <FontAwesomeIcon  onClick = {()=>deleteOne(product.id)} className= "cart__icon"icon={faXmark} />
                </div>
            ))
        }

        <button onClick={deletAll}>Eliminar productos</button>
        <h3>Total:{sum} </h3>
        </div>

    )
}

export default Cart 