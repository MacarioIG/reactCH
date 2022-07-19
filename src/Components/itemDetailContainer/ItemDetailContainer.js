import ItemDetail from "./itemDetail";
import { useEffect ,useState} from "react";
import products from "../../mock/products";
import './itemDetailContainer.css'
import { useParams } from "react-router-dom";

const ItemDetailContainer = () => {

    const {id} = useParams();
    
    const [item,setItems] = useState({})

    useEffect(() => {

        const data = new Promise ((res, rej) => {

            setTimeout(()=> {
                
                    res(products.find(item => item.id == id))
                },1000)

            })
            
            data.then ( (data) => {
                
                setItems(data)
            })
            data.catch ( (error) => {

                console.log(error)
                
            })

    }, [id]) 


    return (
        <div className= "container">
            <ItemDetail  item = {item}></ItemDetail>
        </div>
    )

}

export default ItemDetailContainer;