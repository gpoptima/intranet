import { request } from './_request';

export const getData = () => {
		
	return (dispatch,getState) => {
	    
	    dispatch({ type: 'LOADING_AUTOS' });
        
        const user = JSON.parse(localStorage.getItem('@@auth_user'));
        console.log(user)
		
		request
			.get('auto',{headers:{'Authorization':`Bearer ${user.accessToken}`}})
			.then((response) => {
				
				let data = response.data;

				if (!data.error) {
					
					dispatch({ type: 'DATA_AUTOS',payload:data.result });
					
				} else {
					dispatch({
						type: 'ERROR_AUTOS',
						payload: data.message,
						code: data.code
					});
				}
			})
			.catch((e) =>
				dispatch({
					type: 'ERROR_AUTOS',
					payload: e.message,
					code: typeof e.response !== 'undefined' ? e.response.code : 0
				})
			);
 		
		}
};