import ItemDetail from "./itemDetail";
import { useEffect ,useState} from "react";
import products from "../../mock/products";
import './itemDetailContainer.css'
import { useParams } from "react-router-dom";
import {getFirestore, doc, getDoc} from 'firebase/firestore'

const ItemDetailContainer = () => {

    const {id} = useParams();
    
    const [item,setItems] = useState({})

    useEffect(() => {

        const querydb = getFirestore();
        const queryDoc = doc(querydb,'items',id)
        getDoc(queryDoc)
        .then( res => setItems({id: res.id, ...res.data()}))

    }, []) 


    return (
        <div className= "container">
            <ItemDetail  item = {item}></ItemDetail>
        </div>
    )

}

export default ItemDetailContainer;