// src
import stationManager from '../managers/stationManager'

// libs
import express from 'express'

const router = express.Router()

router.get('/', (req, res) => {
  Promise.all([stationManager.fetchStationData(), stationManager.fetchBikeData()])
    .then(([stationInfo, stationStatus]) => {
      const stations = {}
      stationInfo.data.stations.forEach(item => stations[item.station_id] = item) 
      stationStatus.data.stations.forEach(item => Object.assign(stations[item.station_id], item))
      
      const renderedStationItems = stationInfo.data.stations.map(item => item.station_id)
      
      res.render('index', {
        preloadedState: {
          entities: {
            stations
          },
          lists: {
            renderedStations: {
              items: renderedStationItems
            }
          }
        }
      })
    })
})

export default router
