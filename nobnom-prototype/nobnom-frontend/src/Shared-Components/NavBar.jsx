import React, { Component } from 'react';
import { Link} from 'react-router-dom';
import '../css/general.css';
import logo from '../images/nob-nom-logo.png';




export default class NavBar extends React.Component {
  constructor(props){
        super(props);
  }
  render() {
    return (
      <div>
      <div className="row"style={{margin: 0}}>
       <div className="navbar">

       {/*navbar for mobile (small)*/}
          <div className="col s12 hide-on-med-and-up">
            <div className="col s2 push-s4">
              <Link to="/"> <img src={logo}/> </Link>
            </div>
          </div>
       {/*navbar for tablet and desktop (med and up)*/}
        <div className="col l12  hide-on-small-only">
        {this.props.user ?
                <div>
                  <p>Welcome!</p>
                  <div className="col l2 push-l7"><Link style={styles.link} to="/signout"> Signout </Link></div>
                  <div className="col l2 push-l7"><Link style={styles.link} to="/"> Home </Link></div>
                  <div className="col l2 push-l7"><Link style={styles.link} to={"user/" + this.props.user.id + "/dashboard"}> Dashboard </Link></div>
                </div>
                :
                <div className="row" style={{paddingTop: '10px'}}>
                    <div className="col l1 m1" style={styles.paddingSide}><Link style={styles.link} to="/login"> Log In </Link></div>
                    <div className="col l2 m2" style={styles.paddingSide}><div style={styles.button}><Link style={styles.link} to="/signup/users"> Sign Up </Link></div></div>
                    <div className="col l3 m3" ><div style={styles.buttonBorder}><Link style={styles.link} to="/signup/vendors">Vendor Sign Up </Link></div></div>
                </div>
        }
        </div>
      </div>
    </div>
  </div>
    );
  }
}


const styles = {
  link: {
    color: 'white',
    //padding: '0 0 0 20px',
    fontSize:'20px',
    textAlign:'right',
    fontFamily: 'Acme'
  },
  button: {
    borderStyle: 'solid',
    borderColor: '#FBDB58',
    backgroundColor: '#FFCE02',
    borderRadius: '8px',
    padding: '0 0 0 25%'
  },
  buttonBorder: {
    borderStyle: 'solid',
    borderColor: '#FBDB58',
    borderRadius: '8px',
    padding: '0 0 0 25%'
  },
  paddingSide : {
    paddingLeft: '0px',
    paddingRight: '0px',

  }


}
