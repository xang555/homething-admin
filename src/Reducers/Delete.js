import {  START_DELETE_SMP,DELETE_SMP_SUCCESS,DELETE_SMP_FAILURE } from '../Actions';

const initState = {
    is_deleting : false,
    is_delete_success : false,
    is_delete_failure : false
}

export default function DeleteSmp (state = initState,action){

    switch(action.type){

        case START_DELETE_SMP :
            return Object.assign({},state,{
                is_deleting : true
            });
        
        case DELETE_SMP_SUCCESS :
             return Object.assign({},state,{
                is_deleting : false,
                is_delete_success : true,
                is_delete_failure : false
             });

        case DELETE_SMP_FAILURE :
            return Object.assign({},state,{
                is_deleting : false,
                is_delete_success : false,
                is_delete_failure : true
             });   
        default :
             return initState;

    }

}