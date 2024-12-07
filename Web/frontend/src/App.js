import './App.css';
import Main from './pages/Mainpg';
import Home from './pages/Home';
import Careers from './pages/Careers';
import Contactus from './pages/Contactus';
import Aboutus from './pages/Aboutus';

import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';


function App() {
  return (
    <Router>
      <div>
        <Switch>

        <Route exact path="/">
            <Main/>  
          </Route>

          <Route exact path="/Home">
            <Home/>  
          </Route>
          
          <Route path="/Contactus"> 
            <Contactus/>
          </Route>
          
          <Route path="/Aboutus"> 
            <Aboutus/>
          </Route>   
          
          <Route path="/Careers"> 
            <Careers/>
          </Route>

        </Switch>
      </div>
    </Router>
  );
}

export default App;