import { START_CHANGE_PASSWORD,CHANGE_PASSWORD_SUCCESS,CHANGE_PASSWORD_FAILURE,RESET_CHANGE_PASSWORD } from '../Actions';

const initState = {
    is_changing : false,
    is_changing_success : false,
    is_changing_failure : false
}

export default function changePassword(state,action){

    switch(action.type){

        case START_CHANGE_PASSWORD :
            return Object.assign({},state,{
                is_changing : true
            });
        case CHANGE_PASSWORD_SUCCESS :
            return Object.assign({},state,{
                is_changing_success : true,
                is_changing : false,
                is_changing_failure : false
            });
        
        case CHANGE_PASSWORD_FAILURE :
            return Object.assign({},state,{
            is_changing_success : false,
            is_changing : false,
            is_changing_failure : true
            });
        case RESET_CHANGE_PASSWORD :
            return initState;    
        default :
            return initState;

    }

}