import { LOG_OUT,LOG_OUT_FROM_APP,RESET_LOGOUT_STATE } from '../Actions';

const initlogoutState = {
    islogout : false,
    logout_from_app : false
}

function logout(state = initlogoutState,action) {

switch(action.type){
    case LOG_OUT :
        return Object.assign({},state,{
            islogout : action.statuslogout
        });
    case LOG_OUT_FROM_APP :
          return Object.assign({},state,{
            logout_from_app : action.logout
        });
    case RESET_LOGOUT_STATE :
          return Object.assign({},state,{
             islogout : false,
             logout_from_app : false
        });
    default :
        return state;     
}

}

export default logout;