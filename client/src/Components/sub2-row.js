import React, { Component } from 'react';
import _ from 'lodash';
import { Grid , Row , Col , Image, Table, Button, Glyphicon } from 'react-bootstrap';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import {Show, Edit2, ChangeSub2, SaveSub2 , Sub3 } from '../Actions/actions'
import * as ProductActions from '../Actions/actions' 



const wellStyles = { width: 80, margin: 2 };
const wellStyles2 = { width: 200, margin: 0, float: "left" };

class Sub2Row extends Component {

handleEdit(){
  console.log('handle Edit DDDDDDDDDDD')
  console.log(this.props)
    this.props.Edit2(this.props.index)
  }



checkHotovo(){

  if (this.props.index == 0 ) {
    if (this.props.row.subinfo_sub2[0].state_sub3 == true && this.props.row.subinfo_sub2[1].state_sub3 == true && this.props.row.subinfo_sub2[2].state_sub3 == true && this.props.row.subinfo_sub2[3].state_sub3 == true && this.props.row.subinfo_sub2[4].state_sub3 == true && this.props.row.subinfo_sub2[5].state_sub3 == true && this.props.row.subinfo_sub2[6].state_sub3 == true) {
        return(<Button bsStyle="success" ><Glyphicon glyph="glyphicon glyphicon-ok" /> Done whole Podání žádosti </ Button>)
    } else {
      return(<Button bsStyle="danger" > <Glyphicon glyph="glyphicon glyphicon-remove" />Podání žádosti is In Progress </ Button>)
    }
  } else{
        if (this.props.row.state_sub2) {
          return(<Button bsStyle="success" ><Glyphicon glyph="glyphicon glyphicon-ok" /> Done </ Button>)
        }
        return(<Button bsStyle="danger" > <Glyphicon glyph="glyphicon glyphicon-remove" /> In Progress </ Button>)
      }
  }
//

  handleChange(){
   this.props.ChangeSub2(this.props.index)
  }

  handleSub3(){
    this.props.Sub3()
  }

  handleSaveSub2(){

    fetch('/update-sub2/id', {
          method: 'POST',
          headers: {
          Accept: 'application/json',
                  'Content-Type': 'application/json',
                  },
          body: JSON.stringify({sub2_id: this.props.row._id , 
            date_sub2: this.refs.Sub2Datum.value, 
            state_sub2: this.props.row.state_sub2 , 
            sub_id: this.props.Reducer.custommers[this.props.Reducer.workingId].subinfo[5]._id,
            id_sub2: this.props.row.id_sub2
             }),
            })
    this.props.SaveSub2(this.props.index, this.refs.Sub2Datum.value)

  }

  buttony(){
    if (this.props.Reducer.isEditting && this.props.index == this.props.Reducer.workingSub2) {
      return(   <div className="text-center" >
                <Button bsStyle="success" style={wellStyles} onClick={this.handleSaveSub2.bind(this)} ><Glyphicon glyph="glyphicon glyphicon-floppy-disk" /> Save </Button>
                <Button bsStyle="warning" style={wellStyles} onClick={this.handleEdit.bind(this)} ><Glyphicon glyph="glyphicon glyphicon-pause" /> Cancel </Button>
                </div>)
    } 
    return(     <div className="text-center" >
                <Button bsStyle="success" style={wellStyles} onClick={this.handleEdit.bind(this)}><Glyphicon glyph="glyphicon glyphicon-pencil"/> Edit </Button>
                </div>)
  }


  proklikSub(){
    if (this.props.index === 0) {
      return(<div className="text-center" onClick={this.handleSub3.bind(this)} > <Button bsStyle="info" style={wellStyles2} ><Glyphicon glyph="glyphicon glyphicon-forward" /> Kompletace náležitostí <Glyphicon glyph="glyphicon glyphicon-forward" /> </Button> </div>)
    }
    return('')
  }

  renderRow(){
    var curr = new Date();
    curr.setDate(curr.getDate() + 3);
    var date = curr.toISOString().substr(0,10);
    var dateRedux = curr.toISOString();
    if (this.props.Reducer.isEditting && this.props.index == this.props.Reducer.workingSub2) {
      return(

                <tr>
                <th>{this.props.row.name_sub2} {this.proklikSub()}</th>
                <th><input type="date" ref="Sub2Datum" defaultValue={this.props.row.date_sub2}/></th>
                <th onClick={this.handleChange.bind(this)} >{this.checkHotovo()} </th>
                <th> {this.buttony()} </th>
                </tr>
               )
    }
    return(
                <tr>
                <th>{this.props.row.name_sub2} {this.proklikSub()} </th>
                <th>{this.props.row.date_sub2} { (this.props.index == 3 || this.props.index == 4 ) ? <Glyphicon glyph="glyphicon glyphicon-send" /> : ' '}</th>
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
  const { Show, Edit2, ChangeSub2, SaveSub2, Sub3 } = bindActionCreators(ProductActions, dispatch)
    return {
      Show, Edit2, ChangeSub2, SaveSub2, Sub3
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
