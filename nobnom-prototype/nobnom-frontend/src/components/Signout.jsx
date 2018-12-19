import React, { Component } from 'react';
import { Redirect, withRouter }  from 'react-router-dom';


class Signout extends Component {
    constructor(props){
        super(props);
        this.state = {
            isLoggedOut: false
        }
    }


    componentWillMount(){
        fetch("/logout")
            .then(response => {
                    if(response.status == 200){
                        
                        
                        //reset user in main app.js
                        this.props.resetUser();
                        setTimeout(func => {
                            this.setState({ isLoggedOut: true})
                        }, 1000)
                        

                        // //redirect to main landing page
                        // this.props.history.push("/");
                    }
            })
            .catch(error => {
                console.log(error);
            })
    }


    render(){
        console.log(this.state.isLoggedOut)
        return (
            <div>
                {this.state.isLoggedOut ? <Redirect to="/" /> : <p>Signing you out, son...</p>}
            </div>
        );
    
      }


}

export default withRouter(Signout);


