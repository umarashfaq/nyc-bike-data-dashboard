// src
import * as ActionTypes from '../../actions'

export default function stations(state = {}, action) {
  const {type, error, payload, meta} = action

  switch (type) {
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
