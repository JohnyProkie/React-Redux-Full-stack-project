import React, { Component } from 'react';
import App from './App';
import Login from './Login/login-page'
import { Redirect } from 'react-router'
import { Route, NavLink, Router} from "react-router-dom"
import history from './history'
import { Alert } from 'react-bootstrap';

import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import {BackLogin } from './Actions/actions'
import * as ProductActions from './Actions/actions' 


export class Gate extends Component {


  render(){

    return(
      <div>
        <Router history={history} >
          <div>
            <h1></h1>
            <ul className="header">
              <li><NavLink exact to="/" activeStyle={{color:'green'}} onClick={ this.props.BackLogin } >Login</NavLink></li>
              
            </ul>
            <div className="content">
              <Route exact path="/" component={Login} />
              <Route path="/App" component={App} />
            </div>
          </div>
        </Router>
    </div>
      )
  }
}


const mapDispatchToProps = (dispatch) => {
  const { BackLogin } = bindActionCreators(ProductActions, dispatch)
    return {
      BackLogin,
    }
}


const DefaultGate = connect(
        null,
        mapDispatchToProps
)(Gate)

export default DefaultGate;