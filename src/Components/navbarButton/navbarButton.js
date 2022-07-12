
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './navbarButton.css'

const NavbarButton = ({ textButton, icon }) => {

    return (

        <div className='Nav__container__item'>
            <FontAwesomeIcon icon={icon} />
            <p className='Nav__container__item__p'>{textButton}</p>
        </div>

    )

}

export default NavbarButton;
