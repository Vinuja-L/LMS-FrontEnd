import React from 'react'
import "./App.css";
import LoginPage from './pages/UserAuthentication/LoginPage';
import Signup from './pages/UserAuthentication/Signup';



 
/*{import Header from "./components/common/headings/Header"
import {  BrowserRouter as Router, Switch, Route } from "react-router-dom";
import './App.css'
import Home from "./components/home/Home";
import About from './components/about/About.';
}*/


function App() {
  return (
   <div className="App">
    <Signup/>

  
    </div>
 /*{ // <>
  //   <Router>
  //   <Header />
  //   <Switch>
  //     <Route path='/' exact component={Home} />
  //     <Route path='/about' exact component={About} />      
  //   </Switch>
  //   </Router>  
  // </>}*/

  );
}

export default App
