import { combineReducers } from 'redux'
import currentUsage from './currentUsage'
import historicalUsage from './historicalUsage'

export default combineReducers({
  currentUsage, historicalUsage
})
