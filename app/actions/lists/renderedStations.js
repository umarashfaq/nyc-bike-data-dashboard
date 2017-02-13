export const LIST_RENDERED_STATIONS_FILTER_APPLY = 'LIST_RENDERED_STATIONS_FILTER_APPLY'
export const LIST_RENDERED_STATIONS_FILTER_RESET = 'LIST_RENDERED_STATIONS_FILTER_RESET'

// func copied from here: http://stackoverflow.com/a/21623206/162461
function calcDist(lat1, lon1, lat2, lon2) {
  var p = 0.017453292519943295;    // Math.PI / 180
  var c = Math.cos;
  var a = 0.5 - c((lat2 - lat1) * p)/2 + 
          c(lat1 * p) * c(lat2 * p) * 
          (1 - c((lon2 - lon1) * p))/2;

  return 12742 * Math.asin(Math.sqrt(a)); // 2 * R; R = 6371 km
}

export function filterRenderedStations(station_id, distance) {
  return (dispatch, getState) => {
    const {entities: {stations}} = getState()
    const anchor = stations[station_id]
    if (!anchor) {
      console.error(`Couldn't find station with id ${station_id}`)
    }
    const items = Object.values(stations)
      .filter(station => calcDist(anchor.lat, anchor.lon, station.lat, station.lon) <= distance)
      .map(station => station.station_id)
    
    dispatch({
      type: LIST_RENDERED_STATIONS_FILTER_APPLY,
      payload: {
        station_id, distance, items
      }
    })
  }
}

export function resetRenderedStations() {
  return (dispatch, getState) => {
    const {entities: {stations}} = getState()
    
    dispatch({
      type: LIST_RENDERED_STATIONS_FILTER_RESET,
      payload: {
        items: Object.values(stations).map(station => station.station_id)
      }
    })
  }
}
