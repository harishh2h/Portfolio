import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router ,Route } from "react-router-dom";
import './index.css';
import Footer from './components/Footer'
import Navbar from './components/Navbar'
import Home from './contents/Home'
import Contact from './contents/Contact'
import About from './contents/About'
// ========================================
class App extends React.Component{
  render(){
    return(
     
    
      // <Router>
      <div className="App">
        <div className="">
     

        <Navbar/>
        {/* <Route exact path="/"><Home/></Route>
        <Route exact path="/"><Contact/></Route>
        <Route exact path="/"><About/></Route> */}
        <a id="Home" ><Home/></a>
        <a id="Contact"><Contact/></a>
        <a id="About"><About/></a>
        <Footer/>
        
        </div>
      </div>
      //</Router>
    );
  }
}



  ReactDOM.render(
    <App />,
    document.getElementById('root')
  );
  