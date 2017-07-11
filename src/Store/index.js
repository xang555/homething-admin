import { createStore } from 'redux';
import reducers from '../Reducers';

let store = createStore(reducers);

export default store;
