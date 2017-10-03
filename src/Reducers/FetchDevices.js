
import { REQUEST_DEVICES_LISTS,
     SUCCESS_DEVICES_LISTS,
      FALURE_DEVICES_LISTS,
    SEARCH_DEVICE } from '../Actions';

const initDevices = {
    isFetching: true,
    didInvalidate: false,
    devices : [],
    temp_devices : []
}

function SearchSmartDevice($searcharray,$sdid,$dtype) {
    
            if($sdid.length <=0 ){
                return $searcharray;
            }
            let regex = new RegExp("^"+ $sdid + "+");
            let result = [];

            if($dtype === "all"){
                for(let i =0 ; i < $searcharray.length ; i++){
                    if($searcharray[i].sdid.search(regex) != -1){  
                        result.push($searcharray[i]);
                    }
              }
            }else {
                for(let i =0 ; i < $searcharray.length ; i++){
                    if($searcharray[i].type === parseInt($dtype) && $searcharray[i].sdid.search(regex) != -1){  
                        result.push($searcharray[i]);
                    }
              }
            }

          return result;
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
                     temp_devices : action.devices,
                     isFetching: false   
                });
        case FALURE_DEVICES_LISTS :
                return Object.assign({},state,{
                    errmsg : action.error.message,
                    isFetching: false   
                });
        case SEARCH_DEVICE :

              let newDevices = SearchSmartDevice(state.temp_devices,action.keyword.sdid,action.keyword.dtype);
                return Object.assign({},state,{
                    devices : newDevices != null ? newDevices : state.temp_devices
                });
        default:
            return state;                 

    }

}


export default FetchDevices;