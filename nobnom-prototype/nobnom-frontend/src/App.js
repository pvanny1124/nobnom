import React, { Component } from 'react';
import {BrowserRouter, Route} from 'react-router-dom'
import LandingPage from './LandingPage/LandingPage';
import SignupAsUser from './components/SignupAsUser';
import SignupAsVendor from './components/SignupAsVendor';
import Login from './components/Login';
import Signout from './components/Signout';
import Menu from './Menu/menu';
import 'bootstrap/dist/css/bootstrap.css';
import './App.css';
import NavBar from './Shared-Components/NavBar';
import Footer from './Shared-Components/Footer';
import Profile from './Profile/profile';
import Dashboard from './components/Dashboard';

class App extends Component {
  constructor(props){
      super(props);
      this.state = {
        user: null,
        isLoading: true,
        latitude: null,
        longitude: null
      }
  }

  getUserData(user){
    console.log(user);
    this.setState({user: user});
  }

  getCurrentLocation(lat, lng){
    this.setState({ lat: lat, lng: lng})
  }

  resetUser(){
    this.setState({ user: null });
  }

  componentWillMount(){
    //check if user is already logged in session
    fetch("/api/auth")
      .then(response => {
          console.log(response);
          return response.json();
      })
      .then(data => {
          this.setState({user: data, isLoading: false});

          //reroute to correct dashboard
          if(data)
          console.log(data);
      })
      .catch(error => {
        this.setState({isLoading: false})
          console.log(error);
      })
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
            
            if(self.state.user){

                fetch("/users/location", {
                  method: "POST",
                  headers: new Headers({
                      "Content-Type": "application/json; charset=utf-8"
                  }),
                  body: JSON.stringify({
                    id: self.state.user.id,
                    latitude: lat,
                    longitude: lng
                  })
                })
                .then(message => {
                  console.log(message);
                })

                
  
          }

          self.setState({
            latitude: lat,
            longitude: lng
        })
            //update the current location in the main app.js file
            // self.props.getCurrentLocation(lat, lng)

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

  render() {

    console.log(this.state.user)
    console.log(this.state.latitude);
    console.log(this.state.longitude);

    let coords = {
      latitude: this.state.latitude,
      longitude: this.state.longitude
    }

    return (
      <div>
        <BrowserRouter>
        
          <div className="main_body_wrapper">
            <NavBar user={this.state.user} />
              <Route path="/" exact render={() => <LandingPage getCurrentLocation={(lat, lng) => this.getCurrentLocation(lat, lng)} />}/>
              <Route path="/signup/users" render={() => <SignupAsUser getUser={(user) => this.getUserData(user)} />} />
              <Route path="/signup/vendors" render={() =>  <SignupAsVendor getUser={(user) => this.getUserData(user)}/> } />
              <Route path="/login" render={() => <Login getUser={(user) => this.getUserData(user)} />} />
              <Route path="/signout" render={() => <Signout resetUser={() => this.resetUser()} />} />
              <Route path="/user/:id/dashboard" render={() => <Dashboard user={this.state.user} coords={coords} /> } />
              <Route path="/vendor/:id/dashboard" render={() => <Dashboard user={this.state.user}/> } />
              <Route path="/vendor/:id/menu" render={() => <Menu getUser={(user) => this.getUserData(user)} />} />
              <Route path="/menu" render={() => <Menu getUser={(user) => this.getUserData(user)} />} />
            <Footer/>
          </div>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
