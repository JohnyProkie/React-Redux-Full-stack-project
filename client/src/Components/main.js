import React, { Component } from 'react';
import _ from 'lodash';
import { Grid , Row , Col , Image, Table, Button, Glyphicon, Nav, NavItem } from 'react-bootstrap';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import './styles-global.css';
import {Sub, Edit, Refresh } from '../Actions/actions'
import * as ProductActions from '../Actions/actions'
import MainRow from './main-row' 

const wellStyles = { width: 100, margin: 1 };

class RowMain extends Component {
        constructor(props) {
    super(props);
  }


handleAdd(){
  this.props.Add(this.refs.name.value , this.refs.date.value, this.refs.poznamka.value)
}

renderBody(){
  return( _.map(this.props.Reducer.custommers, (classe, index) => <MainRow key={index} classe={classe} index={index} props={this.props} />

    ))
}

  render() {
    
    return (

     <div className="row" >
        <Row>
         <Col  xs={12} className="nadpis"   > <h1>Welcome home</h1> </Col>
        </Row>
      <div className="span5">
        <div className="Main" >

          <Table striped bordered condensed hover>
            <thead>
              <tr>
                <th>ID</th>
                <th>Custommer</th>
                <th>State</th>
                <th>Date</th>
                <th>Comment</th>
                <th>Action</th>
              </tr>
            </thead>
              {this.renderBody()}
            <tfoot>
                <tr>
                <th></th>
                <th><input type='text' placeholder="Name of the new custommer" ref="name" /></th>
                <th> </th>
                <th><input type='date' ref="date" /></th>
                <th><input type='text' placeholder="comment" ref="poznamka" /></th>
                <th><div className="text-center" ><Button style={wellStyles} onClick={this.handleAdd.bind(this)} ><Glyphicon glyph="glyphicon glyphicon-plus" /> Add </Button></div></th>
              </tr>
              </tfoot>
          </Table>
          </div>
      </div>
    </div>

    );
  }
}

const mapDispatchToProps = (dispatch) => {
  const { Sub, Refresh, Edit } = bindActionCreators(ProductActions, dispatch)
    return {
      Sub, Refresh, Edit
    }
}

const mapStateToProps = (state) => {
    return state;
}

const DefaultApp = connect(
        mapStateToProps,
        mapDispatchToProps
)(RowMain)

export default DefaultApp;
