import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import Store from './components/redux/store';
import Reducer from './components/redux/reducers';


import './index.css';
import App from './components/app/App';


ReactDOM.render(<Provider store={Store(Reducer)}><App /></Provider>, document.getElementById('root'));
// ReactDOM.render(<App />, document.getElementById('root'));
