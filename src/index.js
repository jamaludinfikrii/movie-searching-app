import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './../node_modules/bootstrap/dist/css/bootstrap.min.css'
import './App.css'
import {Provider} from 'react-redux'
import {createStore,applyMiddleware} from 'redux'
import movieReducers from './redux/movieReducers'
import reduxThunk from 'redux-thunk'

const store = createStore(movieReducers,applyMiddleware(reduxThunk))

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);