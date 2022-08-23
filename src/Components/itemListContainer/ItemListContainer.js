import { useEffect, useState } from 'react'
import './ItemListContainer.css'
import '../itemList/itemList.css'
import ItemList from '../itemList/ItemList'
import Loader from '../Loader/Loader'
import { useParams } from 'react-router-dom'
import {getFirestore, collection, getDocs, query, where} from 'firebase/firestore'


const ItemListContainer = () => {

    const {category} = useParams()
    const [items,setItems] = useState ([])
    const [loading,setLoading] = useState(true)

    

    useEffect(() => {

       const querydb = getFirestore()
       const queryCollection = collection(querydb,'items')
       
       if(category) {
           
           const queryFilter = query(queryCollection, where('category', '==', category))
           getDocs (queryFilter)
           .then(res => {setItems(res.docs.map(product => ( {id: product.id, ...product.data() })))
                         setLoading(false)})

       } else {

        getDocs(queryCollection)
            .then(res => {setItems(res.docs.map(product => ( {id: product.id, ...product.data() })))
                          setLoading(false)})

       }

        
    }, [category])
    
    

    return (
        <>  
        
            <div className="itemsContainer">
                {loading ? (<Loader/>) : (
                <ItemList className="itemsContainer__items" data = {items}></ItemList>) }
            </div>
        </>
    )

}

export default ItemListContainer