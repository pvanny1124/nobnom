import React, { Component } from 'react';
import Thumbnail from './thumbnail';
import SavedVendors from './savedVendors';
import ImagesAndReviews from './imagesAndReviews';

import '../css/general.css';
import '../css/menu.css';

export default class Profile extends Component {
  constructor(props){
      super(props);
    }


  render() {
    console.log(this.props.user);
    return (
      <div style={{backgroundColor: "#F9F9F9"}}>
        <div className="row">
          <div className="col s12 m12 l12">
              <div className="col m4 l4" style={{paddingTop: '20px'}}><Thumbnail/></div>
              <div className="col m8 l8" style={{paddingTop: '20px'}}>
                <SavedVendors/>
                <ImagesAndReviews/>
              </div>
          </div>
        </div>
      </div>
    );
  }
}
