const initialState = {
  ticketType: 'lowcost',
}
const reducerHeader = (state = initialState, action = {}) => {
  switch (action.type) {
    case 'CHANGE':
      return {
        ...state,
        ticketType: action.payload,
      }
    default:
      return state
  }
}

export default reducerHeader
