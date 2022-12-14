export const setKeySearch = (id) => ({ type: 'SET_SEARCH_ID', payload: id })

export const setTicketsList = (tickets) => ({ type: 'SET_TICKETS', payload: tickets })

export const moreTickets = (count) => ({ type: 'GET_MORE_TICKETS', payload: count })

export const loadError = () => ({ type: 'ERROR' })
