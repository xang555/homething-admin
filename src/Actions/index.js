
import { BASE_API_URL } from '../appconfig';

export const VALIDATION_ID_INPUT = "valid_id";
export const VALIDATION_DEVICECODE_INPUT ="valid_device_code";

export function validationID(values){
    return {
        type: VALIDATION_ID_INPUT,
        values
    }
}

export function validationDeviceCode(values){
    return {
        type: VALIDATION_DEVICECODE_INPUT,
        values
    }
}

//---------------  device lists  ---------------------//
export const INVALIDATE_DEVICE_LISTS = "invalidate_devices_lists";
export const REQUEST_DEVICES_LISTS = "req_devices";
export const SUCCESS_DEVICES_LISTS ="success_devices";
export const FALURE_DEVICES_LISTS = "error_devices";


export function startreqdevices(){
    return {
        type : REQUEST_DEVICES_LISTS,
        isFetch : true
    }
}

export function successreqdevices(devices){
    return {
        type: SUCCESS_DEVICES_LISTS,
        devices
    }
}

export function errordevices(error){
    return {
        type:FALURE_DEVICES_LISTS,
        error
    }
}

export function reqdevices(token){
    return dispatch => {

        dispatch(startreqdevices());

        return fetch(BASE_API_URL + '/homething/admin/devices',{
            method:'GET',
            headers:{
                'Authorization' : 'Bearer '+ token 
            }
        }).then(response => {

           if(response.status === 200){
               return response;
           }else {
               let error = new Error(response.statusText);
               error.response = response;
               throw error;
           }     

        })
        .then(response =>{
             return response.json();   
        })
        .then(json =>{
           
            if(json.err === 0){
                 dispatch(successreqdevices(json.devices));   
            }else {
                dispatch(errordevices("oop! can not load HomeThing Devices!."));    
            }

        }).catch(error =>{
            dispatch(errordevices(error.message));
        })    

    }
}

//--------------- login ---------------------//

export const LOGIN_SUCCESSFULLY = "login_successfully";
export const LOGIN_FAILURE = "login_failure";
export const LOGIN_INIT = "login_init";

export function Initlogin(){
    return {
        type: LOGIN_INIT
    }
}

export function loginsuccessfully(token) {
    return {
        type : LOGIN_SUCCESSFULLY,
        token
    }
}

export function loginfailure(err){
    return {
        type: LOGIN_FAILURE,
        err
    }
}

export function reqlogin(user,passwd){
    return dispatch=> {

     dispatch(Initlogin());
     
     return fetch(BASE_API_URL + "/homething/admin/login",{
         method: "POST",
         headers:{
             'Content-Type': 'application/json'
         },
         body: JSON.stringify({
              user : user,
              passwd : passwd
         })   
     }).then(response => {
         
            if(response.status === 200){
                return response;
            }else {
                let error = new Error(response.statusText);
                error.response = response;
                throw error;
            }

     }).then(response => {
         return response.json();
     }).then(json => {

        if(json.err === 0){
            dispatch(loginsuccessfully(json.token));
        }else{
            dispatch(loginfailure("Login Failure"));
        }

     }).catch(error => {
            dispatch(loginfailure(error));
     });


    }

}

//------------- verify token ----------//
export const VERIFY_INIT = "verify_init";
export const VERIFY_SUCCESSFULLY ="verify_successfully";
export const VERIFY_FAILURE ="verify_failure";
export const RESET_VERIFY_STATE = "reset_verify_state";

export function verifyTokenInit(){
    return {
        type : VERIFY_INIT
    }
}

export function verifyTokenSuccessfully(status){
    return {
        type : VERIFY_SUCCESSFULLY,
        status
    }
}


export function verifyTokenFailure(err){
    return {
        type : VERIFY_FAILURE,
        err
    }
}

export function resetVerifyState(){
    return {
        type : RESET_VERIFY_STATE
    }
}

export function verifyToken(token){

return dispatch => {

    dispatch(verifyTokenInit());

         return fetch(BASE_API_URL + "/homething/admin/verify",{
         method: "GET",
         headers:{
             'Authorization' : 'Bearer '+ token 
         }  
     }).then(response => {
         
            if(response.status === 200 || response.status === 401){
                return response;
            } else {
                let error = new Error(response.statusText);
                error.response = response;
                throw error;
            }

     }).then(response => {
         return response.json();
     }).then(json => {

        if(json.err === 0){
            dispatch(verifyTokenSuccessfully(0));
        }else if(json.err === 401){
            dispatch(verifyTokenSuccessfully(401));
        }else {
            dispatch(verifyTokenFailure("something wrong"));
        }

     }).catch(error => {
            dispatch(verifyTokenFailure(error.message));
     });
}

}

//-------------- logout-------------------//

export const LOG_OUT = "logout";

export function logout(){
    return {
        type:LOG_OUT
    }
}

