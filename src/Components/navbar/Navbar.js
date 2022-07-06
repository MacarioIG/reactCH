import './Navbar.css';
import NavbarButton from '../navbarButton/navbarButton';
import CartWidget from '../cartWidget/CartWidget';


import { faUser } from '@fortawesome/free-solid-svg-icons'
import { faMobileScreenButton } from '@fortawesome/free-solid-svg-icons'
import { faPenToSquare } from '@fortawesome/free-solid-svg-icons'
import { faCartShopping } from '@fortawesome/free-solid-svg-icons'



function Navbar() {

    return (
        <div className='Nav'>
            <img src='/images/logoDarkMode.png' alt='' />
            <div className='Nav__container'>
                <NavbarButton textButton="SmartPhones" icon={faMobileScreenButton} />
                <NavbarButton textButton="Suscribe" icon={faPenToSquare} />
                <NavbarButton textButton="My account" icon={faUser} />
                <CartWidget icon={faCartShopping} />
            </div>
        </div>

    )
}

export default Navbar