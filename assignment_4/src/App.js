import React from "react";
import { hot } from 'react-hot-loader/root';
import { Provider } from "react-redux";
import RouterConfig from './routes'
import store from './reducers';

const App = () => {
  return (
    <Provider store={store}>
      <RouterConfig />
    </Provider>   
  );
};

export default hot(App);
