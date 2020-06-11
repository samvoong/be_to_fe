import { combineReducers } from 'redux';
import postsReducer from './postsReducer';

const rootReducer = combineReducers({
    thunk: postsReducer
});

export default rootReducer;
