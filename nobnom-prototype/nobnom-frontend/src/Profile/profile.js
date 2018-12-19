import React, { Component } from 'react';
import '../css/general.css';
import '../css/menu.css';

export default class Profile extends Component {
  constructor(props){
      super(props);
    }


  render() {
    console.log(this.props.user);
    return (
      <div>
        <div className="row">
          <div className="col s12 m12 l12" >


          </div>
        </div>
      </div>
    );
  }
}
