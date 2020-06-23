import React, {Component} from 'react';
import {
    BrowserRouter as Router,
    Route
} from 'react-router-dom';
import ReactGA from 'react-ga';


//Components
import Header from './components/headerComponent/header';

import Images from './components/pages/images';
import AboutMe from './components/pages/aboutMe';

import Projects from './components/pages/projects';
import Todo from './components/pages/todo';

import ResumeContact from './components/pages/resumeContect';

import Spacer from './components/pages/spacer';
import Footer from './components/footerComponent/footer';

//Includes
import './Assets/css/default.min.css';

ReactGA.initialize('UA-135109533-1');
ReactGA.pageview(window.location.pathname + window.location.search);

class App extends Component{
    render(){
        return(
            <Router>
                <div className="App">
                    <Header />

                    <Images animDuration={15}/>
                    <AboutMe animDuration={10}/>

                    <Projects />
                    <Todo />

                    <ResumeContact />

                    <Spacer />
                    <Footer />
                </div>
            </Router>
        );
    }
}

export default App;
