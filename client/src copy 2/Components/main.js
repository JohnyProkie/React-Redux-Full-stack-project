import React, { Component } from 'react';
import _ from 'lodash';
import { Grid , Row , Col , Image, Table, Button } from 'react-bootstrap';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import {Sub, Edit, Refresh } from '../Actions/actions'
import * as ProductActions from '../Actions/actions'
import MainRow from './main-row' 

const wellStyles = { width: 80, margin: 2 };

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
      <div className="span5">
        <div className="Main" >
          <Table striped bordered condensed hover>
            <thead>
              <tr>
                <th>ID</th>
                <th>Zákazník</th>
                <th>Stav</th>
                <th>Datum</th>
                <th>Poznámka</th>
                <th>Akce</th>
              </tr>
            </thead>
              {this.renderBody()}
            <tfoot>
                <tr>
                <th></th>
                <th><input type='text' placeholder="Název zákazníka" ref="name" /></th>
                <th> </th>
                <th><input type='date' ref="date" /></th>
                <th><input type='text' placeholder="Poznámka" ref="poznamka" /></th>
                <th><button onClick={this.handleAdd.bind(this)} > Pridej </button></th>
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
