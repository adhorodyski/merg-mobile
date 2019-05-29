import {
  SETTINGS_HYDRATE_INITIAL,
  SETTINGS_PERSONAL_UPDATE_NAME,
  SETTINGS_PERSONAL_UPDATE_USERNAME,
  SETTINGS_PERSONAL_UPDATE_EMAIL,
  SETTINGS_PERSONAL_UPDATE_ABOUT,
  SETTINGS_PERSONAL_SUCCESS
} from '../actions/types'

const initialState = {
  personal: {
    nameValue: '',
    usernameValue: '',
    emailValue: '',
    aboutValue: '',
    success: false
  }
}

const reducer = (state = initialState, action) => {
  switch(action.type) {
    case SETTINGS_HYDRATE_INITIAL:
      return {
        ...state,
        personal: {
          ...state.personal,
          nameValue: action.payload.name,
          usernameValue: action.payload.username,
          emailValue: action.payload.email,
          aboutValue: action.payload.about
        }
      }
    case SETTINGS_PERSONAL_UPDATE_NAME:
      return {
        ...state,
        personal: {
          ...state.personal,
          nameValue: action.payload
        }
      }
    case SETTINGS_PERSONAL_UPDATE_USERNAME:
      return {
        ...state,
        personal: {
          ...state.personal,
          usernameValue: action.payload
        }
      }
    case SETTINGS_PERSONAL_UPDATE_EMAIL:
      return {
        ...state,
        personal: {
          ...state.personal,
          emailValue: action.payload
        }
      }
    case SETTINGS_PERSONAL_UPDATE_ABOUT:
      return {
        ...state,
        personal: {
          ...state.personal,
          aboutValue: action.payload
        }
      }
    case SETTINGS_PERSONAL_SUCCESS:
      return {
        ...state,
        personal: {
          ...state.personal,
          success: !state.personal.success
        }
      }
    default: {
      return state
    }
  }
}

export default reducer
