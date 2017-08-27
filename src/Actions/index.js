
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
                dispatch(errordevices("oop! can not load HomeThing Devices!."))    
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

//-------------- logout-------------------//

export const LOG_OUT = "logout";

export function logout(statuslogout){
    return {
        type:LOG_OUT,
        statuslogout
    }
}