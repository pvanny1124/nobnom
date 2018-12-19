import React, { Component } from 'react';
import MapContainer from './MapContainer';

class Dashboard extends Component {
    constructor(props){
        super(props);
        this.state = {
            vendors: null
        }
    }

    componentWillMount(){
        fetch("/users/" + this.props.user.id + "/dashboard")
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
                <MapContainer coords={this.props.coords} vendors={this.state.vendors}/>
            </div>
        );
    }
}

export default Dashboard;
