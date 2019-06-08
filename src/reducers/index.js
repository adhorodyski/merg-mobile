import { combineReducers } from 'redux'
import authReducer from './authReducer'
import loggedUserReducer from './loggedUserReducer'
import homeUserReducer from './homeUserReducer'
import exploreUserReducer from './exploreUserReducer'
import loginFormReducer from './loginFormReducer'
import registerFormReducer from './registerFormReducer'
import registerCreatorFormReducer from './registerCreatorFormReducer'
import settingsReducer from './settingsReducer'
import listsReducer from './listsReducer'
import exploreReducer from './exploreReducer'
import userOceanReducer from './userOceanReducer'

export default combineReducers({
  auth: authReducer,
  loggedUser: loggedUserReducer,
  homeUser: homeUserReducer,
  exploreUser: exploreUserReducer,
  loginForm: loginFormReducer,
  registerForm: registerFormReducer,
  registerCreatorForm: registerCreatorFormReducer,
  settings: settingsReducer,
  lists: listsReducer,
  explore: exploreReducer,
  userOcean: userOceanReducer
})
