import React from 'react';
import ReactDOM from 'react-dom';
import { App } from './App';
import 'bootstrap/dist/css/bootstrap.css';
import './style/style.css';

BX24.init(function () {
    ReactDOM.render(<App />, document.getElementById('app'));
});
