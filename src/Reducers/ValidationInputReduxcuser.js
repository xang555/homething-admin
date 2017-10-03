
import { VALIDATION_DEVICECODE_INPUT, VALIDATION_ID_INPUT,SMART_DEVICE_TYPE,GET_SMART_DEVICE_FILL } from '../Actions'


const initialState  = {
    IdInput : "",
    DeviceCodeInput : "",
    dtype : "0"
}

export default function validationinput(state = initialState ,action){

switch(action.type){

case VALIDATION_ID_INPUT:
    return Object.assign({},state,{ IdInput: action.values});
case VALIDATION_DEVICECODE_INPUT:
     return Object.assign({},state,{ DeviceCodeInput: action.values});
case SMART_DEVICE_TYPE :
    return Object.assign({},state,{dtype : action.val});  
case GET_SMART_DEVICE_FILL :
    return state;          
default:
    return state;
}

}



