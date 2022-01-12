const initialState =
 {  
    loading: false, 
    error:false,
    message:'',
    data:[]
 }

export default (state = initialState, action) => {
    switch (action.type) {
        case 'ERROR_AUTOS':
            return { ...state,message:action.payload,loading:false,error:true};
        case 'LOADING_AUTOS':
            return { ...state,message:action.payload,loading:true,error:false};
        case 'DATA_AUTOS':
            return { ...state,message:'',loading:false,error:false,data:action.payload};
        default:
    }
    return state;
}
