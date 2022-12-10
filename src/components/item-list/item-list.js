import React, { useEffect } from 'react';
import { connect } from 'react-redux';


import ServiceFile from '../../service/service-file';
import './item-list.css'
import Item from '../item'
import Loader from '../errors/loading';
import { setKeySearch, setTicketsList, loadError } from '../../service/actions/actions-item-list'
import { Spin, Progress } from 'antd'


const serviceFile = new ServiceFile()

const mapStateToProps = ( state ) => {
  const {ticketReducer, reducerHeader, reducerAside} = state

  return {
    state: ticketReducer,
    switcher: reducerHeader.ticketType,
    reducerAside: reducerAside
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

const ItemList = ({state, switcher, reducerAside, dispatchID, dispatchList}) => {
  const { searchId, loadingAll, ticketsList } = state
const { noneStop, oneStop, twoStop, threeStop} = reducerAside

useEffect(() => {
    dispatchID();
  }, [dispatchID])

  useEffect(() => {
    let idInt
    if (searchId && !loadingAll) {
      idInt = setInterval(() => dispatchList(searchId), 1000)
    }
    return () => clearInterval(idInt)
  }, [searchId, loadingAll, dispatchList])

  // useEffect(() => {
  
  //   if (searchId && !loadingAll) {
  //     dispatchList(searchId)
  //   }
  // }, [searchId, loadingAll, dispatchList])


  const sortTicket = (ticketList = [], switcher) => {

    switch (switcher) {

      case 'lowcost':
        return ticketList.slice().sort((a,b) => a.price-b.price );

      case 'faster':
        return ticketList.slice().sort((a,b) => a.segments[0].duration-b.segments[0].duration );

      case 'optimal':
        let minCost = ticketList.slice().sort((a,b) => a.price-b.price )
        minCost = minCost.slice(0,100).sort((a,b) => a.segments[0].duration-b.segments[0].duration )
        return minCost;
      
        default:
        return ticketList;
    }
  }

  const filterTicket = (prevSortTicket) => {
    const arrFilter = []
    if (noneStop) arrFilter.push(0)
    if (oneStop) arrFilter.push(1)
    if (twoStop) arrFilter.push(2)
    if (threeStop) arrFilter.push(3)

    if (arrFilter.length === 0)  return "По заданному параметру нет билетов"

    return  prevSortTicket.filter( (el) => {if (arrFilter.includes(el.segments[0].stops.length))  return el})
    }
  
    
    
  const prevSortTicket = sortTicket(ticketsList, switcher)
  const filterTickets = filterTicket(prevSortTicket)

  const loader = !loadingAll?  <Loader /> : null

  const renderTicketItem  = (filterTickets ) => {
    if (typeof(filterTickets) === 'string') return filterTickets
    return filterTickets.slice(0, 5).map(el => {
     return  < Item 
     key={el.price*Math.random()*14}
     price={el.price}
     carrier={el.carrier}
     segments={el.segments}/>
  })
  }

  const renderTicket = renderTicketItem (filterTickets)

  return (
    <section className = "item-list"> 
    {loader}
    {renderTicket}
    </section>
  )
}

export default connect(mapStateToProps, mapDispatchToProps)(ItemList)