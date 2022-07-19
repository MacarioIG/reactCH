import './Navbar.css';
import NavbarButton from '../navbarButton/navbarButton';
import CartWidget from '../cartWidget/CartWidget';
import { NavLink } from 'react-router-dom';

//ICONS
import { faCartShopping } from '@fortawesome/free-solid-svg-icons'
import { faUser } from '@fortawesome/free-solid-svg-icons'
import { faMobileScreenButton } from '@fortawesome/free-solid-svg-icons'
import { faPenToSquare } from '@fortawesome/free-solid-svg-icons'




function Navbar() {

    return (
        <div className='Nav'>
            <NavLink className="img"to = "/"><img src='/images/logoDarkMode.png' alt='' /></NavLink>
            <div className='Nav__container'>
                <NavLink to="/categorys/phones"><NavbarButton textButton="SmartPhones" icon={faMobileScreenButton} /></NavLink>
                <NavLink to="/categorys/tv"><NavbarButton textButton="Suscribe" icon={faPenToSquare} /></NavLink>
                <NavbarButton textButton="My account" icon={faUser} />
                <CartWidget icon={faCartShopping} />
            </div>
        </div>

    )
}

export default Navbar