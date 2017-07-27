import { combineReducers } from 'redux';
import validationinput from './ValidationInputReduxcuser';
import FetchDevices from './FetchDevices';
import login from './login';

export default combineReducers({validationinput,FetchDevices,login});

