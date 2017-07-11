
import { VALIDATION_DEVICECODE_INPUT, VALIDATION_ID_INPUT } from '../Actions'


const initialState  = {
    IdInput : "",
    DeviceCodeInput : ""
}

export default function validationinput(state = initialState ,action){

switch(action.type){

case VALIDATION_ID_INPUT:
    return Object.assign({},state,{ IdInput: action.values});
case VALIDATION_DEVICECODE_INPUT:
     return Object.assign({},state,{ DeviceCodeInput: action.values});       
default:
    return state;
}

}



