
import { BASE_API_URL,SAVE_TOKEN } from '../appconfig';

export const VALIDATION_ID_INPUT = "valid_id";
export const VALIDATION_DEVICECODE_INPUT ="valid_device_code";
export const GET_SMART_DEVICE_FILL = "get_sm_device";
export const SMART_DEVICE_TYPE = "dtype";

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

export function getSmartDevices(){
    return {
        type : GET_SMART_DEVICE_FILL,
    }
}

export function selectSmartDevice(val){
    return {
        type : SMART_DEVICE_TYPE,
        val
    }
}

//---------------  device lists  ---------------------//
export const INVALIDATE_DEVICE_LISTS = "invalidate_devices_lists";
export const REQUEST_DEVICES_LISTS = "req_devices";
export const SUCCESS_DEVICES_LISTS ="success_devices";
export const FALURE_DEVICES_LISTS = "error_devices";
export const SEARCH_DEVICE = "search_device";


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

export function searchdevice(sdid,dtype){
    return {
        type : SEARCH_DEVICE,
        keyword : {
            sdid,
            dtype
        }
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

//------------- insert smart device ----------//
export const START_INSERT_SMART_DEVICE = "start_insert";
export const INSERT_SMART_DEVICE_SUCESSFULLY = "insert_successfully";
export const INSERT_SMART_DEVICE_FAILURE = "insert_failure";

export function startInsert(){
    return {
        type : START_INSERT_SMART_DEVICE
    }
}

export function insertSucessfully(){
    return {
        type : INSERT_SMART_DEVICE_SUCESSFULLY,
    }
}

export function insertFailure(){
    return {
        type : INSERT_SMART_DEVICE_FAILURE,
    }
}

export function insertSmartDevice($sdid,$dpasswd,$dtype){
    return dispatch =>{

      startInsert();
      
      return fetch(BASE_API_URL + "/homething/admin/device/add",{
        method: "POST",
        headers:{
            'Content-Type': 'application/json',
            'Authorization' : 'Bearer '+ _getTokenState()
        },
        body: JSON.stringify({
            sdid : $sdid,
            dtype : $dtype,
            sharecode : $dpasswd
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
            dispatch(insertSucessfully());
            dispatch(reqdevices(_getTokenState()));  
            dispatch(validationDeviceCode(""));
            dispatch(validationID(""));
            dispatch(selectSmartDevice("0"));
        }else {
            dispatch(insertFailure());
        }

    }).catch(err => {
        dispatch(insertFailure());
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

function _getTokenState(){
    return sessionStorage.getItem(SAVE_TOKEN);
}

//------------ search---------------//
export const SEARCH_BOX_CHANGE = "search_box_change";
export const SEARCH_OPTION_CHANGE ="search_option_change";

export function search_box_change(word){
    return {
        type:SEARCH_BOX_CHANGE,
        word
    }
}

export function search_option_change(opt){
    return {
        type : SEARCH_OPTION_CHANGE,
        opt
    }
}