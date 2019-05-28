import {
  LOGIN_USER,
  GET_LOGIN_EMAIL,
  GET_LOGIN_PASSWORD
} from './types'
import * as base from '../variables'

export const loginUser = navigation => (dispatch, getState) => {
  const { email, password } = getState().loginForm
  const form = {
    email: email,
    password: password
  }

  fetch(`${base.API_URL}/api/user/login`, {
    credentials: 'include',
    method: 'post',
    headers: {
      'Content-type': 'application/x-www-form-urlencoded; charset=UTF-8'
    },
    body: `email=${form.email}&password=${form.password}`
  })
  .then(res => {
    const { url } = res
    if (url.includes('/home')) {
        dispatch({ type: LOGIN_USER })
        navigation.navigate('Home')
      } else {
        navigation.navigate('SignIn')
      }
  })
  .catch(err => console.log(err))

}

export const getLoginEmail = value => dispatch => {
  dispatch({ type: GET_LOGIN_EMAIL, payload: value })
}

export const getLoginPassword = value => dispatch => {
  dispatch({ type: GET_LOGIN_PASSWORD, payload: value })
}
