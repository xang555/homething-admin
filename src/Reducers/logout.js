import { LOG_OUT } from '../Actions';

const initlogoutState = {
    islogout : false
}

function logout(state = initlogoutState,action) {

switch(action.type){
    case LOG_OUT :
        return Object.assign({},state,{
            islogout : action.statuslogout
        });
    default :
        return state;     
}

}

export default logout;