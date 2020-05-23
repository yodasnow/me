import React, {Component} from 'react';
//import Mailto from 'react-mailto';

class ResumeContact extends Component{
    render(){
        return(
            <div className="container-fluid" id="contact">
                <div className="ccenterDiv">
                    <div className="leftDiv">
                        <div className="bodyHeader">
                            <h2>Resume</h2>
                        </div>
                        <p>
                            Currently, my resume is not hosted on this website as it has some private information on it. I will make a version that I am happy to upload publicly at some point, but am currently busy with other stuff.
                        </p>
                    </div>
                    <div className="rightDiv">
                        <div className="bodyHeader">
                            <h2>Contact me</h2>
                        </div>
                        <p>If you want my resume (and have a reason to want it) or want to contact me in general, feel free to email me <a href={"mailto: oliverode@gmail.com"}>here</a>.</p>
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

export default ResumeContact;
