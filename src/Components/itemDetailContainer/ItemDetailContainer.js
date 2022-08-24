import ItemDetail from "./itemDetail";
import { useEffect ,useState} from "react";
import './itemDetailContainer.css'
import { useParams } from "react-router-dom";
import {getFirestore, doc, getDoc} from 'firebase/firestore'
import Loader from '../Loader/Loader'


const ItemDetailContainer = () => {

    const [loading,setLoading] = useState(true)
    const {id} = useParams();
    const [item,setItems] = useState({})

    useEffect(() => {

        const querydb = getFirestore();
        const queryDoc = doc(querydb,'items',id)
        getDoc(queryDoc)
        .then( res => {setItems({id: res.id, ...res.data()})
                       setLoading(false)})

    }, []) 


    return (
        <div className= "container">
             {loading ? (<Loader/>) : (
            <ItemDetail  item = {item}></ItemDetail>)}
        </div>
    )
}

export default ItemDetailContainer;