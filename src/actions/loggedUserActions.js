import { FETCH_LOGGED_USER } from './types'
import * as base from '../variables'

export const fetchLoggedUser = () => dispatch => {
  const user = {
    firstName: 'Adam',
    username: 'adhorodyski',
    nameDisplayed: 'Adam Horodyski',
    creator: true
  }
  dispatch({ type: FETCH_LOGGED_USER, payload: user })
}
