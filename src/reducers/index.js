import { combineReducers } from 'redux'
import authReducer from './authReducer'
import loggedUserReducer from './loggedUserReducer'
import loginFormReducer from './loginFormReducer'
import registerFormReducer from './registerFormReducer'
import registerCreatorFormReducer from './registerCreatorFormReducer'
import settingsReducer from './settingsReducer'

export default combineReducers({
  auth: authReducer,
  loggedUser: loggedUserReducer,
  loginForm: loginFormReducer,
  registerForm: registerFormReducer,
  registerCreatorForm: registerCreatorFormReducer,
  settings: settingsReducer
})
