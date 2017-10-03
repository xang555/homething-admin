import { combineReducers } from 'redux';
import validationinput from './ValidationInputReduxcuser';
import FetchDevices from './FetchDevices';
import auth from './auth';
import addSmartDevice from './AddDevices';
import search from './Search';

export default combineReducers({validationinput,FetchDevices,auth,addSmartDevice,search});

