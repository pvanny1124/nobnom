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

    componentDidMount() {

        //Need to reference the component instance. Just setting this.setState(..) inside of getCurrentPosition will reference the wrong "this"...
        let self = this;
        if ("geolocation" in navigator) {
            // check if geolocation is supported/enabled on current browser
        navigator.geolocation.getCurrentPosition(
            function(position) {
                // for when getting location is a success
                console.log('latitude', position.coords.latitude, 
                            'longitude', position.coords.longitude);

                let lat = position.coords.latitude;
                let lng = position.coords.longitude;

                //Store lat and long in state
                self.setState({
                    latitude: lat,
                    longitude: lng
                })

                //update the current location in the main app.js file
                self.props.getCurrentLocation(lat, lng)

                //retrieve nearby carts
                    //retrieve 
                    //need to display google map

            },
            function error(error_message) {
                // for when getting location results in an error
                console.error('An error has occured while retrieving location', error_message)
            }  
            );
        } else {
                // if geolocation is not supported
                // get your location some other way
                console.log('geolocation is not enabled on this browser')
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
