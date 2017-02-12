// src
import api from '../middleware/api'
import rootReducer from '../reducers'

// libs
import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'

export default function configureStore(preloadedState) {
  return createStore(
    rootReducer,
    preloadedState,
    applyMiddleware(thunk, api)
  )
}
