const defaultState = {
  ticketsList: [],
  searchId: null,
  loading: true,
  error: false,
  loadingAll: false,
  countDispalayTicket: 5,
  progressLoading: 0,
}
   
function ticketReducer(state = defaultState, action = {}) {
  switch (action.type) {
    case 'SET_TICKETS':
      return {
        ...state,
        loading: false,
        error: false,
        progressLoading: state.progressLoading + 8,
        loadingAll: action.payload.stop,
        ticketsList: [...state.ticketsList, ...action.payload.tickets],
      }

    case 'SET_SEARCH_ID':
      return {
        ...state,
        searchId: action.payload,
      }

    case 'SET_COUNT_TICKETS':
      return {
        ...state,
        countDispalayTicket: action.payload,
      }

    case 'ERROR': {
      return {
        ...state,
        loading: false,
        error: true,
      }
    }

    default:
      return state
  }
}

export default ticketReducer
