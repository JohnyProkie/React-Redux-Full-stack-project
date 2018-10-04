import React, { Component } from 'react';
import './App.css';
import _ from 'lodash';
import { Grid , Row , Col , Image, Button, Table, Nav, NavItem } from 'react-bootstrap';
import {createStore, combineReducers, bindActionCreators} from 'redux'
import { Provider } from 'react-redux'
import { connect } from 'react-redux'
import axios from 'axios'

import { DataToRedux, SavePoDelete, BackMain, BackSub } from './Actions/actions'
import * as ProductActions from './Actions/actions' 
import DefaultApp from './Components/main'
import Reducer from './Reducers/reducers' 
import DefaultApp2 from './Components/sub'
import DefaultApp3 from './Components/sub2'


class App extends Component {
      constructor(props) {
    super(props);

    this.state ={ 
      users: [],
      level: 1,
    };
}

componentDidMount(){

  fetch('/db', { method: 'get', mode: 'no-cors',  headers: {
         Accept: 'application/json',
 'Content-Type': 'application/json',
                  }, })
    .then(res => res.json())
    .then(users => this.props.DataToRedux({users}))
}

Add(name, date, poznamka){
    fetch('/add/custommer', {
          method: 'POST',
          headers: {
          Accept: 'application/json',
                  'Content-Type': 'application/json',
                  },
          body: JSON.stringify({name: name, date: date , poznamka: poznamka }),
            }).then(this.componentDidMount())
  }

Del(delete_id){
    fetch('/delete/id', {
          method: 'POST',
          headers: {
          Accept: 'application/json',
                  'Content-Type': 'application/json',
                  },
          body: JSON.stringify({delete_id: delete_id}),
            }).then(res => {console.log('.then po DELETOVANI'), console.log(res), this.componentDidMount()} )
      this.props.SavePoDelete()
      this.componentDidMount()
  }



  backMain(){
    this.props.BackMain()
  } 

  backSub(){
if (this.props.Reducer.rowSub2Show == true) {
    this.props.BackSub()
    }
 }



  render() {
if (this.props.Reducer.working !== false) {
  if (this.props.Reducer.rowMainShow == true) {
        console.log('1. cyklus' )
        document.getElementById('Main').style.display = 'block';
        document.getElementById('Sub').style.display = 'none';
        document.getElementById('Sub2').style.display = 'none';
      }
    if (this.props.Reducer.rowSubShow == true) {
        console.log('2. cyklus' )
        document.getElementById('Main').style.display = 'none';
        document.getElementById('Sub').style.display = 'block';
        document.getElementById('Sub2').style.display = 'none';
      }
      if (this.props.Reducer.rowSub2Show == true) {
        console.log('3. cyklus' )
        document.getElementById('Main').style.display = 'none';
        document.getElementById('Sub').style.display = 'none';
        document.getElementById('Sub2').style.display = 'block';
      }   
    }
console.log('App.js props' );
console.log(this.props);

    return (

     <div className="container" >
        <div className="row">
           <div className="col-md-12 text-center">
                <h1 className="">Dohledový system Atlas</h1>
            <Row> <Col xs={12} md={12}> <Image className="image" src="https://banner2.kisspng.com/20180315/bpe/kisspng-flag-of-the-philippines-philippine-declaration-of-philippines-word-cliparts-5aaa36e41b7c33.0955646715211046121126.jpg" rounded /> </Col> </Row>
    <div className="wrap" >
         <Nav  id="navigace"
          bsStyle="pills"
          justified
          activeKey={this.props.Reducer.level}
        >
          <NavItem eventKey={1} onClick={this.backMain.bind(this)} >
            Main
          </NavItem>
          <NavItem eventKey={2} title="Item" onClick={this.backSub.bind(this)} >
          Sub - Menu
          </NavItem>
          <NavItem eventKey={3} disabled >
            Sub 2 - Menu
          </NavItem>
        </Nav>
              
            </div>
          </div>

          <div id='Main' >
              <DefaultApp Add={this.Add.bind(this)} Del={this.Del.bind(this)} />
            </div>
              <div className="Sub" id='Sub' >
          <DefaultApp2 />
          </div>
            <div className="Sub" id='Sub2' >
         <DefaultApp3 />
          </div>
        </div>
   </div>

    );
  }
}

const mapDispatchToProps = (dispatch) => {
  const { DataToRedux, SavePoDelete, BackMain, BackSub } = bindActionCreators(ProductActions, dispatch)
    return {
      DataToRedux, SavePoDelete, BackMain, BackSub
    }
}


const mapStateToProps = (state) => {
    return state;
}

const DefaultApp1 = connect(
        mapStateToProps,
        mapDispatchToProps
)(App)

export default DefaultApp1;
