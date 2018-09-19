
export const Sub = (id) => ({
	type: 'SUB',
	payload: "message z pazload",
	id
})

export const Edit0 = (indx) => ({
	type: 'EDIT0',
	indx,
})

export const Edit = (indx) => ({
	type: 'EDIT',
	payload: "message z pazload",
	indx,
})

export const Edit2 = (indx) => ({
	type: 'EDIT2',
	payload: "message z pazload",
	indx,
})

export const Sub2 = () => ({
	type: 'SUB2',
	payload: "message z pazload",
})

export const BackSub = () => ({
	type: 'BACKSUB',
	payload: "message z pazload",
})

export const BackMain = () => ({
	type: 'BACKMAIN',
	payload: "message z pazload",
})

export const ChangeMain = (indx) => ({
	type: 'CHANGEMAIN',
	payload: "message z pazload",
	indx
})

export const ChangeSub = (indx) => ({
	type: 'CHANGESUB',
	payload: "message z pazload",
	indx
})

export const ChangeSub2 = (indx) => ({
	type: 'CHANGESUB2',
	payload: "message z pazload",
	indx
})

export const SaveMain = (indx, MainName, MainDate, MainPoznakma) => ({
	type: 'SAVEMAIN',
	payload: "message z pazload",
	indx,
	MainName,
	MainDate,
	MainPoznakma,
})

export const SaveSub = (indx, SubDatum, SubInfo) => ({
	type: 'SAVESUB',
	payload: "message z pazload",
	indx,
	SubDatum,
	SubInfo
})

export const SaveSub2 = (indx, Sub2Datum) => ({
	type: 'SAVESUB2',
	payload: "message z pazload",
	indx,
	Sub2Datum
})

export const BackLogin = () => ({
	type: 'BACKLOGIN'
})

export const DataToRedux = (data) => ({
	type: 'DATATOREDUX',
	payload: data,
	data
})

export const Delete = () => ({
	type: 'DELETE',
	payload: "message z pazload",
})

export const SavePoDelete = () => ({
	type: 'SAVEPODELETE',
	payload: "message z pazload",
})

