const defaultState = {
  ticketsList: [],
  searchId: null,
  loading: true,
  error: false,
  loadingAll: false,
  ticketsAmount: 5,
  progressBar: 0,
}

function ticketReducer(state = defaultState, action = {}) {
  switch (action.type) {
    case 'SET_TICKETS':
      return {
        ...state,
        loading: false,
        error: false,
        progressBar: state.progressBar + 5,
        loadingAll: action.payload.stop,
        ticketsList: [...state.ticketsList, ...action.payload.tickets],
      }

    case 'SET_SEARCH_ID':
      return {
        ...state,
        searchId: action.payload,
      }

    case 'GET_MORE_TICKETS':
      return {
        ...state,
        ticketsAmount: state.ticketsAmount + action.payload,
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
