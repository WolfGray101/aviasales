import React from 'react'
import { connect } from 'react-redux'

import { moreTickets } from '../../service/actions/actions-item-list'

import classes from './footer.module.scss'

function Footer({ moreTicketsDispatch }) {
  // console.log(moreTicketsDispatch);
  return (
    <button type="button" className={classes.footer} onClick={() => moreTicketsDispatch(5)}>
      <span>Показать еще 5 билетов </span>
    </button>
  )
}

const mapStateToProps = (state) => {
  const { ticketReducer } = state
  return {
    ticketReducer,
  }
}

const mapDispatchToProps = (dispatch) => ({
  moreTicketsDispatch: (amount) => dispatch(moreTickets(amount)),
})

export default connect(mapStateToProps, mapDispatchToProps)(Footer)
