import './App.css';

import Navbar from './components/Navbar';
import ItemListContainer from './components/ItemListContainer';

function App() {
  return (
    <div className="flex flex-col">
        <Navbar/ >
        <ItemListContainer greeting="Bienvenidos a aunt-helen" />
    </div>
  );
}

export default App;
