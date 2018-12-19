import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import {browserHistory} from 'react-router';
import Sliders from './Sliders';
import Howitworks from './howitworks';



class LandingPage extends Component {
    constructor(props){
        super(props);
        this.state = {
            latitude: 0,
            longitude: 0
        }
    }

    render(){
            
        return (
            <div className="landing-page">
                <div className="welcome landing-page">
                  <Sliders />
                  <Howitworks/>
                </div>
            </div>

        );
    }
}

export default LandingPage;
