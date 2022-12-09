import React, { useEffect } from 'react';
import { connect } from 'react-redux';


import ServiceFile from '../../service/service-file';
import './item-list.css'
import Item from '../item'
import Loader from '../errors/loading';
import { setKeySearch, setTicketsList, loadError } from '../../service/actions/actions-item-list'

const serviceFile = new ServiceFile()

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

  const { searchId, loadingAll, ticketsList } = state

useEffect(() => {
    dispatchID();
  }, [dispatchID])

  useEffect(() => {
    let delayLoad
    if (searchId && !loadingAll) {
      delayLoad = setInterval(() => dispatchList(searchId), 1000)
    }
    return () => clearInterval(delayLoad)
  }, [searchId, loadingAll, dispatchList])


  // useEffect(() => {
  //    dispatchList(searchId)    
  // }, [searchId, loadingAll, dispatchList])


  
  const sortTicket = (ticketList = []) => {
    return ticketList.slice().sort((a,b) => a-b )
  }

  const prevSortTicket = sortTicket(ticketsList)

  const loader = !loadingAll?  <Loader /> : null

  const renderTicketItem  = (prevSortTicket ) => {

    return prevSortTicket.slice(0, 5).map(el => {
     return  < Item 
     key={el.price*Math.random()*14}
     price={el.price}
     carrier={el.carrier}
     segments={el.segments}/>
  })
  }

  const renderTicket = renderTicketItem (prevSortTicket)

  return (
    <section className = "item-list"> 
    {loader}
    {renderTicket}
    </section>
  )
}

export default connect(mapStateToProps, mapDispatchToProps)(ItemList)