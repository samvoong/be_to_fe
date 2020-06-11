import React from 'react';
import ReactDOM from 'react-dom';
import './styles.scss';
import App from './App';
import { createStore, compose } from 'redux';
import { Provider } from 'react-redux';
import rootReducer  from  './reducers';

import thunk from 'redux-thunk';
import { applyMiddleware } from 'redux';

const store = createStore(
                rootReducer,
                compose(
                  applyMiddleware(thunk),
                 
              window.__REDUX_DEVTOOLS_EXTENSION__ &&
                window.__REDUX_DEVTOOLS_EXTENSION__(),
            )
                );


ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
        <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('app')
);

