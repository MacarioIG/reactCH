import './Navbar.css';
import logoDarkMode from '../images/logoDarkMode.png'
/* import logoWhiteMode from './logoWhitekMode.png' */
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartShopping } from '@fortawesome/free-solid-svg-icons'
import { faUser } from '@fortawesome/free-solid-svg-icons'
import { faMobileScreenButton } from '@fortawesome/free-solid-svg-icons'
import { faPenToSquare } from '@fortawesome/free-solid-svg-icons'


function Navbar() {

    return (
        <div className='Nav'>
            <img src={logoDarkMode} alt='' />
            <div className='Nav__container'>
                <div className='Nav__container__item'>
                    <FontAwesomeIcon icon={faMobileScreenButton} />
                    <p className='Nav__container__item__p'>SmartPhones</p>
                </div>
                <div className='Nav__container__item'>
                    <FontAwesomeIcon icon={faPenToSquare} />
                    <p className='Nav__container__item__p'>Suscribe</p>
                </div>
                <div className='Nav__container__item'>
                    <FontAwesomeIcon icon={faUser} />
                    <p className='Nav__container__item__p'>My account</p>
                </div>
                <FontAwesomeIcon icon={faCartShopping} />
            </div>
        </div>
    )
}

export default Navbar