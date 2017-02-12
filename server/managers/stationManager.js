// src
import { getJSON } from '../utils'

const URL_STATION_INFO = 'https://gbfs.citibikenyc.com/gbfs/en/station_information.json'
const URL_STATION_STATUS = 'https://gbfs.citibikenyc.com/gbfs/en/station_status.json'

class StationManager {
  fetchStationData() {
    return getJSON(URL_STATION_INFO)
  }
  
  fetchBikeData() {
    return getJSON(URL_STATION_STATUS)
  }
}

export default new StationManager()
