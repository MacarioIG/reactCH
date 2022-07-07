import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faPlus } from "@fortawesome/free-solid-svg-icons"
import { faMinus } from "@fortawesome/free-solid-svg-icons"
import './ItemCount.css'
import { useState } from "react"


const ItemCount = ({ stock, initial }) => {



    const [contador, setContador] = useState(initial)



    const incrementar = () => {

        contador < stock ? setContador(contador + 1) : "No hay mas stock"

    }

    const decrementar = () => {

        contador < 1 ? contador = 1 : setContador(initial - 1)

    }

    const onAdd = () => {

        contador >= 1 ? "Producto agregado!" : ""

    }


    return (

        <div className="counter">
            <p className="counter__nameItem">MOTO G22 XT-2231-5 CELESTE</p>
            <div className="counter__container">
                <FontAwesomeIcon icon={faPlus} onClick={incrementar} />
                <p>{initial}</p>
                <FontAwesomeIcon icon={faMinus} onClick={decrementar} />
            </div>
            {
                contador > stock ? "No hay mas stock" : ""
            }
            <button onClick={onAdd} >Add to cart!</button>
        </div>

    )


}

export default ItemCount