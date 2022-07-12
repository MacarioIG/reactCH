import { useEffect, useState } from 'react'
import './ItemListContainer.css'
import '../itemList/itemList.css'
import products from '../../mock/products'
import ItemList from '../itemList/ItemList'


const ItemListContainer = () => {

    const [items,setItems] = useState ([])

    
    useEffect(() => {
        
        const data = new Promise ((res, rej) => {

            setTimeout(()=> {
                
                    res(products)
                },2000)

            })
            
            data.then ( (data) => {
                
                setItems(data)
            })
            data.catch ( (error) => {

                console.log(error)
                
            })

    }, [])
    
    

    return (
        
        <div className="itemsContainer">
            <ItemList className="itemsContainer__items" data = {items}></ItemList>
        </div>

    )

}

export default ItemListContainer