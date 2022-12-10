const initialState = {
  allChecked: true,
  noneStop: true,
  oneStop: true,
  twoStop: true,
  threeStop: true,
}
const reducerAside = (state = initialState, action = {}) => {
  switch (action.type) {
    case 'ONE':
      return {
        ...state,
        oneStop: !state.oneStop,
      }
    case 'TWO':
      return {
        ...state,
        twoStop: !state.twoStop,
      }
    case 'THREE':
      return {
        ...state,
        threeStop: !state.threeStop,
      }
    case 'NONE':
      return {
        ...state,
        noneStop: !state.noneStop,
      }
    case 'ALL':
      return {
        allChecked: true,
        noneStop: true,
        oneStop: true,
        twoStop: true,
        threeStop: true,
      }
    case 'ALL_OFF':
      return {
        noneStop: false,
        oneStop: false,
        twoStop: false,
        threeStop: false,
      }
    default:
      return state
  }
}

export default reducerAside
