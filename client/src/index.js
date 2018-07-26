import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import reducers from './common/reducers/index';
import { composeWithDevTools } from 'redux-devtools-extension'

const store = createStore(reducers, composeWithDevTools());
const AppComponent = (
    <Provider store={store}>
        <App />
    </Provider>);

ReactDOM.render(AppComponent, document.getElementById('root'));
registerServiceWorker();
