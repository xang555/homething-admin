import { combineReducers } from 'redux';
import validationinput from './ValidationInputReduxcuser';
import FetchDevices from './FetchDevices';
import auth from './auth';
import addSmartDevice from './AddDevices';
import search from './Search';
import update from './update';
import changepasswd from './ChnagePassword';
import Delete from './Delete';

export default combineReducers({validationinput,FetchDevices,auth,
    addSmartDevice,search,update,changepasswd,Delete});

