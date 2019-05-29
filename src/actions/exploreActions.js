import { LOAD_CREATORS_CHUNK } from './types'

export const loadCreatorsChunk = () => (dispatch, getState) => {
  const { allCreators } = getState().lists
  dispatch({ type: LOAD_CREATORS_CHUNK, payload: allCreators })
}
