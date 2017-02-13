// src
import * as ActionTypes from '../../actions'

export default function stations(state = {}, action) {
  const {type, error, payload, meta} = action

  switch (type) {
    case ActionTypes.STATION_FETCH_STATUS_SUCCESS: {
      const map = {...state}
      payload.data.stations.forEach(({station_id, num_bikes_available}) => {
        const station = state[station_id]
        map[station_id] = {...station, num_bikes_available, status_history: [num_bikes_available, ...(station.status_history || [])]}
      })
      
      return map
    }
    /*
    case ActionTypes.ACTIVITY_FETCH_ALL_SUCCESS: {
      const map = {}
      payload.forEach(item => map[item.id] = item)
      return map
    }
    */
    default: {
      return state
    }
  }
}
