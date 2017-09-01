import { VERIFY_INIT, VERIFY_FAILURE, VERIFY_SUCCESSFULLY } from '../Actions';

let initstate = {
    isverifying : false,
    status_code : 500,
    err: ''
}

export default function TokenCheck(state = initstate,action){

    switch(action.type){

        case VERIFY_INIT :
            return Object.assign({},state,{
                isverifying : true    
            });
        case VERIFY_SUCCESSFULLY : 
            return Object.assign({},state,{
               isverifying : false,
               status_code : action.status  
            });
        case VERIFY_FAILURE : 
            return Object.assign({},state,{
                isverifying : false,
                err : action.err     
            });    

         default : 
            return state;   
    }

}


