import React, {Component} from 'react';
import ImageFadeIn from 'react-image-fade-in';
import img1 from '../../Assets/images/cosmonaut.jpg';
import img2 from '../../Assets/images/nebula.jpg';

class Images extends Component{
    constructor(props){
        super(props);
        this.backgroundImages = [img1, img2];
        this.state = { backgroundIndex: 0 };

        this.changeBackground = this.changeBackground.bind(this)
    }

    componentDidMount(){
        this.timeout = setTimeout(
            this.changeBackground,
            this.props.animDuration * 1000
        )
    }

    componentWillUnmount(){
        if (this.timeout) clearTimeout(this.timeout)
    }

    changeBackground(){
        this.setState(function ({ backgroundIndex }) {
            const nextBackgroundIndex = ++backgroundIndex % this.backgroundImages.length;

            return { backgroundIndex: nextBackgroundIndex }
        }, function () {
            this.timeout = setTimeout(
                this.changeBackground,
                this.props.animDuration * 1000
            )
        })
    }

    render(){
        return(
            <div className="images">
                <ImageFadeIn src={this.backgroundImages[this.state.backgroundIndex]} className="titleImage"/>
                <h1>Oliver Odendaal</h1>
                <h3>Student, Coder, Developer</h3>
            </div>
        )
    }
}

export default Images;