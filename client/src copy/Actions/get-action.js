import axios from 'axios'

export function getAction() {
	return dispatch => {
		return axios.get('/db');

	}
}

