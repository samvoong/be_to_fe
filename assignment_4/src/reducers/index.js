import { createStore, compose, combineReducers } from "redux";
import thunk from 'redux-thunk';
import { applyMiddleware } from 'redux';
import postsReducer from './postsReducer'
import addReducer from "./addReducer";
import testReducer from "./testReducer";

const store = createStore(
  combineReducers({ 
    posts: postsReducer,
    add: addReducer,
    test: testReducer
  }),
  compose(applyMiddleware(thunk),
  window.__REDUX_DEVTOOLS_EXTENSION__ &&
  window.__REDUX_DEVTOOLS_EXTENSION__(),
  )
);

export default store;

