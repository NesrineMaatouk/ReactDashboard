import './App.css';
import PrimarySearchAppBar from './Componenets/header/Headers';
/*import { BrowserRouter as Router,Switch,Route } from 'react-router-dom';*/
import PersistentDrawerLeft from './Componenets/SideBar/SideBar'

function App() {
  return (
    <div className="App">
      <PrimarySearchAppBar/>
      <PersistentDrawerLeft/>
      <h1>Bonjour de</h1>
      
       
       
      
    </div>
  );
}

export default App;
