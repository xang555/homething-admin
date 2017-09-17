import {START_INSERT_SMART_DEVICE,
    INSERT_SMART_DEVICE_SUCESSFULLY,
    INSERT_SMART_DEVICE_FAILURE,
   insertSmartDevice} from '../Actions';

    let initState = {
        isadding : false,
        add_state : false,
        is_failure : false
    }

   export default function addSmartDevice(state = initState,action){

        switch(action.type){

         case START_INSERT_SMART_DEVICE :
          return Object.assign({},state,{isadding : true});
        break;
         case INSERT_SMART_DEVICE_SUCESSFULLY :
         return Object.assign({},state,{isadding : false,add_state : true,is_failure:false});
        break;
         case INSERT_SMART_DEVICE_FAILURE :
         return Object.assign({},state,{isadding : false,add_state : false,is_failure:true});
        break;

        default :
            return state;

        }

   }
