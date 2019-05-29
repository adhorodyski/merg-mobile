import { FETCH_LOGGED_USER } from './types'
import * as base from '../variables'

export const fetchLoggedUser = () => dispatch => {
  fetch(`${base.API_URL}/api/self`)
  .then(res => {
    return res.json()
  })
  .then(data => {
    dispatch({
      type: FETCH_LOGGED_USER,
      payload: data.basicInformations
    })
  })
  .catch(err => console.log(err))
}
