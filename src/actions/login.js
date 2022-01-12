import { request } from './_request';

export const signin = (values) => {
		
	return (dispatch,getState) => {
	    
	    dispatch({ type: 'SIGNIN_LOADING_LOGIN' });
        const {email,password} = values
		request
			.post('login',{}, {auth: {username: email,password: password}})
			.then((response) => {
				
				let data = response.data;

				if (!data.error && Object.entries(data.result).length!==0) {
					
					localStorage.setItem('@@auth_user', JSON.stringify(data.result));
					dispatch({ type: 'AUTH_USER_LOGIN' });
					
				} else {
					dispatch({
						type: 'SIGNIN_FAILURE_LOGIN',
						payload: data.message,
						code: data.code
					});
				}
			})
			.catch((e) =>
				dispatch({
					type: 'SIGNUP_FAILURE_LOGIN',
					payload: e.message,
					code: typeof e.response !== 'undefined' ? e.response.code : 0
				})
			);
 		
		}
};