import React from 'react';
import ReactDOM from 'react-dom';
import store from "./store"
import {Provider} from "react-redux"
import App from './App';
import {
    HashRouter as Router
} from "react-router-dom"

ReactDOM.render(
    <Provider store={store}>
     <Router >
    <App / >
    </Router></Provider>, document.getElementById('root'));