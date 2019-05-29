import { FETCH_AUTH } from './types'
import * as base from '../variables'

export const fetchAuth = () => dispatch => {
  fetch(`${base.API_URL}/api/authProfile`)
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
