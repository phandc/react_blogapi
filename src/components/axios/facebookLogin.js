import axios from 'axios';
import { useHistory } from 'react-router-dom';

const facebookLogin = (accesstoken) => {
	console.log(accesstoken);
    console.log("Come here!")
	axios
		.post('http://127.0.0.1:8000/auth/convert-token', {
			token: accesstoken,
			backend: 'facebook',
			grant_type: 'convert_token',
			client_id: 'ZVEJyiV0b5DxO7gJpfYPVn3KBIDFNjMaKUndB06k',
			client_secret: 'lKPDwjZRrAupHSHG6eky6gDQYOcR3cWQdfqbACSCIJ0gfbmVj6DgTnNs9W9dlrlx9oZeMENFQO0K7kyNrodJ55F7BO0csxmKm1iD1bKA3BIlGEn9ncsM5c52WibqN81P',
		})
		.then((res) => {
			localStorage.setItem('access_token', res.data.access_token);
			localStorage.setItem('refresh_token', res.data.refresh_token);
		});
};

export default facebookLogin;