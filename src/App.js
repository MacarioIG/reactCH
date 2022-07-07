
import './index.css';
import Navbar from './Components/navbar/Navbar.js'
import ItemListContainer from './Components/itemListContainer/ItemListContainer';
import ItemCount from './Components/itemCount/ItemCount';




function App() {




  return (
    <>
      <Navbar />
      <ItemCount stock={10} initial={1} />
      <ItemListContainer greeting="The list of items will be here :3" />
    </>
  );
}

export default App;

