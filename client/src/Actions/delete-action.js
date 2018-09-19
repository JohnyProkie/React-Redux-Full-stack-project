import axios from 'axios'

export function custommerDelete(custommer_id) {
	return dispatch => {
		return axios.post('/delete/id', custommer_id);
	}
}

