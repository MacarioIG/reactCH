import './item.css'


const Item = ({item}) => {

   

    return (

        <div className="item" >

            <img src = {item.imageList} width = "100px" alt = ""/>
            <h3>{item.title}</h3>
            <span>{item.price}$</span>
            <button className='counter__button'>Buy Now!</button>
            
            

        </div>

    )

}

export default Item 