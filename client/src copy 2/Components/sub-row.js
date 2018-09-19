import React, { Component } from 'react';
import _ from 'lodash';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { Edit, Sub2, ChangeSub, SaveSub } from '../Actions/actions'
import * as ProductActions from '../Actions/actions' 
import { Button } from 'react-bootstrap';


const wellStyles = { width: 80, margin: 2 };

class RowSubRow extends Component {


  handleEdit(){
    console.log("handle Edit props")
    console.log(this.props.Reducer.workingSub)
    this.props.Edit(this.props.index)
  }

  handleSub2(){
    this.props.Sub2()
  }

  handleChange(){
    this.props.ChangeSub(this.props.index)
  }

  handleSaveSub(){
    console.log('ref Info props_______XXXXX______SSSS______')
    console.log(this.props)
    console.log(this.props.classe.state_sub)
    console.log(this.props.Reducer.custommers[this.props.Reducer.workingId]._id)
    this.props.SaveSub(this.props.index, this.refs.SubDatum.value, this.refs.SubInfo.value, this.props.classe.state_sub )

    fetch('/update-sub/id', {
          method: 'POST',
          headers: {
          Accept: 'application/json',
                  'Content-Type': 'application/json',
                  },
          body: JSON.stringify({sub_id: this.props.classe._id , date_sub: this.refs.SubDatum.value, poznamka_sub: this.refs.SubInfo.value, state_sub: this.props.classe.state_sub }),
            })
    this.props.Edit(this.props.index)
  }


  proklikSub(){
    if (this.props.classe.subinfo_sub === []) {
      return('')
    }
    return(<div className="Arrow-inside" onClick={this.handleSub2.bind(this)} > >> </div>)
  }


checkHotovo(){
  if (this.props.classe.state_sub) {
    return(<Button bsStyle="success" > Hotovo </ Button>)
  }
  return(<Button bsStyle="danger" > Chybí </ Button>)
}
//
  buttony(){
    if (this.props.Reducer.isEditting && this.props.index == this.props.Reducer.workingSub) {
      return(   <div className="text-center" >
                <Button bsStyle="success" style={wellStyles} onClick={this.handleSaveSub.bind(this)} >Save</Button>
                <Button bsStyle="warning" style={wellStyles} onClick={this.handleEdit.bind(this)} >Cancel</Button>
                </div>)
    } 
    return(     <div className="text-center" >
                <Button bsStyle="success" style={wellStyles} onClick={this.handleEdit.bind(this)}>Edit</Button>
                </div>)
  }
//
  renderRow(){
    if (this.props.Reducer.isEditting && this.props.index == this.props.Reducer.workingSub) {
      return(
                <tr>
                <th>{this.props.classe.name_sub}</th>
                <th><input ref="SubDatum" type="date" defaultValue={this.props.classe.date_sub}/></th>
                <th><input ref="SubInfo" type="text" defaultValue={this.props.classe.poznamka_sub}/></th>
                <th onClick={this.handleChange.bind(this)} >{this.checkHotovo()}</th>
                <th>{this.buttony()}</th>
                <th>{this.proklikSub()}</th>
                </tr>

               )
    }
    return(
                <tr>
                <th>{this.props.classe.name_sub}</th>
                <th>{this.props.classe.date_sub}</th>
                <th>{this.props.classe.poznamka_sub}</th>
                <th>{this.checkHotovo()}</th>
                <th>{this.buttony()}</th>
                <th>{this.proklikSub()}</th>
                </tr>                
               )
  }

  render() {
    console.log("this.props SSSSSSSSSSSS")
    console.log(this.props)
    
    return (
          <tbody>
                {this.renderRow()}
          </tbody>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  const { Edit, Sub2, ChangeSub, SaveSub } = bindActionCreators(ProductActions, dispatch)
    return {
     Edit, Sub2, ChangeSub, SaveSub
    }
}


const mapStateToProps = (state) => {
    return state;
}

const DefaultApp3 = connect(
        mapStateToProps,
        mapDispatchToProps
)(RowSubRow)

export default DefaultApp3;
