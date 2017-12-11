import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter} from 'react-router-dom' // eslint-disable-line no-unused-vars
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
    <BrowserRouter><App /></BrowserRouter>,
    document.getElementById('root')
);
registerServiceWorker();
