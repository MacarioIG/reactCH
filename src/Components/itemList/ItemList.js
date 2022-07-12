import Item from '../item/item'

const ItemList = ({data}) => {

    return (
        
            data.map((item) => (

                <Item item = {item} key={item.id}/>

            ))

    )
}

export default ItemList