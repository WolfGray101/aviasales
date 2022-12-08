import React from 'react'
import { connect } from 'react-redux'
import {changeFilterTickets} from '../../service/actions/actions-header'

import './header.css'

const Header = ({ state, changeFilterTickets }) => {  

  const headerBtn = [
    {
      name: 'Самый дешевый',
      value: 'lowcost',
    },
    {
      name: 'Самый быстрый',
      value: 'faster',
    },
    {
      name: 'Оптимальный',
      value: 'optimal',
    },
  ]

const btnList = headerBtn.map((e) => {

  let classValue = 'header-filter-button'
  if (state.ticketType === e.value) {
    classValue += ' active'
  }

  return (
    <button className={classValue} type="button" key={e.value} onClick={() => changeFilterTickets(e.value)}>
      {e.name}
    </button>
  )
})

return <div className="header">{btnList}</div>

}
const mapStateToProps = ( state ) => {
  const {reducerHeader} = state
  return {
    state: reducerHeader
  }
}
const mapDispatchToProps = ( dispatch ) => {
  return {
     changeFilterTickets: (payload) => dispatch(changeFilterTickets(payload))
  }
}
export default  connect(mapStateToProps, mapDispatchToProps)(Header)