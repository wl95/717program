import React, { Component, Fragment } from 'react';
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import App from './App'
import configureStore from './store'
const store = configureStore()
//console.log(process.env)
ReactDOM.render(
    <Provider store={store}><Fragment><App/></Fragment></Provider>,
    document.getElementById('root')
)