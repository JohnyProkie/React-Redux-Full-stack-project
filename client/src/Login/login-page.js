import React, { Component } from 'react';
import LoginForm from './login-form'
import { connect } from 'react-redux'
import { userSignupRequest } from '../Actions/login-actions'

class Login extends Component {
  render(){
  	const { userSignupRequest } = this.props;
    return(
      <div className="row" >
          	<div className="col-md-4 col-md-offset-4" >
          		<LoginForm userSignupRequest={userSignupRequest} />
      		</div>   
      </div>
      )
  }
}


export default connect(null ,{ userSignupRequest} )(Login); 