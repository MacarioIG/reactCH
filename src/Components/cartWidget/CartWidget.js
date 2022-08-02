import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useContext } from 'react';
import { CartContext } from '../../context/cartContext';
import './cartWidget.css'


const CartWidget = ({ icon }) => {

    const {cart} = useContext(CartContext)
    console.log(cart)
    return (
        <>  
            {
                cart.length === 0 ? <FontAwesomeIcon icon={icon} /> 
                                  : <div className='container'>
                                        <FontAwesomeIcon icon={icon} />
                                        <p>{cart.length}</p>
                                    </div>
            }
           
        </>
    )

}

export default CartWidget;



