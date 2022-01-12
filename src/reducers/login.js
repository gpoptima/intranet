const initialState =
 {  
    loading: false, 
    authenticated: false, 
    error:false,
    message:''
 }

export default (state = initialState, action) => {
    switch (action.type) {
        case 'SIGNIN_FAILURE_LOGIN':
            return { ...state,message:action.payload,loading:false,error:true,authenticated:false};
        case 'SIGNIN_LOADING_LOGIN':
            return { ...state,message:action.payload,loading:true,error:false,authenticated:false};
        case 'AUTH_USER_LOGIN':
            return { ...state,message:action.payload,loading:false,error:false,authenticated:true};
        default:
    }
    return state;
}
