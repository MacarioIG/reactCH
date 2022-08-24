import { } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook, faInstagram, faWhatsapp } from '@fortawesome/free-brands-svg-icons'
import './footer.css'

const Footer = () => {

    return (

        <footer className='footer'>
            <div className='footer__info'>
                <p>© 2022 Motorola Mobility LLC. Todos los derechos reservados.</p>
                <p>Av. del Libertador 7202 (1429) , Buenos Aires, Argentina</p>
                <p>tel: +54 2983505317</p>
            </div>
            <img className='payment' src='/images/products/footer/logo192.png' alt='' />
            <div className='footer__media'>
                <p>Follow us!</p>
                <div className='footer__media__icons'>
                <FontAwesomeIcon icon={faInstagram} />
                <FontAwesomeIcon icon={faWhatsapp} />
                <FontAwesomeIcon icon={faFacebook} />
                </div>
            </div>
        </footer>
    )
}

export default Footer