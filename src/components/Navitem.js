import React, { Component } from 'react';
import {Link} from "react-router-dom";
import Fade from 'react-reveal/Fade';

class Navitem extends Component{
    render(){
        return(
            // <li className="ml-4 text-black " >
            // <Link to={this.props.link}>
            //     {this.props.item} 
            // </Link>
            // </li>
            <Fade top >
            <li className="pl-6 border-b-2 sm:border-0  border-gray-200 sm:ml-3 ">
                <a href={this.props.link}>{this.props.item}</a>

            </li>
            </Fade>

        );
    }
}

export default Navitem