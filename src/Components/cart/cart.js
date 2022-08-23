import './cart.css'
import { useContext } from 'react'
import {CartContext} from '../../context/cartContext'
import { Link } from 'react-router-dom'
import { faXmark } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'




const Cart = () => {

    
    
    const {cart ,deletAll,deleteOne,sum} = useContext(CartContext)

    
    if(cart.length === 0) {

        return <div className='cart__container'>
            <h3>No sumaste ningún item al carrito, volver al <Link to='/'><span className='link'>Inicio</span></Link></h3>
            </div>

    }

    
    return(
        <div className="cart"> 
        
        {   
            
            cart.map((product) => (

                <div key={product.id} className="cart__item">
                    <div className='cart__item__detail'>
                        <img src={product.imageList} alt= "" className="cart__item__detail__img"/>
                        <div>
                            <h3>{product.title}</h3>
                            <p>${product.price}</p>
                            <p>Quantity: {product.cantidad}</p>
                        </div>
                    </div>
                    <FontAwesomeIcon  onClick = {()=>deleteOne(product.id)} className= "cart__icon"icon={faXmark} />
                </div>
            ))
        }

        <button onClick={deletAll}>Eliminar productos</button>
        <button >
            <Link to="/form">Emitir compra</Link></button>
        <h3>Total:${sum} </h3>
        </div>

    )
}

export default Cart 