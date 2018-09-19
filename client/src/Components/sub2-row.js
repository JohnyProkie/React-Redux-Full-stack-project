import React, { Component } from 'react';
import _ from 'lodash';
import { Grid , Row , Col , Image, Table, Button } from 'react-bootstrap';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import {Show, Edit2, ChangeSub2, SaveSub2 } from '../Actions/actions'
import * as ProductActions from '../Actions/actions' 



const wellStyles = { width: 80, margin: 2 };

class Sub2Row extends Component {

handleEdit(){
  console.log('handle Edit DDDDDDDDDDD')
  console.log(this.props)
    this.props.Edit2(this.props.index)
  }



checkHotovo(){
  if (this.props.row.state_sub2) {
    return(<Button bsStyle="success" > Hotovo </ Button>)
  }
  return(<Button bsStyle="danger" > Chybí </ Button>)
}
//

handleChange(){

 this.props.ChangeSub2(this.props.index)
}

  handleSaveSub2(){
    console.log('ref Datum ]}}}}}}}}}}}}}}}}-+- this.props.row._id')
    console.log(this.props)
    console.log(this.props.Reducer.custommers[this.props.Reducer.workingId].subinfo[3]._id)
    console.log(this.props.row.id_sub2)


    fetch('/update-sub2/id', {
          method: 'POST',
          headers: {
          Accept: 'application/json',
                  'Content-Type': 'application/json',
                  },
          body: JSON.stringify({sub2_id: this.props.row._id , 
            date_sub2: this.refs.Sub2Datum.value, 
            state_sub2: this.props.row.state_sub2 , 
            sub_id: this.props.Reducer.custommers[this.props.Reducer.workingId].subinfo[3]._id,
            id_sub2: this.props.row.id_sub2
             }),
            })
    this.props.SaveSub2(this.props.index, this.refs.Sub2Datum.value)

  }

  buttony(){
    if (this.props.Reducer.isEditting && this.props.index == this.props.Reducer.workingSub2) {
      return(   <div className="text-center" >
                <Button bsStyle="success" style={wellStyles} onClick={this.handleSaveSub2.bind(this)} >Save</Button>
                <Button bsStyle="warning" style={wellStyles} onClick={this.handleEdit.bind(this)} >Cancel</Button>
                </div>)
    } 
    return(     <div className="text-center" >
                <Button bsStyle="success" style={wellStyles} onClick={this.handleEdit.bind(this)}>Edit</Button>
                </div>)
  }

  renderRow(){
    console.log("this.props.row")
    console.log(this.props.row)
    var curr = new Date();
    curr.setDate(curr.getDate() + 3);
    var date = curr.toISOString().substr(0,10);
    var dateRedux = curr.toISOString();
    console.log("curr")
    console.log(curr)
    console.log("date")
    console.log(date)
    console.log("date no short")
    console.log(dateRedux)
    if (this.props.Reducer.isEditting && this.props.index == this.props.Reducer.workingSub2) {
      return(
                <tr>
                <th>{this.props.row.name_sub2}</th>
                <th><input type="date" ref="Sub2Datum" defaultValue={this.props.row.date_sub2}/></th>
                <th onClick={this.handleChange.bind(this)} >{this.checkHotovo()} </th>
                <th> {this.buttony()} </th>
                </tr>
               )
    }
    return(
                <tr>
                <th>{this.props.row.name_sub2}</th>
                <th>{this.props.row.date_sub2}</th>
                <th>{this.checkHotovo()} </th>
                <th> {this.buttony()} </th>
                </tr>                
               )
  }

  render() { 
    var curr = new Date();
    curr.setDate(curr.getDate() + 3);
    var date = curr.toISOString().substr(0,10);
    console.log("curr")
    console.log(curr)
    console.log("date")
    console.log(date)
    return (
            <tbody>
              {this.renderRow()}
            </tbody>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  const { Show, Edit2, ChangeSub2, SaveSub2 } = bindActionCreators(ProductActions, dispatch)
    return {
      Show, Edit2, ChangeSub2, SaveSub2
    }
}


const mapStateToProps = (state) => {
    return state;
}

const DefaultApp4 = connect(
        mapStateToProps,
        mapDispatchToProps
)(Sub2Row)

export default DefaultApp4;
