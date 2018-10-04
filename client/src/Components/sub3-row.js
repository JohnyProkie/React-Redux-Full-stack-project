import React, { Component } from 'react';
import _ from 'lodash';
import { Grid , Row , Col , Image, Table, Button, Glyphicon } from 'react-bootstrap';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import {Edit2, ChangeSub3, SaveSub3 , Sub3 } from '../Actions/actions'
import * as ProductActions from '../Actions/actions' 



const wellStyles = { width: 80, margin: 2 };
const wellStyles2 = { width: 150, margin: 0, float: "left" };

class Sub3Row extends Component {

handleEdit(){
  console.log('handle Edit DDDDDDDDDDD')
  console.log(this.props)
    this.props.Edit2(this.props.index)
  }



checkHotovo(){
  if (this.props.row.state_sub3) {
    return(<Button bsStyle="success" ><Glyphicon glyph="glyphicon glyphicon-ok" /> Done </ Button>)
  }
  return(<Button bsStyle="danger" ><Glyphicon glyph="glyphicon glyphicon-remove" /> In Progress </ Button>)
}
//

  handleChange(){
  	console.log("Je to spravny index?")
  	console.log(this.props)
   this.props.ChangeSub3(this.props.index)
  }

  handleSaveSub3(){

  	console.log("Ukladame spravne? this.props")
  	console.log(this.props)

    fetch('/update-sub3/id', {
          method: 'POST',
          headers: {
          Accept: 'application/json',
                  'Content-Type': 'application/json',
                  },
          body: JSON.stringify({sub3_id: this.props.row._id , 
            date_sub3: this.refs.Sub3Datum.value,  
            state_sub3: this.props.row.state_sub3 , 
            sub_id: this.props.Reducer.custommers[this.props.Reducer.workingId].subinfo[5]._id,
            id_sub3: this.props.row.id_sub3
             }),
            })

    this.props.SaveSub3(this.props.index, this.refs.Sub3Datum.value)

  }

  buttony(){
    if (this.props.Reducer.isEditting && this.props.index == this.props.Reducer.workingSub2) {
      return(   <div className="text-center" >
                <Button bsStyle="success" style={wellStyles} onClick={this.handleSaveSub3.bind(this)} ><Glyphicon glyph="glyphicon glyphicon-floppy-disk" /> Save </Button>
                <Button bsStyle="warning" style={wellStyles} onClick={this.handleEdit.bind(this)} ><Glyphicon glyph="glyphicon glyphicon-pause" /> Cancel </Button>
                </div>)
    } 
    return(     <div className="text-center" >
                <Button bsStyle="success" style={wellStyles} onClick={this.handleEdit.bind(this)}><Glyphicon glyph="glyphicon glyphicon-pencil"/> Edit </Button>
                </div>)
  }



  renderRow(){
    var curr = new Date();
    curr.setDate(curr.getDate() + 3);
    var date = curr.toISOString().substr(0,10);
    var dateRedux = curr.toISOString();
    if (this.props.Reducer.isEditting && this.props.index == this.props.Reducer.workingSub2) {
      return(

                <tr>
                <th>{this.props.row.name_sub3}</th>
                <th><input type="date" ref="Sub3Datum" defaultValue={this.props.row.date_sub3}/></th>
                <th onClick={this.handleChange.bind(this)} >{this.checkHotovo()} </th>
                <th> {this.buttony()} </th>
                </tr>
               )
    }
    return(
                <tr>
                <th>{this.props.row.name_sub3}</th>
                <th>{this.props.row.date_sub3}</th>
                <th>{this.checkHotovo()} </th>
                <th> {this.buttony()} </th>
                </tr>                
               )
  }

  render() { 
    var curr = new Date();
    curr.setDate(curr.getDate() + 3);
    var date = curr.toISOString().substr(0,10);
    return (
            <tbody>
              {this.renderRow()}
            </tbody>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  const { Edit2, ChangeSub3, SaveSub3, Sub3 } = bindActionCreators(ProductActions, dispatch)
    return {
     	 Edit2, ChangeSub3, SaveSub3, Sub3
    }
}


const mapStateToProps = (state) => {
    return state;
}

const DefaultApp4 = connect(
        mapStateToProps,
        mapDispatchToProps
)(Sub3Row)

export default DefaultApp4;
