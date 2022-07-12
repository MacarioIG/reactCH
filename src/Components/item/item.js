import './item.css'
import ItemCount from '../itemCount/ItemCount';

const Item = ({item}) => {

    const onAdd = () => alert('producto agregado')

    return (

        <div className="item" >

            <img src = {item.image} width = "100px" alt = ""/>
            <h3>{item.title}</h3>
            <p>{item.description}</p>
            <span>{item.price}$</span>
            <ItemCount stock={10} initial={1} onAdd={onAdd} />
            

        </div>

    )

}

export default Item 