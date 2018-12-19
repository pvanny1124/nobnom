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

class App extends Component {
  constructor(props){
      super(props);
      this.state = {
        user: null,
        isLoading: true
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

  render() {

    console.log(this.state.user)
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
              <Route path="/user/:id/dashboard" render={() => <Profile user={this.state.user}/> } />
              <Route path="/vendor/:id/dashboard" render={() => <Profile user={this.state.user}/> } />
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
