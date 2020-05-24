import React, {Component} from 'react';
import {
    Link
} from "react-router-dom";
import logo from '../../Assets/images/logo.png';

class Header extends Component{
    render(){
        return(
            <header>
                <div className="logo">
                    <img src={logo} className="logo"></img>
                </div>
                <nav>
                    <ul>
                        <li className="first">
                            <a href="#">Home</a>
                        </li>
                        <li>
                            <a href="#aboutMe">About me</a>
                        </li>
                        <li>
                            <a href="#projects">Projects</a>
                        </li>
                        <li className="last">
                            <a href="#contact">Contact Me & Resume</a>
                        </li>
                    </ul>
                </nav>
            </header>
        );
    }
}

export default Header;
