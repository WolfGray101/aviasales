import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { Spin, Progress } from 'antd'

import ServiceFile from '../../service/service-file'
import Item from '../item'
import Footer from '../footer'
import { setKeySearch, setTicketsList, loadError } from '../../service/actions/actions-item-list'

import classes from './item-list.module.scss'

const serviceFile = new ServiceFile()

const mapStateToProps = (state) => {
  const { ticketReducer, reducerHeader, reducerAside } = state

  return {
    state: ticketReducer,
    switcher: reducerHeader.ticketType,
    reducerAside,
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

function ItemList({ state, switcher, reducerAside, dispatchID, dispatchList }) {
  const { searchId, loadingAll, ticketsList, ticketsAmount, loading, progressBar, error } = state
  const { noneStop, oneStop, twoStop, threeStop } = reducerAside

  useEffect(() => {
    dispatchID()
  }, [dispatchID])

  useEffect(() => {
    let idInt
    if (searchId && !loadingAll) {
      idInt = setInterval(() => dispatchList(searchId), 1000)
    }
    return () => clearInterval(idInt)
  }, [searchId, loadingAll, dispatchList])

  const sortTicket = (ticketList = [], switcherProp = 'lowcost') => {
    switch (switcherProp) {
      case 'lowcost':
        return ticketList.slice().sort((a, b) => a.price - b.price)

      case 'faster':
        return ticketList.slice().sort((a, b) => a.segments[0].duration - b.segments[0].duration)

      case 'optimal':
        return ticketList
          .slice()
          .sort((a, b) => a.price - b.price)
          .slice(0, 100)
          .sort((a, b) => a.segments[0].duration - b.segments[0].duration)
      // minCost = minCost.slice(0, 100).sort((a, b) => a.segments[0].duration - b.segments[0].duration)
      // return minCost

      default:
        return ticketList
    }
  }

  const filterTicket = (prevSortTicket) => {
    const arrFilter = []
    if (noneStop) arrFilter.push(0)
    if (oneStop) arrFilter.push(1)
    if (twoStop) arrFilter.push(2)
    if (threeStop) arrFilter.push(3)

    if (arrFilter.length === 0) return []

    return prevSortTicket.filter((el) => {
      if (arrFilter.includes(el.segments[0].stops.length)) return el
      // ATTANTION
      return null
    })
  }

  const prevSortTicket = sortTicket(ticketsList, switcher)
  const filterTickets = filterTicket(prevSortTicket)

  const renderTicketItem = (filterTicketsProps) => {
    if (filterTicketsProps.length === 0) return 'По заданному параметру нет билетов'
    return filterTicketsProps
      .slice(0, ticketsAmount)
      .map((el) => (
        <Item key={el.price * Math.random() * 14} price={el.price} carrier={el.carrier} segments={el.segments} />
      ))
  }

  const renderTicket = renderTicketItem(filterTickets)
  const progressLine = <Progress percent={progressBar} showInfo />

  const isError = error ? 'Возникла ошибка загрузки' : null
  const spinner = loading ? <Spin /> : progressLine

  const content = !(loading || error) ? renderTicket : null
  const footer = !(loading || error || filterTickets.length === 0) ? <Footer /> : null

  return (
    <section className={classes['item-list']}>
      {isError}
      {spinner}
      {content}
      {footer}
    </section>
  )
}
const mapDispatchToProps = (dispatch) => ({
  dispatchID: () => dispatch(getTicketsID()),
  dispatchList: (id) => dispatch(getTicketsList(id)),
})
export default connect(mapStateToProps, mapDispatchToProps)(ItemList)
