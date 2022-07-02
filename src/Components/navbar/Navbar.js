import './Navbar.css';
import logoDarkMode from '../../../public/images/logoDarkMode.png'
/* import logoWhiteMode from './logoWhitekMode.png' */
//icon export
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartShopping } from '@fortawesome/free-solid-svg-icons'
import { faUser } from '@fortawesome/free-solid-svg-icons'
import { faMobileScreenButton } from '@fortawesome/free-solid-svg-icons'
import { faPenToSquare } from '@fortawesome/free-solid-svg-icons'

import navbarButton from '../navbarButton/navbarButton';


function Navbar() {

    return (
        <div className='Nav'>
            <img src={logoDarkMode} alt='' />
            <div className='Nav__container'>
                <navbarButton textButton="SmartPhones" icon={faMobileScreenButton} />
                <navbarButton textButton="Suscribe" icon={faPenToSquare} />
                <navbarButton textButton="My account" icon={faUser} />
                <FontAwesomeIcon icon={faCartShopping} />
            </div>
        </div>

    )
}

export default Navbar