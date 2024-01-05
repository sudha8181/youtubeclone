import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import {compose,applyMiddleware} from 'redux';
import {thunk} from "redux-thunk";
import {createStore} from 'redux'
import Reducers from './Reducers'
import App from './App';

const store=createStore(Reducers,compose(applyMiddleware(thunk)));
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
     <React.StrictMode>
    <App />
  </React.StrictMode>
  </Provider>
 
);


