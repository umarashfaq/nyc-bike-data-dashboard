import { CALL_API } from '../../middleware/api'

export const STATION_FETCH_STATUS = 'STATION_FETCH_STATUS'
export const STATION_FETCH_STATUS_SUCCESS = 'STATION_FETCH_STATUS_SUCCESS'
export const STATION_FETCH_STATUS_FAILURE = 'STATION_FETCH_STATUS_FAILURE'

function fetchStationStatus() {
  // console.log('Fetching station status ...')
  return {
    [CALL_API]: {
      types: [
        STATION_FETCH_STATUS,
        STATION_FETCH_STATUS_SUCCESS,
        STATION_FETCH_STATUS_FAILURE
      ],
      endpoint: `/api/stations/bikes`
    }
  }
}

let isPolling = false
const POLLING_DELAY = 60000
export function initiateStatusPolling() {
  if (isPolling) {
    return () => {}
  }
  
  // console.log('Initiating status polling ...')
  isPolling = true
  
  return dispatch => {
    dispatch(fetchStationStatus())
    setInterval(() => dispatch(fetchStationStatus()), POLLING_DELAY)
  }
}
