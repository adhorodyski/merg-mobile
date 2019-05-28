import {
  REGISTER_CREATOR,
  GET_CREATOR_REGISTER_NAMEDISPLAYED,
  GET_CREATOR_REGISTER_USERNAME,
  GET_CREATOR_REGISTER_EMAIL,
  GET_CREATOR_REGISTER_PASSWORD,
  GET_CREATOR_REGISTER_PASSWORD_MATCH
} from '../actions/types'

const initialState = {
  nameDisplayed: '',
  username: '',
  email: '',
  password: '',
  passwordMatch: ''
}

const reducer = (state = initialState, action) => {
  switch(action.type) {
    case REGISTER_CREATOR:
      return {
        ...state
      }
    case GET_CREATOR_REGISTER_NAMEDISPLAYED:
      return {
        ...state,
        nameDisplayed: action.payload,
      }
    case GET_CREATOR_REGISTER_USERNAME:
      return {
        ...state,
        username: action.payload,
      }
    case GET_CREATOR_REGISTER_EMAIL:
      return {
        ...state,
        email: action.payload,
      }
    case GET_CREATOR_REGISTER_PASSWORD:
      return {
        ...state,
        password: action.payload,
      }
    case GET_CREATOR_REGISTER_PASSWORD_MATCH:
      return {
        ...state,
        passwordMatch: action.payload,
      }
    default: {
      return state
    }
  }
}

export default reducer
