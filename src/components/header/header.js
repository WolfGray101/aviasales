import React from 'react'
import { connect } from 'react-redux'

import changeFilterTickets from '../../service/actions/actions-header'

import classes from './header.module.scss'

function Header({ state, changeFilterTicket }) {
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
    let classValue = classes['header-filter-button']
    if (state.ticketType === e.value) {
      classValue += ` ${classes.active}`
    }

    return (
      <button className={classValue} type="button" key={e.value} onClick={() => changeFilterTicket(e.value)}>
        {e.name}
      </button>
    )
  })

  return <div className={classes.header}>{btnList}</div>
}
const mapStateToProps = (state) => {
  const { reducerHeader } = state
  return {
    state: reducerHeader,
  }
}
const mapDispatchToProps = (dispatch) => ({
  changeFilterTicket: (payload) => dispatch(changeFilterTickets(payload)),
})
export default connect(mapStateToProps, mapDispatchToProps)(Header)
