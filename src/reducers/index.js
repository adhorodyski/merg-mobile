import { combineReducers } from 'redux'
import loggedUserReducer from './loggedUserReducer'
import loginFormReducer from './loginFormReducer'

export default combineReducers({
  loggedUser: loggedUserReducer,
  loginForm: loginFormReducer
})
