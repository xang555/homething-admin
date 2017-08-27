import { combineReducers } from 'redux';
import validationinput from './ValidationInputReduxcuser';
import FetchDevices from './FetchDevices';
import login from './login';
import logout from './logout';
import TokenCheck from './verifyToken';

export default combineReducers({validationinput,FetchDevices,login,logout,TokenCheck});

