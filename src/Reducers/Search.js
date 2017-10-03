import {SEARCH_BOX_CHANGE,SEARCH_OPTION_CHANGE} from '../Actions';

let initState = {
    opt : "all",
    word : ""
}

export default function Search(state = initState,action){

switch(action.type){

case SEARCH_BOX_CHANGE :
     return Object.assign({},state,{word : action.word});   
    break
case SEARCH_OPTION_CHANGE :
    return Object.assign({},state,{opt : action.opt});  
    break;

    default :
        return state;
}

}