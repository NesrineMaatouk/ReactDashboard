import './App.css';
import Home from './Pages/Home/Home';
import Table from './Pages/Tables/Tables';
import Forms from './Pages/Forms/Forms';
import { BrowserRouter as Router,Switch,Route } from 'react-router-dom';
import Layout from './Componenets/Layout/Layout';

function App() {
  return (
    <div className="App">
      <Router>
        <Layout>
          <Switch>
             <Route exact path='/'render={()=><Home/>}/>
             <Route path='/Table'render={()=><Table/>}/>
             <Route path='/Forms'render={()=><Forms/>}/>
          </Switch>
          </Layout>
      </Router>  
         
    </div>
  );
}

export default App;
