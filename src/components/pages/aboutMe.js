import React, {Component} from 'react';

class AboutMe extends Component{
    constructor(props){
        super(props);
        this.sections = ["Who am I?", "What are my interests?", "What are my achievements?"];

        this.para1 = "Hi, my name is Oliver and I just recently finished Grade 12. I am most likely going to Waterloo University for Computer Science (which I have already been accepted for) or Software Engineering (which I am waiting on). I have mainly done algorithmic coding, but have made games, simple machine learning programs and websites (as you can see!). I enjoy all of the different areas and am constantly looking to widen my area of knowledge and passion in coding.\n I enjoy taking on projects although most of them end up being dropped at some point or another. Currently my project is this website and after I finish this up I am going to seriously look into a big project due to the mass amount of time I have due to the COVID-19 crisis. I know how to code well in Python, Java and C++, and am learning JavaScript, HTML and CSS. I have been recently making a switch to Linux systems instead of Windows and Mac and am extremely enjoying the challenges and freedom that comes with it.";
        this.para2 = "As I have said before, I enjoy coding and all aspects of computers. One of my hobbies is Homelabbing, which involves hosting a lot of your own services such as media and networking and having a playground for you to learn and experiment with Linux on. I really enjoy being able to freely mess around with different things and not have to worry about the consequences as it has been helping me prepare for a transition to a Linux system. \n Apart from coding and computers, I also enjoy rock climbing, scuba diving and motorcycling (both on and off road).";
        this.para3 =
            <ul>
                <li>Thompson Prize for ICS4U (Grade 12 Computer Science) highest mark in grade</li>
                <li>Duke of Edinburgh Gold, Silver and Bronze</li>
                <li>G2 and M2 licenses</li>
                <li>NLS Lifeguard + SFA (CPR-C)</li>
                <li>Change the World - Certificate of Recognition (Ontario Youth Volunteer Challenge)</li>
            </ul>
        this.paragraphs = [this.para1, this.para2, this.para3];
        this.state = {sectionIndex:0};
        this.autoToggle = true;
        this.changeSection = this.changeSection.bind(this);
        this.buttonOne = this.buttonOne.bind(this);
        this.buttonTwo = this.buttonTwo.bind(this);
        this.buttonThree = this.buttonThree.bind(this);
    }

    componentDidMount(){
        this.timeout = setTimeout(
            this.changeSection,
            this.props.animDuration * 1000
        )
    }

    componentWillUnmount(){
        if (this.timeout) clearTimeout(this.timeout)
    }

    changeSection(){
        this.setState(function ({ sectionIndex }) {
            let nextSectionIndex = sectionIndex+1;
            nextSectionIndex %= this.sections.length;
            if(this.autoToggle){
                return{sectionIndex:nextSectionIndex}
            }
            else{
                return{sectionIndex:sectionIndex}
            }
        }, function () {
            this.timeout = setTimeout(
                this.changeSection,
                this.props.animDuration * 1000
            )
        })
    }

    buttonOne(){
        this.autoToggle = false;
        this.setState(function ({}) {
            return {sectionIndex:0}
        });
    }
    buttonTwo(){
        this.autoToggle = false;
        this.setState(function ({}) {
            return { sectionIndex:1}
        });
    }
    buttonThree(){
        this.autoToggle = false;
        this.setState(function ({}) {
            return { sectionIndex:2}
        });
    }
    render(){
        return(
            <div className="container-fluid" id="aboutMe">
                <div className="ccenterDiv">
                    <div className="bodyHeader">
                        <h2>About me</h2>
                    </div>
                    <h3>{this.sections[this.state.sectionIndex]}</h3>
                    <p className="new-line">{this.paragraphs[this.state.sectionIndex]}</p>
                    <div className="aboutMeButtonList">
                        <nav>
                            <ul>
                                <li><button onClick={this.buttonOne}> </button></li>
                                <li><button onClick={this.buttonTwo}> </button></li>
                                <li><button onClick={this.buttonThree}> </button></li>
                            </ul>
                        </nav>
                    </div>
                    <p>&nbsp;</p>
                </div>
            </div>
        )
    }
}

export default AboutMe;