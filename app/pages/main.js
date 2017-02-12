// src
import PageMain from '../components/PageMain/PageMain'

// libs
import React from 'react'
import ReactDOM from 'react-dom'
import configureStore from '../store/configureStore'

const store = configureStore(window.GAW.preloadedState)
const element = React.createElement(PageMain, {
  store
})
ReactDOM.render(element, document.getElementById('root'))
