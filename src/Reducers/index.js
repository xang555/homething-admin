import { combineReducers } from 'redux';
import validationinput from './ValidationInputReduxcuser';
import FetchDevices from './FetchDevices';
import auth from './auth';
import checkToken from './verifyToken';

export default combineReducers({validationinput,FetchDevices,auth,checkToken});

