import { combineReducers } from 'redux'
import authReducer from './authReducer'
import loggedUserReducer from './loggedUserReducer'
import loginFormReducer from './loginFormReducer'
import registerFormReducer from './registerFormReducer'
import registerCreatorFormReducer from './registerCreatorFormReducer'

export default combineReducers({
  auth: authReducer,
  loggedUser: loggedUserReducer,
  loginForm: loginFormReducer,
  registerForm: registerFormReducer,
  registerCreatorForm: registerCreatorFormReducer,
})
