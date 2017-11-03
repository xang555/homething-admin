
import { VALIDATION_DEVICECODE_INPUT, VALIDATION_ID_INPUT,
         SMART_DEVICE_TYPE,GET_SMART_DEVICE_FILL, SMART_DEVICE_MAC, 
         SMART_DEVICE_SECRET_ID } from '../Actions'


const initialState  = {
    IdInput : "",
    DeviceCodeInput : "",
    dtype : "0",
    scret_id : "",
    mac_address : ""
}

export default function validationinput(state = initialState ,action){

switch(action.type){

case VALIDATION_ID_INPUT:
    return Object.assign({},state,{ IdInput: action.values});
case VALIDATION_DEVICECODE_INPUT:
     return Object.assign({},state,{ DeviceCodeInput: action.values});
case SMART_DEVICE_TYPE :
    return Object.assign({},state,{dtype : action.val});
case SMART_DEVICE_SECRET_ID:
    return Object.assign({},state,{scret_id: action.scret});
case SMART_DEVICE_MAC:
    return Object.assign({},state,{mac_address: action.mac});
case GET_SMART_DEVICE_FILL :
    return state;          
default:
    return state;
}

}



