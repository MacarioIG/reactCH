import './Navbar.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartShopping } from '@fortawesome/free-solid-svg-icons'
import { faUser } from '@fortawesome/free-solid-svg-icons'
import { faMobileScreenButton } from '@fortawesome/free-solid-svg-icons'
import { faPenToSquare } from '@fortawesome/free-solid-svg-icons'

import NavbarButton from '../navbarButton/navbarButton';


function Navbar() {

    return (
        <div className='Nav'>
            <img src='/images/logoDarkMode.png' alt='' />
            <div className='Nav__container'>
                <NavbarButton textButton="SmartPhones" icon={faMobileScreenButton} />
                <NavbarButton textButton="Suscribe" icon={faPenToSquare} />
                <NavbarButton textButton="My account" icon={faUser} />
                <FontAwesomeIcon icon={faCartShopping} />
            </div>
        </div>

    )
}

export default Navbar