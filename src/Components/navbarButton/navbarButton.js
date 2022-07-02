


const navbarButton = ({ textButton, icon }) => {

    return (

        <div className='Nav__container__item'>
            <FontAwesomeIcon icon={icon} />
            <p className='Nav__container__item__p'>{textButton}</p>
        </div>

    )

}

export default navbarButton;
