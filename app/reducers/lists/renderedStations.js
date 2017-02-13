// src
import * as ActionTypes from '../../actions'
import { combineReducers } from 'redux'

function items(state = [], action) {
  const {type, error, payload, meta} = action

  switch (type) {
    /*
    case ActionTypes.ACTIVITY_FETCH_ALL_SUCCESS: {
      const map = {}
      payload.forEach(item => map[item.id] = item)
      return map
    }
    */
    case ActionTypes.LIST_RENDERED_STATIONS_FILTER_APPLY: 
    case ActionTypes.LIST_RENDERED_STATIONS_FILTER_RESET: {
      const {items} = payload
      return items
    }
    default: {
      return state
    }
  }
}

function query(state = {station_id: null, distance: null}, action) {
  const {type, error, payload, meta} = action

  switch (type) {
    case ActionTypes.LIST_RENDERED_STATIONS_FILTER_APPLY: {
      const {station_id, distance} = payload
      return {station_id, distance}
    }
    case ActionTypes.LIST_RENDERED_STATIONS_FILTER_RESET: {
      return {station_id: null, distance: null}
    }
    default: {
      return state
    }
  }
}

export default combineReducers({
  items, query
})
