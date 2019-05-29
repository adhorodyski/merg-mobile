import {
  SETTINGS_HYDRATE_INITIAL,
  SETTINGS_PERSONAL_UPDATE_NAME,
  SETTINGS_PERSONAL_UPDATE_USERNAME,
  SETTINGS_PERSONAL_UPDATE_EMAIL,
  SETTINGS_PERSONAL_UPDATE_ABOUT,
  SETTINGS_PERSONAL_SUCCESS
} from './types'
import * as base from '../variables'

export const hydrateInitial = () => (dispatch, getState) => {
  const { firstName, username, email, about } = getState().loggedUser
  const initialState = {
    name: firstName,
    username: username,
    email: email,
    about: about
  }
  dispatch({ type: SETTINGS_HYDRATE_INITIAL, payload: initialState })
}

export const sendPersonalForm = e => async (dispatch, getState) => {
  const {
    nameValue,
    usernameValue,
    emailValue,
    aboutValue
  } = getState().settings.personal

  fetch(`${base.API_URL}/api/settings/personal`, {
    credentials: 'include',
    method: 'post',
    headers: {
      'Content-type': 'application/x-www-form-urlencoded; charset=UTF-8'
    },
    body: `name=${nameValue}&username=${usernameValue}&email=${emailValue}&about=${aboutValue}`
  })
  .then(res => {
    if (res.status === 200) {
      dispatch({ type: SETTINGS_PERSONAL_SUCCESS })
      setTimeout(() => {
        dispatch({ type: SETTINGS_PERSONAL_SUCCESS })
      }, 2000)
    }
  })
}

export const updateName = value => dispatch => {
  dispatch({ type: SETTINGS_PERSONAL_UPDATE_NAME, payload: value })
}

export const updateUsername = value => dispatch => {
  dispatch({ type: SETTINGS_PERSONAL_UPDATE_USERNAME, payload: value })
}

export const updateEmail = value => dispatch => {
  dispatch({ type: SETTINGS_PERSONAL_UPDATE_EMAIL, payload: value })
}

export const updateAbout = value => dispatch => {
  dispatch({ type: SETTINGS_PERSONAL_UPDATE_ABOUT, payload: value })
}
