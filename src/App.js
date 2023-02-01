import React from 'react'
//import Header from "./components/common/headings/Header"
//import {  BrowserRouter as Router, Switch, Route } from "react-router-dom";
//import './App.css'
//import Home from "./components/home/Home";
//import About from './components/about/About.';
import Auth from "./pages/Auth";





function App() {
  return (
   <div className="App">
     <Auth/>
    </div>
  // <>
  //   <Router>
  //   <Header />
  //   <Switch>
  //     <Route path='/' exact component={Home} />
  //     <Route path='/about' exact component={About} />      
  //   </Switch>
  //   </Router>  
  // </>

  );
}

export default App
