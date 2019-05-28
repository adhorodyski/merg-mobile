import {
  REGISTER_USER,
  GET_REGISTER_FIRSTNAME,
  GET_REGISTER_USERNAME,
  GET_REGISTER_EMAIL,
  GET_REGISTER_PASSWORD,
  GET_REGISTER_PASSWORD_MATCH
} from './types'
import * as base from '../variables'

export const registerUser = navigation => (dispatch, getState) => {
  const {
    firstName,
    email,
    username,
    password,
    passwordMatch
  } = getState().registerForm

  fetch(
    `${base.API_URL}/api/user/register`, {
    credentials: 'include',
    method: 'post',
    headers: {
      'Content-type': 'application/x-www-form-urlencoded; charset=UTF-8'
    },
    body: `firstName=${firstName}&username=${username}&email=${email}&password=${password}&passwordMatch=${passwordMatch}`
  })
  .then(res => {
    const { url } = res
    if (url.includes('/home')) {
      dispatch({ type: REGISTER_USER })
      navigation.navigate('Home')
    } else {
      navigation.navigate('FollowerRegister')
    }
  })
  .catch(err => console.log(err))
}

export const getRegisterFirstName = value => dispatch => {
  dispatch({ type: GET_REGISTER_FIRSTNAME, payload: value })
}

export const getRegisterEmail = value => dispatch => {
  dispatch({ type: GET_REGISTER_EMAIL, payload: value })
}

export const getRegisterUsername = value => dispatch => {
  dispatch({ type: GET_REGISTER_USERNAME, payload: value })
}

export const getRegisterPassword = value => dispatch => {
  dispatch({ type: GET_REGISTER_PASSWORD, payload: value })
}

export const getRegisterPasswordMatch = value => dispatch => {
  dispatch({ type: GET_REGISTER_PASSWORD_MATCH, payload: value })
}
