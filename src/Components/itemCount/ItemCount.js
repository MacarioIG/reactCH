import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faPlus } from "@fortawesome/free-solid-svg-icons"
import { faMinus } from "@fortawesome/free-solid-svg-icons"
import './ItemCount.css'
import { useState } from "react"


const ItemCount = ({ stock, initial, onAdd }) => {



    const [contador, setContador] = useState(initial)



    const incrementar = () => {

        contador < stock ? setContador(contador + 1) : alert("No hay mas stock")

    }

    const decrementar = () => {

        contador > 1 && setContador(contador - 1)

    }


    return (

        <div className="counter">
            <div className="counter__container">
                <div className="counter__container__icon"><FontAwesomeIcon icon={faPlus} onClick={incrementar} /></div>
                <p>{contador}</p>
                <div className="counter__container__icon"><FontAwesomeIcon icon={faMinus} onClick={decrementar} /></div>
            </div>
            <button className="counter__button"onClick={onAdd} >Add to cart!</button>
        </div>

    )


}

export default ItemCount