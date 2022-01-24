import React from 'react';
import './index.css'
import ReactDOM from 'react-dom';
import App from './App';
import { Provider } from 'react-redux';
import { Store } from './redux/store/index'

ReactDOM.render(

  <Provider store={Store}>
    <App />
  </Provider>,
  document.getElementById('root')
);


