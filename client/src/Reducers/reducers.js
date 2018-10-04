import * as types from '../Actions/actions'

const initialState = {
      custommers: [ 
          { name: 'Wait for data from DB to be loaded', 
          	date: 2018, 
          	state: false,
          	poznamka: "cekej", 
	        subinfo: [ 
	          	 {
	          		name_sub: 'nabidka',
	         		date_sub: "2017-09-09",
	         		poznamka_sub: "Nabidka podána",
	         		state_sub: true,	
	          			},
	          	 {
	          		name_sub: 'nabidka',
	         		date_sub: "2017-09-09",
	         		poznamka_sub: "Nabidka podána",
	         		state_sub: true,
	          			},
	          	 {
	          		name_sub: 'nabidka',
	         		date_sub: "2017-09-09",
	         		poznamka_sub: "Nabidka podána",
	         		state_sub: true,
	          			},	
	          	{
	          		name_sub: 'nabidka',
	         		date_sub: "2017-09-09",
	         		poznamka_sub: "Nabidka podána",
	         		state_sub: true,
	         		subinfo_sub: [ ]
	          			},  
	          	{
	          		name_sub: 'nabidka X',
	         		date_sub: "2017-09-09",
	         		poznamka_sub: "Nabidka podána",
	         		state_sub: true,	
	          			}, 
	          	{
	          		name_sub: 'nabidka XZ',
	         		date_sub: "2017-09-09",
	         		poznamka_sub: "Nabidka podána",
	         		state_sub: true,
	         		subinfo_sub: [
	         			{name_sub2: 'Kompletace náležitostí PUVODNI', date_sub2: "2009-09-01", state_sub2: false,
	         			subinfo_sub2: [
		         			{name_sub3: 'SUB 3Podání žádosti PUVODNI', date_sub3: "2009-09-01", state_sub3: true},
		         			{name_sub3: 'Žádost o nostrifikaci PUVODNI', date_sub3: "2009-09-01", state_sub3: false},
		         			{name_sub3: 'Potvrzení nostrifikace PUVODNI', date_sub3: "2009-09-01", state_sub3: true},
		         			{name_sub3: 'Rozhoduje se PUVODNI', date_sub3: "2009-09-01", state_sub3: false},
		         			{name_sub3: 'Rozhodnuto PUVODNI', date_sub3: "2009-09-01", state_sub3: true},
	         			]

	         		},
	         			{name_sub2: 'Podání žádosti PUVODNI', date_sub2: "2009-09-01", state_sub2: true},
	         			{name_sub2: 'Žádost o nostrifikaci PUVODNI', date_sub2: "2009-09-01", state_sub2: false},
	         			{name_sub2: 'Potvrzení nostrifikace PUVODNI', date_sub2: "2009-09-01", state_sub2: true},
	         			{name_sub2: 'Rozhoduje se PUVODNI', date_sub2: "2009-09-01", state_sub2: false},
	         			{name_sub2: 'Rozhodnuto PUVODNI', date_sub2: "2009-09-01", state_sub2: true},
	         		]	
	          			},       				
	          			], 
          		},
            ],
      working: false,
      rowMainShow: true,
      rowSubShow: false,
      rowSub2Show: false,
      rowSub3Show: false,
      workingId: 0,
      workingSub: 0,
      workingSub2: 0,
      isEditting: false,
      refreshVar: true,
      level: 1,
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
			b.level = 2
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
			b.level = 3
			return b
		}
		case 'SUB3':{
			console.log("SUB3 REDUCER")
			let b = Object.assign({}, {...state})
			b.rowMainShow = false
			b.rowSubShow = false
			b.rowSub2Show = false
			b.rowSub3Show = true
			b.isEditting = false
			b.level = 4
			return b
		}

		case 'BACKMAIN':{
			console.log("BACKMAIN REDUCER")
			let b = Object.assign({}, {...state})
			b.rowMainShow = true
			b.rowSubShow = false
			b.rowSub2Show = false
			b.rowSub3Show = false
			b.isEditting = false
			b.level = 1
			b.workingId = 0
			return b
		}
		case 'BACKSUB':{
			console.log("BACKSUB REDUCER")
			let b = Object.assign({}, {...state})
			b.rowMainShow = false
			b.rowSubShow = true
			b.rowSub2Show = false
			b.rowSub3Show = false
			b.isEditting = false
			b.level = 2
			return b
		}

		case 'BACKSUB2':{
			console.log("BACKSUB 2 REDUCER")
			let b = Object.assign({}, {...state})
			b.rowMainShow = false
			b.rowSubShow = false
			b.rowSub2Show = true
			b.rowSub3Show = false
			b.isEditting = false
			b.level = 3
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
			console.log(action.indx)
			let a = Object.assign({}, {...state})
			console.log(a.workingId)
			console.log(a.custommers[a.workingId].subinfo[5].subinfo_sub[action.indx].state_sub2)
			let b = Object.assign({}, {...state})
			b.custommers[a.workingId].subinfo[5].subinfo_sub[action.indx].state_sub2 = !a.custommers[a.workingId].subinfo[5].subinfo_sub[action.indx].state_sub2
			return b
		}

		case 'CHANGESUB3':{
			console.log("CHANGE SUB3 REDUCER")
			let a = Object.assign({}, {...state})
			console.log(a.custommers[a.workingId].subinfo[5].subinfo_sub[0].subinfo_sub2[action.indx].state_sub3)
			let b = Object.assign({}, {...state})
			b.custommers[a.workingId].subinfo[5].subinfo_sub[0].subinfo_sub2[action.indx].state_sub3 = !a.custommers[a.workingId].subinfo[5].subinfo_sub[0].subinfo_sub2[action.indx].state_sub3
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
			b.custommers[a.workingId].subinfo[5].subinfo_sub[action.indx].date_sub2 = action.Sub2Datum
			b.isEditting = !a.isEditting
			return b
		}
		case 'SAVESUB3':{
			console.log("SAVE SUB-3 REDUCER")
			let a = Object.assign({}, {...state})
			let b = Object.assign({}, {...state})
			b.custommers[a.workingId].subinfo[5].subinfo_sub[0].subinfo_sub2[action.indx].date_sub3 = action.Sub3Datum
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
			b.rowSub3Show = false
			b.level = 1
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