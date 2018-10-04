import React, { Component } from 'react'
import _ from 'lodash'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { Button, Glyphicon } from 'react-bootstrap'

import { Edit, Sub2, ChangeSub, SaveSub } from '../Actions/actions'
import * as ProductActions from '../Actions/actions' 


const wellStyles = { width: 80, margin: 2 };
const wellStyles2 = { width: 170, margin: 0, float: "left" };

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
    if (this.props.index === 5) {
      return(<div className="text-center" onClick={this.handleSub2.bind(this)} > <Button bsStyle="info" style={wellStyles2} ><Glyphicon glyph="glyphicon glyphicon-forward" /> Podání žádosti <Glyphicon glyph="glyphicon glyphicon-forward" /> </Button> </div>)
    }
    return('')
  }


checkHotovo(){

  if (this.props.index == 5 ) {

      console.log(this.props.classe.subinfo_sub[0].state_sub2)
      console.log(this.props.classe.subinfo_sub[1].state_sub2)
    if (this.props.classe.subinfo_sub[0].state_sub2 == true && this.props.classe.subinfo_sub[1].state_sub2 == true && this.props.classe.subinfo_sub[2].state_sub2 == true && this.props.classe.subinfo_sub[3].state_sub2 == true && this.props.classe.subinfo_sub[4].state_sub2 == true && this.props.classe.subinfo_sub[5].state_sub2 == true) {
        return(<Button bsStyle="success" ><Glyphicon glyph="glyphicon glyphicon-ok" /> Done whole Podání žádosti </ Button>)
    } else {
      return(<Button bsStyle="danger" > <Glyphicon glyph="glyphicon glyphicon-remove" />Podání žádosti is In Progress </ Button>)
    }
  } else{
        if (this.props.classe.state_sub) {
          return(<Button bsStyle="success" ><Glyphicon glyph="glyphicon glyphicon-ok" /> Done </ Button>)
        }
        return(<Button bsStyle="danger" > <Glyphicon glyph="glyphicon glyphicon-remove" /> In Progress </ Button>)
      }
  }

//

  buttony(){
    if (this.props.Reducer.isEditting && this.props.index == this.props.Reducer.workingSub) {
      return(   <div className="text-center" >
                <Button bsStyle="success" style={wellStyles} onClick={this.handleSaveSub.bind(this)} ><Glyphicon glyph="glyphicon glyphicon-floppy-disk" /> Save</Button>
                <Button bsStyle="warning" style={wellStyles} onClick={this.handleEdit.bind(this)} > <Glyphicon glyph="glyphicon glyphicon-pause" /> Cancel</Button>
                </div>)
    } 
    return(     <div className="text-center" >
                <Button bsStyle="success" style={wellStyles} onClick={this.handleEdit.bind(this)}> <Glyphicon glyph="glyphicon glyphicon-pencil"/> Edit</Button>
                </div>)
  }
//
  renderRow(){
    if (this.props.Reducer.isEditting && this.props.index == this.props.Reducer.workingSub) {
      return(
                <tr>
                <th className={this.props.classe.priradit_sub ? 'atlas' : 'custommer'} >{this.props.classe.name_sub} {this.proklikSub()}</th>
                <th className={this.props.classe.priradit_sub ? 'atlas' : 'custommer'} ><input ref="SubDatum" type="date" defaultValue={this.props.classe.date_sub}/></th>
                <th className={this.props.classe.priradit_sub ? 'atlas' : 'custommer'} ><input ref="SubInfo" type="text" defaultValue={this.props.classe.poznamka_sub}/></th>
                <th className={this.props.classe.priradit_sub ? 'atlas' : 'custommer'} onClick={this.handleChange.bind(this)} >{this.checkHotovo()}</th>
                <th className={this.props.classe.priradit_sub ? 'atlas' : 'custommer'} >{this.buttony()}</th>
                </tr>

               )
    }
    return(
                <tr>
                <th className={this.props.classe.priradit_sub ? 'atlas' : 'custommer'}  >{this.props.classe.name_sub} {this.proklikSub()}</th>
                <th className={this.props.classe.priradit_sub ? 'atlas' : 'custommer'} >{this.props.classe.date_sub} { (this.props.index == 7) ? <Glyphicon glyph="glyphicon glyphicon-send" /> : ' '}</th>
                <th className={this.props.classe.priradit_sub ? 'atlas' : 'custommer'} >{this.props.classe.poznamka_sub} </th>
                <th className={this.props.classe.priradit_sub ? 'atlas' : 'custommer'} >{this.checkHotovo()}</th>
                <th className={this.props.classe.priradit_sub ? 'atlas' : 'custommer'} >{this.buttony()}</th>
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
