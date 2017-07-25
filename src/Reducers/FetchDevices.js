
import { REQUEST_DEVICES_LISTS,
     SUCCESS_DEVICES_LISTS, FALURE_DEVICES_LISTS } from '../Actions';

const initDevices = {
    isFetching: true,
    didInvalidate: false,
    devices : []
}

function FetchDevices(state = initDevices, action){

    switch(action.type){

        case REQUEST_DEVICES_LISTS :
                return Object.assign({},state,{
                    isFetching: true
                });
        case SUCCESS_DEVICES_LISTS :
                return Object.assign({},state,{
                     devices: action.devices,
                     isFetching: false   
                });
        case FALURE_DEVICES_LISTS :
                return Object.assign({},state,{
                    errmsg : action.error,
                    isFetching: false   
                });
        default:
            return state;                 

    }

}

export default FetchDevices;