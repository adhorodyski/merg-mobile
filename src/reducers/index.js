import { combineReducers } from 'redux'
import loggedUserReducer from './loggedUserReducer'
import loginFormReducer from './loginFormReducer'
import registerFormReducer from './registerFormReducer'
import registerCreatorFormReducer from './registerCreatorFormReducer'

export default combineReducers({
  loggedUser: loggedUserReducer,
  loginForm: loginFormReducer,
  registerForm: registerFormReducer,
  registerCreatorForm: registerCreatorFormReducer
})
