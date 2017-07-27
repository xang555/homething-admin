import { LOGIN_INIT, LOGIN_SUCCESSFULLY, LOGIN_FAILURE } from '../Actions';

const initloginState = {
        isLoging : false,
        token : ""
}


function login(state = initloginState, action){ 

        switch(action.type){
            case LOGIN_INIT :
                return Object.assign({},state,{
                   isLoging : true 
                });

                break;
            case LOGIN_SUCCESSFULLY:
                return Object.assign({},state,{
                    isLoging:false,
                    token:action.token
                })

                break;

            case LOGIN_FAILURE :
                return Object.assign({},state,{
                   isLoging:false,
                   errmsg: action.err.message 
                });
            default:
                return state;
        }

}

export default login;