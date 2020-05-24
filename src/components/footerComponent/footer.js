import React, {Component} from 'react';

class Footer extends Component{
    render(){
        return(
            <footer>
                <nav>
                    <ul>
                        <li className="first">
                            <a href="https://reactjs.org/">Made with ReactJS</a>
                        </li>
                        <li>
                            <a href="https://github.com/yodasnow/">Hosted on Github</a>
                        </li>
                        <li className="last">
                            Last updated: 2020-05-23
                        </li>
                    </ul>
                </nav>
            </footer>
        );
    }
}

export default Footer;
