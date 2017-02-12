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
      
      res.render('index', {
        preloadedState: {
          entities: {
            stations
          }
        }
      })
    })
})

export default router
