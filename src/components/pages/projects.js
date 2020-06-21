import React, {Component} from 'react';

import imgLogo from '../../Assets/images/logoBlack.png';
import imgAlgorithm from '../../Assets/images/algorithmicCoding.jpg';
import imgWAC from '../../Assets/images/wac.png';
import imgSAID from '../../Assets/images/said.png';
import imgNight from '../../Assets/images/theNight.jpg';
import imgMaze from '../../Assets/images/maze.png';
import imgCodingBat from '../../Assets/images/codingBat.jpg';

//import img from '../../Assets/images/';

class Projects extends Component{
    render(){
        return(
            <div className="container-fluid" id="projects">
                <div className="ccenterDiv">
                    <div className="bodyHeader">
                        <h2>Projects and Repositories</h2>
                    </div>
                    <p>Not all of my past projects and repositories are listed here. These are some of the more recent and ones that I am more proud of. For the rest of the projects, they are mostly hosted on my <a href="https://github.com/yodasnow">GitHub</a>, but some of the code may be messy and not representative of my current skill/ability.</p>
                    <div className="projectContainer">
                        {/** Website **/}
                        <div className="leftProject">
                            <a href="https://github.com/yodasnow/me"><img src={imgLogo} className="imgl"></img></a>
                            <h3>Personal Website</h3>
                            <h4 className="active">Active</h4>
                            <p>
                                This website serves two purposes. Firstly, it is meant to be a way for me to show off stuff about me in an easy and accessible way. Secondly, it allows me to learn different aspects of website development - the first verion used plain HTML, JS and a pre-stylized stylesheet, whereas this version uses ReactJS and Bootstrap (I still don't know what the Bootstrap part is actually doing but hey).
                            </p>
                        </div>
                        {/** Algorithmic coding **/}
                        <div className="rightProject">
                            <a href="https://github.com/yodasnow/Algorithmic-Coding"><img src={imgAlgorithm} className="imgr"></img></a>
                            <h3>Algorithmic Coding</h3>
                            <h4 className="pause">Paused</h4>
                            <p>
                                This repository holds the majority of my "algorithmic" code. This ranges from code for the CCC to the ECOO and some problems hosted on DMOJ (online judge). As of recently I have been enjoying this style of coding less so it is currently inactive.
                            </p>
                        </div>
                    </div>
                    <div className="projectcontainer">
                        {/** CodingBat **/}
                        <div className="leftProject">
                            <a href="https://github.com/yodasnow/OneLineCodingBat"><img src={imgCodingBat} className="imgl"></img></a>
                            <h3>CodingBat Python One Liners</h3>
                            <h4 className="closed">Closed/Complete</h4>
                            <p>
                                During the quarantine as a way to get some interest back in "algorithmic" coding, I decided to revist the CodingBat problems which I had already done multiple times. This time I decided to do all of them in one line. Some of them were messy as you could brute force them, but for others I had to use ternary operators in Python which ended up teaching me a lot about something I had never previously used.
                            </p>
                        </div>
                        {/** WAC Website **/}
                        <div className="rightProject">
                            <a href="https://github.com/worldaffairsconference/worldaffairs.ucc.on.ca"><img src={imgWAC} className="imgr"></img></a>
                            <h3>WAC Website</h3>
                            <h4 className="closed">Closed/Complete</h4>
                            <p>
                                This is the website for World Affairs Conference, Canada's oldest annual student-run current affairs conference. My main work on it was bug fixes and spelling because at the time I was just introduced to HTML and web development as a whole.
                            </p>
                        </div>
                    </div>

                    {/** WAC Scripts **/}
                    <div className="projectsMain">
                        <a href="https://github.com/worldaffairsconference/scripts"><img src={imgWAC} className="imgl"></img></a>
                        <h3>WAC Scripts</h3>
                        <h4 className="closed">Closed/Complete</h4>
                        <p>
                            The script repository for registration for World Affairs Conference, Canada's oldest annual student-run current affairs conference. I worked on remaking the registration code as it was previously done in a super concise, but hard to read method. I redesigned it to make it hopefully more useful and usable down the road.
                        </p>
                    </div>
                    {/** BLGHackForChange **/}
                    <div className="projectsMain">
                        <a href="https://github.com/yodasnow/BLGHackForChange"><img src={imgSAID} className="imgr"></img></a>
                        <h3>BLG Hack For Change Website</h3>
                        <h4 className="closed">Closed/Complete</h4>
                        <p>
                            Code for our website during an interschool Blockchain Hackathon. You can find the website at: https://yodasnow.github.io/BLGHackForChange
                        </p>
                    </div>
                    {/** BLGHackForChange DAPP **/}
                    <div className="projectsMain">
                        <a href="https://github.com/yodasnow/BLGHackForChangeDApp"><img src={imgSAID} className="imgl"></img></a>
                        <h3>BLG Hack For Change DAPP</h3>
                        <h4 className="closed">Closed/Complete</h4>
                        <p>
                            DApp component from the Blockchain Hackathon. Needs to be run on localhost for linking from main website to work (donate hyperlinks). This was the main section that I worked on and ended up doing the majority of it solo. I learned about different frameworks as we had a template provided to us that had the basics of Blockchain transactions in it.
                        </p>
                    </div>
                    {/** TheNight **/}
                    <div className="projectsMain">
                        <a href="https://github.com/yodasnow/TheNight"><img src={imgNight} className="imgr"></img></a>
                        <h3>TheNight</h3>
                        <h4 className="closed">Closed/Complete</h4>
                        <p>
                            Game based off of a kids story. Uses JS and canvas. Hosted at: https://yodasnow.github.io/TheNight. This was made for the purpose of being an exemplar project for future collaborations between Computer Science students and younger kids (providing the story part).
                        </p>
                    </div>
                    {/** Maze Game **/}
                    <div className="projectsMain">
                        <a href="https://github.com/yodasnow/MazeGame"><img src={imgMaze} className="imgl"></img></a>
                        <h3>Maze Game</h3>
                        <h4 className="closed">Closed/Complete</h4>
                        <p>
                            Maze game made with Java for ICS4U project 2. Uses Java AWT and Swing. The main challenge was working with the reverse Prim's algorithm for the randomized maze generation.
                        </p>
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
