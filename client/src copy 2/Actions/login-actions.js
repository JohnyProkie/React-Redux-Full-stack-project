import axios from 'axios'

export function userSignupRequest(userData) {
	return dispatch => {
		return axios.post('http://localhost:3001/api/users', userData);

		//fetch('http://localhost:3001/api/users', { method: 'POST', body: JSON.stringify( userData) });

		//axios.post('/api/users', userData);
	}
}

