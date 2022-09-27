//import logo from './logo.svg';

import {  BrowserRouter as Router,  Route, Switch,useParams} from 'react-router-dom';
import './App.css';
import ListUserComponent from './components/ListUserComponent';
import FooterComponent from './components/FooterComponent';
import HeaderComponent from './components/HeaderComponent';


import View from './components/View';
import Appbar from './components/Appbar';

import About from './components/pages/About';
import Home from './components/pages/Home';
import Contact from './components/pages/Contact';
import "../node_modules/bootstrap/dist/css/bootstrap.css"
import Navbar from './components/Layout/Navbar';
import NotFound from './components/pages/NotFound';
import AddUser from './components/Users/AddUser';
import EditUser from './components/Users/EditUser';
import ViewUser from './components/Users/ViewUser';

function App() {
  return (

    <div>
      
      <Router>
         
           
            <Navbar/>
            
            
              <div className="container">
                <Switch>
                    <Route   exact path='/' component={Home} /> 
                    <Route  exact path='/About' component= {About} /> 
                    <Route   exact path='/Contact' component= {Contact} />
                    <Route   exact path='/users/add' component= {AddUser} />
                    <Route   exact path="/users/edit/:id" component= {EditUser} />

                    <Route   exact path='/users/view/:id' component= {ViewUser} />
                    
                    <Route    component= {NotFound} />
                    
                  </Switch>
               </div>
              
          
        </Router>
    </div>
   
  );
}

export default App;
