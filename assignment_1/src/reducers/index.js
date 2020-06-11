import { combineReducers } from 'redux';
import thunkReducer from './postReducer';

const rootReducer = combineReducers({
    thunk: thunkReducer
});

export default rootReducer;
