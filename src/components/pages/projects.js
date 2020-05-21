import React, {Component} from 'react';

import imgtest from '../../Assets/images/cosmonaut.jpg';
import imgAlgorithm from '../../Assets/images/algorithmicCoding.jpg';
import imgWAC from '../../Assets/images/wac.png';
import imgSAID from '../../Assets/images/said.png';
import imgNight from '../../Assets/images/theNight.jpg';
import imgMaze from '../../Assets/images/maze.png';
import imgCodingBat from '../../Assets/images/codingBat.png';

//import img from '../../Assets/images/';

class Projects extends Component{
    render(){
        return(
            <div className="container-fluid">
                <div className="ccenterDiv">
                    {/** Website **/}
                    <div className="projectsMain">
                        <img src={imgtest} className="imgl"></img>
                        <h3>Personal Website</h3>
                        <h4 className="active">Active</h4>
                        <p>test1</p>
                    </div>
                    {/** Algorithmic coding **/}
                    <div className="projectsMain">
                        <img src={imgAlgorithm} className="imgr"></img>
                        <h3>Algorithmic Coding</h3>
                        <h4 className="active">Active</h4>
                        <p>test</p>
                    </div>
                    {/** CodingBat **/}
                    <div className="projectsMain">
                        <img src={imgCodingBat} className="imgl"></img>
                        <h3>Algorithmic Coding</h3>
                        <h4 className="active">Active</h4>
                        <p>test</p>
                    </div>
                    {/** WAC Website **/}
                    <div className="projectsMain">
                        <img src={imgWAC} className="imgr"></img>
                        <h3>WAC Website</h3>
                        <h4 className="closed">Closed/Complete</h4>
                    </div>
                    {/** WAC Scripts **/}
                    <div className="projectsMain">
                        <img src={imgWAC} className="imgl"></img>
                        <h3>WAC Scripts</h3>
                        <h4 className="closed">Closed/Complete</h4>
                    </div>
                    {/** BLGHackForChange **/}
                    <div className="projectsMain">
                        <img src={imgSAID} className="imgr"></img>
                        <h3>BLG Hack For Change Website</h3>
                        <h4 className="closed">Closed/Complete</h4>
                    </div>
                    {/** BLGHackForChange DAPP **/}
                    <div className="projectsMain">
                        <img src={imgSAID} className="imgl"></img>
                        <h3>BLG Hack For Change DAPP</h3>
                        <h4 className="closed">Closed/Complete</h4>
                    </div>
                    {/** TheNight **/}
                    <div className="projectsMain">
                        <img src={imgNight} className="imgr"></img>
                        <h3>TheNight</h3>
                        <h4 className="closed">Closed/Complete</h4>
                    </div>
                    {/** Maze Game **/}
                    <div className="projectsMain">
                        <img src={imgMaze} className="imgl"></img>
                        <h3>Maze Game</h3>
                        <h4 className="closed">Closed/Complete</h4>
                    </div>
                </div>
            </div>
        );
    }
    onNameChange(event) {
        this.setState({name: event.target.value})
    }
    onEmailChange(event) {
        this.setState({email: event.target.value})
    }
    onMessageChange(event) {
        this.setState({message: event.target.value})
    }
}

export default Projects;
