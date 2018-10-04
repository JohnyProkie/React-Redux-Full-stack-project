// Going to SUB Menu -------

export const Sub = (id) => ({
	type: 'SUB',
	payload: " ",
	id
})

export const Sub2 = () => ({
	type: 'SUB2',
	payload: " ",
})

export const Sub3 = () => ({
	type: 'SUB3',
	payload: " ",
})

//EDITTING ---------

export const Edit0 = (indx) => ({
	type: 'EDIT0',
	indx,
})

export const Edit = (indx) => ({
	type: 'EDIT',
	payload: " ",
	indx,
})

export const Edit2 = (indx) => ({
	type: 'EDIT2',
	payload: " ",
	indx,
})


//Going BACK ---------

export const BackMain = () => ({
	type: 'BACKMAIN',
	payload: " ",
})


export const BackSub = () => ({
	type: 'BACKSUB',
	payload: " ",
})

export const BackSub2 = () => ({
	type: 'BACKSUB2',
	payload: " ",
})

// Change of state on each level --------

export const ChangeMain = (indx) => ({
	type: 'CHANGEMAIN',
	payload: " ",
	indx
})

export const ChangeSub = (indx) => ({
	type: 'CHANGESUB',
	payload: " ",
	indx
})

export const ChangeSub2 = (indx) => ({
	type: 'CHANGESUB2',
	payload: " ",
	indx
})

export const ChangeSub3 = (indx) => ({
	type: 'CHANGESUB3',
	payload: " ",
	indx
})

// SAVE new data about for the row ---------

export const SaveMain = (indx, MainName, MainDate, MainPoznakma) => ({
	type: 'SAVEMAIN',
	payload: " ",
	indx,
	MainName,
	MainDate,
	MainPoznakma,
})

export const SaveSub = (indx, SubDatum, SubInfo) => ({
	type: 'SAVESUB',
	payload: " ",
	indx,
	SubDatum,
	SubInfo
})

export const SaveSub2 = (indx, Sub2Datum) => ({
	type: 'SAVESUB2',
	payload: " ",
	indx,
	Sub2Datum
})

export const SaveSub3 = (indx, Sub3Datum) => ({
	type: 'SAVESUB3',
	payload: " ",
	indx,
	Sub3Datum
})

// Press Login in left top corner ------

export const BackLogin = () => ({
	type: 'BACKLOGIN'
})

// Load data to redux --------

export const DataToRedux = (data) => ({
	type: 'DATATOREDUX',
	payload: data,
	data
})

// Delete and Save (only in Main level) ------

export const Delete = () => ({
	type: 'DELETE',
	payload: " ",
})

export const SavePoDelete = () => ({
	type: 'SAVEPODELETE',
	payload: " ",
})

