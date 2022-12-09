import React, { useEffect } from 'react';
import { connect } from 'react-redux';


import ServiceFile from '../../service/service-file';
import './item-list.css'
import Item from '../item'

import { setKeySearch, setTicketsList, loadError } from '../../service/actions/actions-item-list'

const serviceFile = new ServiceFile()


 const getTicketsID = () => (dispatch) => {
  serviceFile
    .getKey()
    .then((res) => dispatch(setKeySearch(res.searchId)))
    .catch(() => dispatch(loadError()))
}

 const getTicketsList = (id) => (dispatch) => {
  serviceFile
    .getTicket(id)
    .then((res) => dispatch(setTicketsList(res)))
    .catch((err) => {
      if (err.message !== 'Error: 500') {
        dispatch(loadError())
      }
    })
}

const ItemList = ({state, dispatchID, dispatchList}) => {

console.log(state);
  const { searchId, loadingAll, ticketList } = state

useEffect(() => {
    dispatchID();
  }, [dispatchID])

  // useEffect(() => {
  //   let delayLoad
  //   console.log(searchId);
  //   if (searchId && !loadingAll) {
  //     delayLoad = setInterval(() => dispatchList(searchId), 1000)
  //   }
  //   return () => clearInterval(delayLoad)
  // }, [searchId, loadingAll, dispatchList])
  useEffect(() => {
    
     dispatchList(searchId)    
  
  }, [searchId, loadingAll, dispatchList])

  return (
    <section className = "item-list"> 
    < Item />
    < Item />
    < Item />
    </section>
  )
}

const mapStateToProps = ( state ) => {
  const {ticketReducer} = state
  return {
    state: ticketReducer
  }
}

const mapDispatchToProps = ( dispatch ) => {
  return {
    dispatchID: () => dispatch(getTicketsID()),
    dispatchList: (id) => dispatch(getTicketsList(id))

  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ItemList)