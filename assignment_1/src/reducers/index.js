import { combineReducers } from 'redux';
import postsReducer from './postsReducer';
import onePostReducer from './onePostReducer';

const rootReducer = combineReducers({
    thunk: postsReducer,
    post: onePostReducer
});

export default rootReducer;
