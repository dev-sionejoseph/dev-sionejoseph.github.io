import {createStore} from 'redux';
import * as reducer from './reducers';

let store = createStore(reducer)

export default store;