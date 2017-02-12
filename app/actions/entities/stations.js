import { CALL_API } from '../../middleware/api'

/*
export const ACTIVITY_FETCH_ALL = 'ACTIVITY_FETCH_ALL'
export const ACTIVITY_FETCH_ALL_SUCCESS = 'ACTIVITY_FETCH_ALL_SUCCESS'
export const ACTIVITY_FETCH_ALL_FAILURE = 'ACTIVITY_FETCH_ALL_FAILURE'

function callApiFetchAllActivities() {
  return {
    [CALL_API]: {
      types: [
        ACTIVITY_FETCH_ALL,
        ACTIVITY_FETCH_ALL_SUCCESS,
        ACTIVITY_FETCH_ALL_FAILURE
      ],
      endpoint: `/api/activities`
    }
  }
}

export function fetchAllActivities() {
  return (dispatch, getState) => {
    const {entities: {
      activities
    }} = getState()
    
    if (Object.keys(activities).length) {
      return null
    } else {
      return dispatch(callApiFetchAllActivities())
    }
  }
}
*/
