import React, { Component } from 'react';
import _ from 'lodash';
import { Grid , Row , Col , Image, Table, Button, Glyphicon, Nav, NavItem } from 'react-bootstrap';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import './styles-global.css';
import {Show, BackSub } from '../Actions/actions'
import * as ProductActions from '../Actions/actions' 
import Sub3Row from './sub3-row'

const wellStyles = { width: 80, margin: 2};


class Sub3 extends Component {



backSub(){
    this.props.BackSub()
  }

printrow(){
  console.log("printrow()")
  console.log(this.props)
  console.log(this.props.Reducer.custommers[this.props.Reducer.workingId].subinfo[5].subinfo_sub[0].subinfo_sub2)
  return( _.map(this.props.Reducer.custommers[this.props.Reducer.workingId].subinfo[5].subinfo_sub[0].subinfo_sub2, (row, index) => <Sub3Row key={index} row={row} index={index}/>

    ) )
} 


  render() {

    return (
      <div>
     <div className="row" id='Main'>
        <Row>
         <Col  xs={12} className="nadpis"> <h1>{this.props.Reducer.custommers[this.props.Reducer.workingId].name}</h1> </Col>
        </Row>
      <div className="span5">
        <div className="Main" >

         <Table striped bordered condensed hover>
            <thead>
              <tr>
                <th>Document</th>
                <th>Date</th>
                <th>State</th>
                <th>Action</th>
              </tr>
            </thead>
              {this.printrow()} 
            <tfoot>
            </tfoot>
          </Table>
          </div>
        </div>
      </div>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  const { Show, BackSub } = bindActionCreators(ProductActions, dispatch)
    return {
      Show, BackSub
    }
}


const mapStateToProps = (state) => {
    return state;
}

const DefaultApp4 = connect(
        mapStateToProps,
        mapDispatchToProps
)(Sub3)

export default DefaultApp4;
