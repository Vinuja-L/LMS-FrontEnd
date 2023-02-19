import React from 'react'
import "./App.css";
import LoginPage from './pages/UserAuthentication/LoginPage';
import Signup from './pages/UserAuthentication/Signup';
import ForgotPassword from './pages/UserAuthentication/ForgotPassword';
import Verification from './pages/UserAuthentication/Verification';
import Emailconfirm from './pages/UserAuthentication/Emailconfirm';
import NewPaswd from './pages/UserAuthentication/NewPaswd';
import SuccesfulPwReset from './pages/UserAuthentication/SuccesfulPwReset';
import { BrowserRouter as  Router, Route,Switch,Link} from "react-router-dom";
import { Email } from '@mui/icons-material';




function App() {
   return (
   <Router>
      <Switch>
        <Route exact path="/" component={LoginPage} />
        <Route exact path="/signup" component={Signup}/>
        <Route exact path="/forgotPassword" component={ForgotPassword} />
        <Route exact path ="/verification" component ={Verification}/>
        <Route exact path ="/emailconfirm" component={Emailconfirm}/>
        <Route exact path ="/newpaswd" component={NewPaswd}/>
        <Route exact path ="/succesfulpwreset" component={SuccesfulPwReset}/> 
      </Switch>
   </Router>
 );
}

export default App

 /*{ // <>
  //   <Router>
  //   <Header />
  //   <Switch>
  //     <Route path='/' exact component={Home} />
  //     <Route path='/about' exact component={About} />      
  //   </Switch>
  //   </Router>  
 
  // </>}
  
  
  */

  
 
/*{import Header from "./components/common/headings/Header"
import {  BrowserRouter as Router, Switch, Route } from "react-router-dom";
import './App.css'
import Home from "./components/home/Home";
import About from './components/about/About.';
}*/