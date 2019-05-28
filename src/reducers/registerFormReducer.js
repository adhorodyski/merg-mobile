import {
  REGISTER_USER,
  GET_REGISTER_FIRSTNAME,
  GET_REGISTER_USERNAME,
  GET_REGISTER_EMAIL,
  GET_REGISTER_PASSWORD,
  GET_REGISTER_PASSWORD_MATCH
} from '../actions/types'

const initialState = {
  firstName: '',
  username: '',
  email: '',
  password: '',
  passwordMatch: ''
}

const reducer = (state = initialState, action) => {
  switch(action.type) {
    case REGISTER_USER:
      return {
        ...state
      }
    case GET_REGISTER_FIRSTNAME:
      return {
        ...state,
        firstName: action.payload,
      }
    case GET_REGISTER_USERNAME:
      return {
        ...state,
        username: action.payload,
      }
    case GET_REGISTER_EMAIL:
      return {
        ...state,
        email: action.payload,
      }
    case GET_REGISTER_PASSWORD:
      return {
        ...state,
        password: action.payload,
      }
    case GET_REGISTER_PASSWORD_MATCH:
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
