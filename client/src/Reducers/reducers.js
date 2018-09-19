import * as types from '../Actions/actions'

const initialState = {
      custommers: [ 
          {	id: 1, 
          	name: 'Cekejte na nacteni dat z databaze', 
          	date: 2018, 
          	poznamka: "cekej", 
	        subinfo: [ 
	          	 {
	          		name: 'nabidka',
	         		datum: 2017,
	         		info: "Nabidka podána",
	         		hotovo: true,	
	          			},
	          	 {
	          		name: 'hlasenka',
	         		datum: 2019,
	          		info: "Zatim nic",
	          		hotovo: false,	
	          			},
	          	 {
	          		name: 'Zadost',
	         		datum: 2017,
	         		info: "Cernosi v lodi",
	         		hotovo: true,	
	          			},	
	          	{
	          		name: 'Podání žádosti',
	         		datum: 2017,
	         		info: "Mrkni jak jsme na tom",
	         		hotovo: false,	
	         		subinfo: [
	         			{name: 'Kompletace náležitostí', datum: 2009, hotovo: false},
	         			{name: 'Podání žádosti', datum: 2009, hotovo: true},
	         			{name: 'Žádost o nostrifikaci', datum: 2009, hotovo: false},
	         			{name: 'Potvrzení nostrifikace', datum: 2009, hotovo: true},
	         			{name: 'Rozhoduje se', datum: 2009, hotovo: false},
	         			{name: 'Rozhodnuto', datum: 2009, hotovo: true},
	         		]
	          			},          				
	          			], 
          		},
            ],
      working: false,
      rowMainShow: true,
      rowSubShow: false,
      rowSub2Show: false,
      workingId: 0,
      workingSub: 0,
      workingSub2: 0,
      isEditting: false,
      refreshVar: true,
}

const Reducer = (state , action) => {
	if (typeof state === "undefined") {
    return initialState;
    }

	switch(action.type){
		case 'SUB':{
			console.log("SHOW Reducer")
			let a = Object.assign({}, {...state})
			let b = Object.assign({}, {...state})
			b.working = true
			b.rowMainShow = false
			b.rowSubShow = true
			b.rowSub2Show = false
			b.workingId = action.id
			return b
		} 
		case 'EDIT0':{
			console.log("Edit0 Reducer")
			let a = Object.assign({}, {...state})
			let b = Object.assign({}, {...state})
			b.isEditting = !a.isEditting
			b.workingId = action.indx
			return b
		} 
		case 'EDIT':{
			console.log("EDIT Reducer")
			let a = Object.assign({}, {...state})
			let b = Object.assign({}, {...state})
			console.log(action.indx)
			b.isEditting = !a.isEditting
			b.workingSub = action.indx
			return b
		} 
		case 'EDIT2':{
			console.log("EDIT Reducer")
			let a = Object.assign({}, {...state})
			let b = Object.assign({}, {...state})
			b.isEditting = !a.isEditting
			b.workingSub2 = action.indx
			return b
		} 
		case 'SUB2':{
			console.log("SUB2 REDUCER")
			let b = Object.assign({}, {...state})
			b.rowMainShow = false
			b.rowSubShow = false
			b.rowSub2Show = true
			b.isEditting = false
			return b
		}
		case 'BACKSUB':{
			console.log("BACKSUB REDUCER")
			let a = Object.assign({}, {...state})
			let b = Object.assign({}, {...state})
			b.rowMainShow = false
			b.rowSubShow = true
			b.rowSub2Show = false
			b.isEditting = false
			return b
		}
		case 'BACKMAIN':{
			console.log("BACKMAIN REDUCER")
			let a = Object.assign({}, {...state})
			let b = Object.assign({}, {...state})
			b.rowMainShow = true
			b.rowSubShow = false
			b.rowSub2Show = false
			b.isEditting = false
			return b
		}
		case 'CHANGEMAIN':{
			console.log("CHANGE MAIN REDUCER")
			let a = Object.assign({}, {...state})
			let b = Object.assign({}, {...state})
			console.log(b.custommers[a.workingId].state)
			b.custommers[a.workingId].state = !a.custommers[a.workingId].state
			return b
		}
		case 'CHANGESUB':{
			console.log("CHANGE SUB REDUCER")
			let a = Object.assign({}, {...state})
			console.log(a.custommers[a.workingId].subinfo[action.indx].state_sub)
			let b = Object.assign({}, {...state})
			b.custommers[a.workingId].subinfo[action.indx].state_sub = !a.custommers[a.workingId].subinfo[action.indx].state_sub
			return b
		}
		case 'CHANGESUB2':{
			console.log("CHANGE SUB2 REDUCER")
			let a = Object.assign({}, {...state})
			console.log(a.custommers[a.workingId].subinfo[3].subinfo_sub[action.indx].state_sub2)
			let b = Object.assign({}, {...state})
			b.custommers[a.workingId].subinfo[3].subinfo_sub[action.indx].state_sub2 = !a.custommers[a.workingId].subinfo[3].subinfo_sub[action.indx].state_sub2
			return b
		}
		case 'SAVEMAIN':{
			console.log("SAVE MAIN REDUCER_____1_______")
			console.log(action.MainName)
			console.log(action.MainDate)
			console.log(action.MainPoznakma)
			let a = Object.assign({}, {...state})
			let b = Object.assign({}, {...state})
			b.custommers[action.indx].name = action.MainName
			b.custommers[action.indx].date = action.MainDate
			b.custommers[action.indx].poznamka = action.MainPoznakma
			b.isEditting = false
			return b
		}
		case 'SAVESUB':{
			console.log("SAVE SUB REDUCER")
			let a = Object.assign({}, {...state})
			let b = Object.assign({}, {...state})
			b.custommers[a.workingId].subinfo[action.indx].date_sub = action.SubDatum
			b.custommers[a.workingId].subinfo[action.indx].poznamka_sub = action.SubInfo
			return b
		}
		case 'SAVESUB2':{
			console.log("SAVE SUB-2 REDUCER")
			let a = Object.assign({}, {...state})
			let b = Object.assign({}, {...state})
			b.custommers[a.workingId].subinfo[3].subinfo_sub[action.indx].date_sub2 = action.Sub2Datum
			b.isEditting = !a.isEditting
			return b
		}
		case 'BACKLOGIN':{
			console.log("Back Login REDUCER")
			let a = Object.assign({}, {...state})
			let b = Object.assign({}, {...state})
			b.working = false
			b.isEditting = false
			b.rowMainShow = true
			b.rowSubShow = false
			b.rowSub2Show = false
			return b
		}
		case 'DATATOREDUX':{
			console.log("Data to redux - REDUCER")
			let a = Object.assign({}, {...state})
			let b = Object.assign({}, {...state})
			console.log("a")
			console.log(a)
			b.custommers = action.data.users.docs
			return b
		}
			case 'SAVEPODELETE':{
			console.log("SAVE PO DELETE REDUCER")
			let a = Object.assign({}, {...state})
			let b = Object.assign({}, {...state})
			b.isEditting = !a.isEditting
			b.workingId = 0
			return b
		}

}
}

export default Reducer;