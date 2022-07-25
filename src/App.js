
import './index.css';
import Navbar from './Components/Navbar/Navbar'
import ItemListContainer from './Components/itemListContainer/ItemListContainer';
import ItemDetailContainer from './Components/itemDetailContainer/ItemDetailContainer';
import Cart from './Components/cart/cart';
import {BrowserRouter,Routes,Route} from "react-router-dom"






function App() {


  

  return (
  <BrowserRouter>
    <Navbar />
    <Routes>
      <Route path='/' element={ <ItemListContainer/>}/>
      <Route path='/categorys/:category' element={<ItemListContainer/>}/>
      <Route path='/item/:id' element={<ItemDetailContainer />}/>
      <Route path='/cart' element={<Cart/>}/>
    </Routes>
  </BrowserRouter>
  );
}

export default App;

