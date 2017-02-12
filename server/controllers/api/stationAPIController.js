import express from 'express'
import errorUtils from './../../utils/errorUtils'
const router = express.Router()

router.get('/api/stations/', (req, res) => {  
  activityManager.findAll()
  .then((resp) => {
    res.send(resp);
  })
  .catch((error) => {
    return errorUtils.caughtError(res, error);
  });
});

export default router;
