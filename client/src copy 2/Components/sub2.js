import React, { Component } from 'react';
import _ from 'lodash';
import { Grid , Row , Col , Image, Table, Button } from 'react-bootstrap';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import {Show, BackSub } from '../Actions/actions'
import * as ProductActions from '../Actions/actions' 
import Sub2Row from './sub2-row'

const wellStyles = { width: 80, margin: 2};


class Sub2 extends Component {



backSub(){
    this.props.BackSub()
  }

printrow(){
  console.log("printrow()")
  console.log(this.props)
  console.log(this.props.Reducer.custommers[this.props.Reducer.workingId].subinfo[3])
  return( _.map(this.props.Reducer.custommers[this.props.Reducer.workingId].subinfo[3], (row, index) => <Sub2Row key={index} row={row} index={index}/>

    ) )
}  

  render() {



      console.log('SUB2 props ---');
  console.log(this.props)

    return (
      <div>
    <h1>{this.props.Reducer.custommers[this.props.Reducer.workingId].name}</h1> <Button bsStyle="success" style={wellStyles} onClick={this.backSub.bind(this)} > Zpět </Button>
    <div className="row" id='Main'>
      <div className="span5">
        <div className="Main" >
         <Table striped bordered condensed hover>
            <thead>
              <tr>
                <th>Žádost</th>
                <th>Datum</th>
                <th>Hotovo</th>
                <th>Akce</th>
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

const DefaultApp3 = connect(
        mapStateToProps,
        mapDispatchToProps
)(Sub2)

export default DefaultApp3;
