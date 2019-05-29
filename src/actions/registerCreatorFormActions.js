import {
  REGISTER_CREATOR,
  GET_CREATOR_REGISTER_NAMEDISPLAYED,
  GET_CREATOR_REGISTER_USERNAME,
  GET_CREATOR_REGISTER_EMAIL,
  GET_CREATOR_REGISTER_PASSWORD,
  GET_CREATOR_REGISTER_PASSWORD_MATCH
} from './types'
import * as base from '../variables'

export const registerCreator = navigation => async (dispatch, getState) => {
  const {
    nameDisplayed,
    email,
    username,
    password,
    passwordMatch
  } = getState().registerCreatorForm

  await fetch(
    `${base.API_URL}/api/user/creator/register`, {
    credentials: 'include',
    method: 'post',
    headers: {
      'Content-type': 'application/x-www-form-urlencoded; charset=UTF-8'
    },
    body: `nameDisplayed=${nameDisplayed}&username=${username}&email=${email}&password=${password}&passwordMatch=${passwordMatch}`
  })
  .then(res => {
    const { url } = res
    if (url.includes('/merging')) {
      dispatch({ type: REGISTER_CREATOR })
      navigation.navigate('Merging')
    } else {
      navigation.navigate('CreatorRegister')
    }
  })
  .catch(err => console.log(err))
}

export const getCreatorRegisterNameDisplayed = value => dispatch => {
  dispatch({ type: GET_CREATOR_REGISTER_NAMEDISPLAYED, payload: value })
}

export const getCreatorRegisterUsername = value => dispatch => {
  dispatch({ type: GET_CREATOR_REGISTER_USERNAME, payload: value })
}

export const getCreatorRegisterEmail = value => dispatch => {
  dispatch({ type: GET_CREATOR_REGISTER_EMAIL, payload: value })
}


export const getCreatorRegisterPassword = value => dispatch => {
  dispatch({ type: GET_CREATOR_REGISTER_PASSWORD, payload: value })
}

export const getCreatorRegisterPasswordMatch = value => dispatch => {
  dispatch({ type: GET_CREATOR_REGISTER_PASSWORD_MATCH, payload: value })
}
