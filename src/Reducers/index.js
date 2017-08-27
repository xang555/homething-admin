import { combineReducers } from 'redux';
import validationinput from './ValidationInputReduxcuser';
import FetchDevices from './FetchDevices';
import login from './login';
import logout from './logout';

export default combineReducers({validationinput,FetchDevices,login,logout});

