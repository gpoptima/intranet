const initialState =
 {  
    loading: false, 
    error:false,
    message:'',
    data:[]
 }

export default (state = initialState, action) => {
    switch (action.type) {
        case 'LOGOUT_APP':
            return { ...state};
        default:
    }
    return state;
}
