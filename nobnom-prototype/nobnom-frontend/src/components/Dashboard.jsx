import React, { Component } from 'react';
import MapContainer from './MapContainer';
import Home from '../Home/home.js';

class Dashboard extends Component {
    constructor(props){
        super(props);
        this.state = {
            vendors: null
        }
    }

    componentWillMount(){
      console.log(this.props);
      let id = this.props.match.params.id;
        fetch("/users/" + id + "/dashboard")
            .then(response => {
                return response.json();
            })
            .then(vendors => {
                this.setState({ vendors: vendors })
                console.log(vendors);
            })
    }
    render(){


        return (
            <div>
                <Home coords={this.props.coords} vendors={this.state.vendors}/>
                
            </div>
        );
    }
}

export default Dashboard;
