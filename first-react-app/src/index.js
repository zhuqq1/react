import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Hallow from './components/hallow/index.jsx';
import registerServiceWorker from './registerServiceWorker';

//ReactDOM.render( < App / > , document.getElementById('root'));
ReactDOM.render( < Hallow / > , document.getElementById('root'));
registerServiceWorker();