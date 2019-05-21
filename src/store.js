import { createStore, applyMiddleware, compose } from 'redux'
import { composeWithDevTools } from 'remote-redux-devtools'
import thunk from 'redux-thunk'
import rootReducer from './reducers'

const middleware = [thunk]

const initialState = {}

const store = createStore(
  rootReducer,
  initialState,
  composeWithDevTools(
    applyMiddleware(...middleware)
  )
)

export default store
