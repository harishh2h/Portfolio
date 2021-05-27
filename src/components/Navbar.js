import React, { Component } from 'react';
import Navitem from './Navitem'
import {useState} from 'react';
import Fade from 'react-reveal/Fade';

class Navbar extends Component{

    constructor(props){
        super(props);
        this.state={Open : true };
    }

    changeOpen = () => {
        this.setState({Open: !this.state.Open});
    }

    render(){
        return(
            <div  class="sticky top-0 z-50" >
            <div className="flex flex-wrap items-center justify-between p-4 bg-white text-black  shadow-md " >
               <a href=""> <h1 className="font-medium align-center text-xl sm:text-2xl">H2H</h1></a>
                
                <button type="button" className="block sm:hidden" onClick={this.changeOpen}>
                    <svg className="h-6 w-6 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                        {this.state.Open && (
                       <path fillRule="evenodd" clipRule="evenodd" d="M18.278 16.864a1 1 0 0 1-1.414 1.414l-4.829-4.828-4.828 4.828a1 1 0 0 1-1.414-1.414l4.828-4.829-4.828-4.828a1 1 0 0 1 1.414-1.414l4.829 4.828 4.828-4.828a1 1 0 1 1 1.414 1.414l-4.828 4.829 4.828 4.828z" />
                         )}
                       {!this.state.Open && (
                       <path fillRule="evenodd" d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z" />
                         )}
                     </svg>
                </button>

            

                <ul className="hidden sm:flex flex justify-end font-bold mr-8  " >
                    <Navitem item="Home" link="#Home" ></Navitem>
                    <Navitem item="Contact" link="#Contact" ></Navitem>
                    <Navitem item="About" link="#About" ></Navitem>
                </ul>



            </div>
            <Fade top>
            <div>
            <ul className= { `block sm:hidden  bg-white  shadow-md  ${this.state.Open ? "block" : "hidden"}  `}>
                    <Navitem item="Home" link="#Home" ></Navitem>
                    <Navitem item="Contact" link="#Contact" ></Navitem>
                    <Navitem item="About" link="#About" ></Navitem>
                </ul>       

            </div>
            </Fade>
            </div>
        );
    }

}

export default Navbar 


// "start": "craco start",
// "build": "craco build",
// "test": "craco test",