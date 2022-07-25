import './Navbar.css';
import NavbarButton from '../navbarButton/navbarButton';
import CartWidget from '../cartWidget/CartWidget';
import { NavLink } from 'react-router-dom';

//ICONS
import { faCartShopping, faTv } from '@fortawesome/free-solid-svg-icons'
import { faUser } from '@fortawesome/free-solid-svg-icons'
import { faMobileScreenButton } from '@fortawesome/free-solid-svg-icons'





function Navbar() {

    return (
        <div className='Nav'>
            <NavLink className="img"to = "/"><img src='/images/logoDarkMode.png' alt='' /></NavLink>
            <div className='Nav__container'>
                <NavLink to="/categorys/phones" className="links"><NavbarButton textButton="SmartPhones" icon={faMobileScreenButton} /></NavLink>
                <NavLink to="/categorys/tv"className="links" ><NavbarButton textButton="Smart Tv's" icon={faTv} /></NavLink>
                <NavbarButton className="links" textButton="My account" icon={faUser} />
                <NavLink to = "/cart" className="links"> <CartWidget  icon={faCartShopping} /></NavLink>
            </div>
        </div>

    )
}

export default Navbar