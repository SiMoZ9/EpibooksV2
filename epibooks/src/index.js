import React from 'react';
import ReactDOM from 'react-dom/client';
import './normalize.css';
import './index.css';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';

//import redux toolkit

// Confingurazione inizale fissa
import {Provider} from "react-redux"
import {combineReducers, configureStore} from "@reduxjs/toolkit";
import booksReducerState from "./reducers/booksReducer"
import commentReducerState from "./reducers/commentReducer";

const reducer = combineReducers({
    bookStore: booksReducerState,
    comments: commentReducerState,
})
const store = configureStore(
    {
        reducer
    }
)

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
      <Provider store={store}>
        <App />
      </Provider>
  </React.StrictMode>
);