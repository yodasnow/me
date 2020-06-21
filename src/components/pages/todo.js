import React, {Component} from 'react';

class Todo extends Component{
    render(){
        return(
            <div className="container-fluid">
                <div className="ccenterDiv">
                    <div className="bodyHeader">
                        <h2>Todo for this website</h2>
                    </div>
                    <p>
                        This is a way of me listing out all of the things that I want to change for both me and people that may be interested like you.
                    </p>
                    <ul>
                        <li>Fix scaling for phones (hopefully I got most computer resolutions (msg me if not)</li>
                        <li>Dynamic sizing on project section (right now there is always a left and right column</li>
                        <li>Smooth transition for the header hyperlinks</li>
                        <li>Possibly have the header shown at all times?</li>
                        <li>Have about me section buttons highlighted when on their current "section"</li>
                        <li>Have an actual email form (possibly php or some other method</li>
                        <li>Better logo (fancier and most resolution - my eyes)</li>
                    </ul>
                </div>
            </div>
        );
    }
}

export default Todo;
