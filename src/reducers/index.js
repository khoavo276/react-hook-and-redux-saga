import { combineReducers } from 'redux';
import user from './user';
import utils from './utils';

export default combineReducers({
    user,
    utils,
});