import { combineReducers } from 'redux'
import authReducer from './authReducer'
import loggedUserReducer from './loggedUserReducer'
import homeUserReducer from './homeUserReducer'
import exploreUserReducer from './exploreUserReducer'
import loginFormReducer from './loginFormReducer'
import registerFormReducer from './registerFormReducer'
import registerCreatorFormReducer from './registerCreatorFormReducer'
import mergingReducer from './mergingReducer'
import settingsReducer from './settingsReducer'
import listsReducer from './listsReducer'
import exploreReducer from './exploreReducer'
import userOceanReducer from './userOceanReducer'
import userStoriesReducer from './userStoriesReducer'

export default combineReducers({
  auth: authReducer,
  loggedUser: loggedUserReducer,
  homeUser: homeUserReducer,
  exploreUser: exploreUserReducer,
  loginForm: loginFormReducer,
  registerForm: registerFormReducer,
  registerCreatorForm: registerCreatorFormReducer,
  merging: mergingReducer,
  settings: settingsReducer,
  lists: listsReducer,
  explore: exploreReducer,
  userOcean: userOceanReducer,
  userStories: userStoriesReducer
})
