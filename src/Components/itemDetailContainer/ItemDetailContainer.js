import ItemDetail from "./itemDetail";
import { useEffect ,useState} from "react";
import products from "../../mock/products";
import './itemDetailContainer.css'


const ItemDetailContainer = () => {
    
    const [item,setItems] = useState({})

    useEffect(() => {

        const data = new Promise ((res, rej) => {

            setTimeout(()=> {
                
                    res(products.find(item => item.id === 1))
                },1000)

            })
            
            data.then ( (data) => {
                
                setItems(data)
            })
            data.catch ( (error) => {

                console.log(error)
                
            })

    }, []) 


    return (
        <div className= "container">
            <ItemDetail  item = {item}></ItemDetail>
        </div>
    )

}

export default ItemDetailContainer;