import { combineReducers } from 'redux'
import leadsState from './leads'
import errorsState from './errors'
import messagesState from './messages'

export default combineReducers({
  leadsState,
  errorsState,
  messagesState
})
