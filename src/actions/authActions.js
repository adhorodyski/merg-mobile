import { FETCH_AUTH, LOGOUT_USER } from './types'
import * as base from '../variables'

export const fetchAuth = () => async dispatch => {
  await fetch(`${base.API_URL}/api/authProfile`)
  .then(res => {
    return res.json()
  })
  .then(data => {
    dispatch({
      type: FETCH_AUTH,
      payload: data.authData
    })
  })
  .catch(err => console.log(err))
}

export const logoutUser = navigation => async dispatch => {
  await fetch(`${base.API_URL}/api/user/logout`, {
    method: 'post'
  })
  .then(res => {
    navigation.navigate('PrimaryChoice')
    dispatch({ type: LOGOUT_USER })
  })
}
