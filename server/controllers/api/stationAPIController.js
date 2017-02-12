// src
import { handleError } from '../../utils'
import stationManager from '../../managers/stationManager'

// libs
import express from 'express'

const router = express.Router()

router.get('/api/stations/', (req, res) => {  
  stationManager.fetchStationData()
    .then(data => res.send(data))
    .catch(error => handleError(res, error))
})

export default router
