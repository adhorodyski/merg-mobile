import { combineReducers } from 'redux'
import loggedUserReducer from './loggedUserReducer'

export default combineReducers({
  loggedUser: loggedUserReducer
})
