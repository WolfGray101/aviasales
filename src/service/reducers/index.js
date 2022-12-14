import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'
import { combineReducers, createStore, applyMiddleware } from 'redux'

import reducerAside from './reducer-aside'
import reducerHeader from './reducer-header'
import ticketReducer from './reducer-item-list'

const storeCreater = combineReducers({
  reducerAside,
  reducerHeader,
  ticketReducer,
})
const store = createStore(storeCreater, composeWithDevTools(applyMiddleware(thunk)))

export default store
