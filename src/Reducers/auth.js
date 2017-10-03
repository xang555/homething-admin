import { LOGIN_INIT, LOGIN_SUCCESSFULLY, LOGIN_FAILURE, LOG_OUT } from '../Actions';
import { SAVE_TOKEN } from '../appconfig';

const initloginState = {
        isLoging : false,
        token : _getTokenState() ? _getTokenState() : null
}

function auth(state = initloginState, action){ 

        switch(action.type){
            case LOGIN_INIT :
                return Object.assign({},state,{
                   isLoging : true,  
                });

            case LOGIN_SUCCESSFULLY:
                _saveTokenState(action.token);
                return Object.assign({},state,{
                    isLoging:false,
                    token:action.token,
                    errmsg : ''
                })

            case LOGIN_FAILURE :
                return Object.assign({},state,{
                   isLoging:false,
                   errmsg: '401'
                });
            case LOG_OUT :
                _removeToken();
                return Object.assign({},state,{
                    isLoging:false,
                    token: null
                 });
            default:
                return state;
        }

}

function _saveTokenState(token){
    sessionStorage.setItem(SAVE_TOKEN,token);
}

function _getTokenState(){
    return sessionStorage.getItem(SAVE_TOKEN);
}

function _removeToken(){
    sessionStorage.removeItem(SAVE_TOKEN);
}

export default auth;