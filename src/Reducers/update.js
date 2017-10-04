import { START_UPDATE_DEVICE,UPDATE_DEVICE_SUCESSFULLY,UPDATE_DEVICE_FAILURE } from '../Actions';


const initState = {
    is_updating : false,
    is_update_success : false,
    is_update_failure : false
}

export default function updateSmp (stae = initState,action){

    switch(action.type){

        case START_UPDATE_DEVICE :
            return Object.assign({},stae,{
                is_updating : true
            });
        
        case UPDATE_DEVICE_SUCESSFULLY :
             return Object.assign({},stae,{
                is_updating : false,
                is_update_success : true,
                is_update_failure : false
             });

        case UPDATE_DEVICE_FAILURE :
            return Object.assign({},stae,{
                is_updating : false,
                is_update_success : false,
                is_update_failure : true
             });
        default :
             return initState;

    }

}