import { useEffect, useState } from 'react'
import './ItemListContainer.css'
import '../itemList/itemList.css'
import products from '../../mock/products'
import ItemList from '../itemList/ItemList'
import Loader from '../Loader/Loader'
import { useParams } from 'react-router-dom'


const ItemListContainer = () => {

    const {category} = useParams()
    const [items,setItems] = useState ([])
    const [loading,setLoading] = useState(true)

    
    useEffect(() => {
        
        const data = new Promise ((res, rej) => {

            setTimeout(()=> {
                
                    res(category ? products.filter(prod => prod.category === category) : products)
                },1500)

            })
            
            data.then ( (data) => {
                
                setItems(data)
            })
            data.catch ( (error) => {

                console.log(error)
                
            })
        setLoading(false)

    }, [category])
    
    

    return (
        <>  { loading ? <Loader/> 
                      : <div className="itemsContainer">
                            <ItemList className="itemsContainer__items" data = {items}></ItemList>
                        </div>
             }
        </>
    )

}

export default ItemListContainer