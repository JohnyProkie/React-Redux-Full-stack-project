import React, { Component } from 'react';
import { Alert } from 'react-bootstrap';
import { connect } from 'react-redux'

import LoginForm from './login-form'
import { userSignupRequest } from '../Actions/login-actions'

class Login extends Component {
  render(){
  	const { userSignupRequest } = this.props;
    return(
      <div className="row" >
<Alert bsStyle="success">
  For succesfull authorisation type - Login: <strong> Petr </strong> password: <strong> heslo </strong> 
</Alert>
          	<div className="col-md-4 col-md-offset-4" >
          		<LoginForm userSignupRequest={userSignupRequest} />
      		</div>   
      </div>
      )
  }
}


export default connect(null ,{ userSignupRequest} )(Login); 