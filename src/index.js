import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux'
// import { createStore } from 'redux';

// import store from './service/reducer-aside'
import store from './service/reducers'
import App from './components/app';

// const root = ReactDOM.createRoot(document.getElementById('root'));

const container = document.getElementById('root')
const root = ReactDOM.createRoot(container)
root.render(
    <Provider store={ store }> 
      <App />
    </Provider>
);

