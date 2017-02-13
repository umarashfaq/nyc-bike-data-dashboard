import * as ActionTypes from '../../actions'

export default function currentUsage(state = {num_bikes_available: 0, capacity: 0}, action) {
  const {type, payload, meta} = action
  
  switch (type) {
    case ActionTypes.STATION_FETCH_STATUS_SUCCESS: {
      const [num_bikes_available, capacity] = payload.data.stations.reduce((memo, {station_id, num_bikes_available}) => {
        memo[0] += num_bikes_available
        memo[1] += meta.stations[station_id].capacity

        return memo
      }, [0, 0])

      return {num_bikes_available, capacity}
    }
    default: {
      return state
    }
  }
}
