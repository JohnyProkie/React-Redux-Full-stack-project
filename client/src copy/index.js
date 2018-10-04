import React from 'react';
import ReactDOM from 'react-dom';
import {createStore, combineReducers, applyMiddleware} from 'redux'
import { Provider } from 'react-redux'
import thunk from 'redux-thunk'

import './index.css';
import App from './App';
import Gate from './gate';
import Reducer from './Reducers/reducers' 

const store = createStore(
    combineReducers({
        Reducer,
    }), applyMiddleware(thunk));

store.subscribe(() => {
  console.log("store changed", store.getState())
} )

ReactDOM.render(<Provider store={store} ><Gate /></Provider>, document.getElementById('root'));

