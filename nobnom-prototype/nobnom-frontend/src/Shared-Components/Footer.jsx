import React, { Component } from 'react';
import { Link} from 'react-router-dom';
import '../css/general.css';
import logo from '../images/nob-nom-logo.png';




export default class Footer extends React.Component {
  constructor(props){
        super(props);
  }
  render() {
    return (
      <div style={{backgroundColor: '#4A4A4A'}}>
        <div className="row">
          <div className="container">
            <div className="col s4 m4 l4">
            <div className="section" style={{paddingBottom: "20px"}}/>
              <img className="responsive-img" src={logo}/>
              <div className="section" style={{paddingBottom: "20px"}}/>
              <p style={{color: "gray"}}>Est 2018 by NobNom LLC</p>
            </div>
          </div>
        </div>
      </div>

    );
  }
}
