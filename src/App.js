
import './index.css';
import Navbar from './Components/navbar/Navbar.js'
import ItemListContainer from './Components/itemListContainer/ItemListContainer';




function App() {
  return (
    <>
      <Navbar />
      <ItemListContainer greeting="The list of items will be here :3" />
    </>
  );
}

export default App;

