export const logout = () => {
		
	return (dispatch,getState) => {
	    
	    dispatch({ type: 'LOGOUT_APP',code:-19});
  
	}
};