// src
import * as ActionTypes from '../actions'
import entities from './entities'
import lists from './lists'
import aggregates from './aggregates'

// libs
import { combineReducers } from 'redux'
import { routerReducer as routing } from 'react-router-redux'
import {reducer as formReducer} from 'redux-form'

// Updates error message to notify about the failed fetches.
function errorMessage(state = null, action) {
  const { type, error } = action

  if (type === ActionTypes.RESET_ERROR_MESSAGE) {
    return null
  } else if (error) {
    return action.error
  }

  return state
}

const rootReducer = combineReducers({
  entities,
  lists,
  aggregates,
  form: formReducer,
  errorMessage,
  routing
})

export default rootReducer
