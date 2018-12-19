import React, { Component } from 'react';
import '../css/general.css';
import '../css/menu.css';
import '../css/profile.css';

const Thumbnail = () => {
  return (
    <div>
      <div className="card">
        <div className="container">
          <div className="section"/>
          <div className="category-title">General Information</div>
          <img className="responsive-img circle" src="https://via.placeholder.com/150"/>
          <div className="section"/>
          <div>Edit</div>
          <div>Tom Brady</div>
          <div className="section"/>
          <div>TomBrady@test.com</div>
          <div>718-764-7162</div>
        </div>
      </div>
    </div>
  )
}

export default Thumbnail;
