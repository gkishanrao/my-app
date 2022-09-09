import logo from './logo.svg';

import {  BrowserRouter as Router, Routes, Route, Switch} from 'react-router-dom';
import './App.css';
import ListUserComponent from './components/ListUserComponent';
import FooterComponent from './components/FooterComponent';
import HeaderComponent from './components/HeaderComponent';
import Insert from './components/Insert';
import Update from './components/Update';
import View from './components/View';



function App() {
  return (

    <div>
      <Router>
         
            <HeaderComponent/>
              <div className="container">
                <Switch>
                    <Route   exact path='/insert'  component={Insert} /> 
                    <Route   path='/users/:id' component= {Update} /> 
                    <Route   path='/view' component= {View} />
                    
                  </Switch>
                 <ListUserComponent/>
               </div>
              <FooterComponent/>
          
        </Router>
    </div>
   
  );
}

export default App;
