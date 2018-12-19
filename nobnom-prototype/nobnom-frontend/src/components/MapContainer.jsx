import React, { Component } from 'react';
import { Map, GoogleApiWrapper, InfoWindow, Marker } from 'google-maps-react';


const mapStyles = {
  width: '50%',
  height: '50%'
};



export class MapContainer extends Component {
    constructor(props){
        super(props);
        this.state = {
            showingInfoWindow: false,  //Hides or the shows the infoWindow
            activeMarker: {},          //Shows the active marker upon click
            selectedPlace: {},          //Shows the infoWindow to the selected place upon a marker
            vendors: null,
            markers: false
          };
    }

    onMarkerClick = (props, marker, e) =>
    this.setState({
      selectedPlace: props,
      activeMarker: marker,
      showingInfoWindow: true
    });

     onClose = props => {
        if (this.state.showingInfoWindow) {
        this.setState({
            showingInfoWindow: false,
            activeMarker: null
        });
        }
    };

    componentWillMount(){
            //get users' lat and long and look for carts nearby

    }


  render() {
      let { coords } = this.props;
      var options = {
        provider: 'google',
        // Optional depending on the providers
        httpAdapter: 'https', // Default
        apiKey: 'AIzaSyCPn65Xil3ZhzaciaiQix8p2HAx_RvUTZw', // for Mapquest, OpenCage, Google Premier
        formatter: null         // 'gpx', 'string', ...
      };
      let markers = [];
      //
      // let { vendors } = this.props;
      //
      // if (vendors === 'undefined' || vendors.vendors === 'undefined') {
      //   this.setState({markers: false})
      // } else {
      //
      //   for(let vendor of vendors.vendors){
      //           markers.push(
      //                        <Marker onClick={this.onMarkerClick}
      //                                name={vendor.vendorName}
      //                                position={{lat: vendor.latitude, lng: vendor.longitude }}/>
      //           )
      //         console.log(vendor);
      //   }
      // }


      console.log("%cVENDORS", "color: green");
      //console.log(markers);

    return (
      
        <Map google={this.props.google}
        zoom={14}
        style={mapStyles}
        initialCenter={{ lat: coords.latitude, lng: coords.longitude }}
      >
        <Marker
          onClick={this.onMarkerClick}
          name={'You are here'}
        />
      {this.state.markers ? {markers} : <div/> }


        <InfoWindow
          marker={this.state.activeMarker}
          visible={this.state.showingInfoWindow}
          onClose={this.onClose}
        >
          <div>
            <h4>{this.state.selectedPlace.name}</h4>
          </div>
        </InfoWindow>
      </Map>

    );
  }
}

//
export default GoogleApiWrapper({
  apiKey: "AIzaSyBF4g3Kr6NEbahBbW-29iOJ5hom7B13UQg"
})(MapContainer);

// geocode..
