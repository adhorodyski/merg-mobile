import { FETCH_CREATORS } from './types'
import * as base from '../variables'

export const fetchCreators = () => async dispatch => {
  await fetch(`${base.API_URL}/api/lists/usersCreators`)
  .then(res => {
    return res.json()
  })
  .then(data => {
    dispatch({ type: FETCH_CREATORS, payload: data })
  })
  .catch(err => console.log(err))
}
