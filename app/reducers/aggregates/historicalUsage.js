import * as ActionTypes from '../../actions'
import currentUsage from './currentUsage'

export default function historicalUsage(state = [], action) {
  const {type, payload, meta} = action
  
  switch (type) {
    case ActionTypes.STATION_FETCH_STATUS_SUCCESS: {
      const {num_bikes_available} = currentUsage({}, action)
      
      return [num_bikes_available, ...state]
    }
    default: {
      return state
    }
  }
}
