import React, { Component } from 'react';
import './styles-global.css';
import _ from 'lodash';
import { Grid , Row , Col , Image, Table, Button, Glyphicon, Nav, NavItem } from 'react-bootstrap';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { BackMain } from '../Actions/actions'
import * as ProductActions from '../Actions/actions' 
import RowSubRow from './sub-row'

const wellStyles = { width: 80, margin: 2};

class RowSub extends Component {

  backMain(){
    this.props.BackMain()
  } 

printrow(){
  return( _.map(this.props.Reducer.custommers[this.props.Reducer.workingId].subinfo, (classe, index) => <RowSubRow key={index} classe={classe} index={index} />

    ) )
}

  render() {
 
    return (
      <div>
    <div className="row" id='Main'>
        <Row>
         <Col  xs={12} className="nadpis"> <br/> <p> custommer: </p> <h1>{this.props.Reducer.custommers[this.props.Reducer.workingId].name}</h1> </Col>
        </Row>
      <div className="span6">
        <div className="Main" >

         <Table striped bordered condensed hover>
            <thead>
              <tr>
                <th>Pracovní Agentura Atlas s.r.o. </th>
                <th>Date</th>
                <th>Comment</th>
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
  const { BackMain } = bindActionCreators(ProductActions, dispatch)
    return {
      BackMain
    }
}


const mapStateToProps = (state) => {
    return state;
}

const DefaultApp2 = connect(
        mapStateToProps,
        mapDispatchToProps
)(RowSub)

export default DefaultApp2;
