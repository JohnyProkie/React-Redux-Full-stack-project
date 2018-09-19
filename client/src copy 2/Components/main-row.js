import React, { Component } from 'react';
import _ from 'lodash';
import { Grid , Row , Col , Image, Table, Button } from 'react-bootstrap';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import {Sub, Edit0, SaveMain, ChangeMain } from '../Actions/actions'
import * as ProductActions from '../Actions/actions' 
import { custommerDelete } from '../Actions/delete-action'
import axios from 'axios'


const wellStyles = { width: 80, margin: 2 };

class MainRow extends Component {
        constructor(props) {
    super(props);
  }

  handleChange(){
    this.props.ChangeMain()
  }

//

  handleEdit(){
    console.log("handle Edit props")
    console.log(this.props.Reducer.workingId)
    this.props.Edit0(this.props.index)
  }

  handleDelete(){
    console.log("handle Delete props")
    console.log(this.props)
    this.props.props.Del(this.props.classe._id)
  }

  handleS(){
    {this.props.SaveMain(this.props.index, this.refs.nameUpdate.value, this.refs.dateUpdate.value, this.refs.poznamkaUpdate.value)}
  }

  handleSave(){
    console.log("handleSave refs value????????????")
    console.log(this.props)
    fetch('/update/id', {
          method: 'POST',
          headers: {
          Accept: 'application/json',
                  'Content-Type': 'application/json',
                  },
          body: JSON.stringify({update_id: this.props.classe._id, name: this.refs.nameUpdate.value, date: this.refs.dateUpdate.value, poznamka: this.refs.poznamkaUpdate.value, hotovo: this.props.classe.state }),
            })
    this.handleS()
  }


  buttony(){
    if (this.props.Reducer.isEditting && this.props.index == this.props.Reducer.workingId ) {
      return(   <div className="text-center" >
                <Button bsStyle="success" style={wellStyles} onClick={this.handleSave.bind(this)} >Save</Button>
                <Button bsStyle="warning" style={wellStyles} onClick={this.handleEdit.bind(this)} >Cancel</Button>
                <Button bsStyle="danger" style={wellStyles} onClick={this.handleDelete.bind(this)} >Delete</Button>
                </div>)
    } 
    return(     <div className="text-center" >
                <Button bsStyle="success" style={wellStyles} onClick={this.handleEdit.bind(this)}>Edit</Button>
                </div>)
  }
//
  handleClick(id){
   this.props.Sub(id);
  }
//
checkHotovo(){
  if (this.props.classe.state) {
    return(<Button bsStyle="success" > Hotovo </ Button>)
  }
  return(<Button bsStyle="danger" > Chybí </ Button>)
}

  renderRow(){
    if (this.props.Reducer.isEditting && this.props.index == this.props.Reducer.workingId) {
      return(
                <tr>
                <th>Edit</th>
                <th><input ref="nameUpdate" defaultValue={this.props.classe.name}/></th>
                <th onClick={this.handleChange.bind(this)}>{this.checkHotovo()}</th>
                <th><input ref="dateUpdate" type="date" defaultValue={this.props.classe.date}/></th>
                <th><input ref="poznamkaUpdate" defaultValue={this.props.classe.poznamka}/></th>
                <th>{this.buttony()}</th>
                </tr>
//
               )
    }
    return(
                <tr>
                <th onClick={this.handleClick.bind(this, this.props.index)} >{this.props.classe.id}</th>
                <th onClick={this.handleClick.bind(this, this.props.index)} >{this.props.classe.name}</th>
                <th onClick={this.handleClick.bind(this, this.props.index)} >{this.checkHotovo()}</th>
                <th onClick={this.handleClick.bind(this, this.props.index)} >{this.props.classe.date}</th>
                <th onClick={this.handleClick.bind(this, this.props.index)} >{this.props.classe.poznamka}</th>
                <th>{this.buttony()}</th>
                </tr>                
               )
  }

  render() {
    
    return (

              <tbody>
                {this.renderRow()}
              </tbody>

    );
  }
}
//
const mapDispatchToProps = (dispatch) => {
  const { Sub, Edit0, SaveMain, ChangeMain } = bindActionCreators(ProductActions, dispatch)
    return {
      Sub, Edit0, SaveMain, ChangeMain
    }
}

const mapDispatchToProps1 = (dispatch) => {
  bindActionCreators({custommerDelete}, dispatch)
}


const mapStateToProps = (state) => {
    return state;
}

const DefaultApp4 = connect(
        mapStateToProps,
        mapDispatchToProps
)(MainRow)

export default DefaultApp4;
