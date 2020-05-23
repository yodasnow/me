import React, {Component} from 'react';
import {
    Link
} from "react-router-dom";

class Header extends Component{
    render(){
        return(
            <header>
                <div className="logo">
                    LOGO
                </div>
                <nav>
                    <ul>
                        <li className="first">
                            <a href="#">Home</a>
                        </li>
                        <li>
                            <a href="#aboutMe">About me</a>
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
