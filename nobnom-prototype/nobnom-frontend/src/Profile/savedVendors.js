import React, { Component } from 'react';
import '../css/general.css';
import '../css/menu.css';
import '../css/profile.css';

const SavedVendors = () => {
  return (
    <div>
      <div className="section"/>
      <div className="card">
        <div className="container">
          {/*<div className="col l12"></div>*/}
          <div className="category-title">Saved Vendors</div>
          <div className="row">
            <div className="col l12">
              <div className="col l4"><img className="responsive-img" src="https://via.placeholder.com/150"/><div>Little Egypt Halal Cart</div></div>
              <div className="col l4"><img className="responsive-img" src="https://via.placeholder.com/150"/><div>Viagra Taco Truck</div></div>
              <div className="col l4"><img className="responsive-img" src="https://via.placeholder.com/150"/><div>Sammy's Halal</div></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SavedVendors;
