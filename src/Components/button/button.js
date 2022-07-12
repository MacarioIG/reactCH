
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Button = ({icon}, {name}) => {

    return ( 

        <div className='Nav__container__item'>
            <FontAwesomeIcon icon={icon} />
            <p className='Nav__container__item__p'>${name}</p>
        </div>
    )


}

export default Button