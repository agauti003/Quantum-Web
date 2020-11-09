import React from 'react';
import ReactDom from 'react-dom';
import Root from './routes/Root';
import configureStore from './store/configureStore';
require('./style/main.css');

const store = configureStore();

ReactDom.render(<Root store={store} />, document.getElementById('root'));
// registerServiceWorker();
