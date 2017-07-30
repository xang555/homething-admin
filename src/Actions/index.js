
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

export function reqdevices(){
    return dispatch => {

        dispatch(startreqdevices());

        return fetch('https://homethingapi.xangnam.com/homething/admin/devices',{
            method:'GET',
            headers:{
<<<<<<< HEAD
                'Authorization' : 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1YWRtaW4iOiJhZG1pbiIsImlhdCI6MTUwMTM4NzAyOSwiZXhwIjoxNTAxNDczNDI5fQ.KeyHD_s1JY4NfBTzobdCzXy41Qv9Lt9TBx_8r46FsRI'
=======
                'Authorization' : 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1YWRtaW4iOiJhZG1pbiIsImlhdCI6MTUwMTEzNTY3OSwiZXhwIjoxNTAxMjIyMDc5fQ.0T2GS9N93dxEQPtdgvT68MSgOaKjKp-gl0SHTyQn2fQ'
>>>>>>> adc17da9110a965a19b72c3551398216dab5c63b
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
     
     return fetch("https://homethingapi.xangnam.com/homething/admin/login",{
         method: "POST",
         headers:{
             "Content-Type" : "application/x-www-form-urlencoded"
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