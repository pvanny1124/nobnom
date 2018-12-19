import React, { Component } from 'react';
import '../css/general.css';
import '../css/menu.css';
import '../css/profile.css';

const ImagesAndReviews = () => {
  return (
    <div>
      <div className="section"/>
      <div className="card">
        <div className="container">
          <div className="category-title">Images and Reviews</div>
          <div className="row">
            <div className="col l12">
              <div className="col l4"><img className="responsive-img" src="https://via.placeholder.com/150"/></div>
              <div className="divider"/>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ImagesAndReviews;
