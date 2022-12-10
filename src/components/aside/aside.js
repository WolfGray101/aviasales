import React from 'react'
import { Checkbox } from 'antd'
import { connect } from 'react-redux'

import { all, allOff, none, oneS, twoS, threeS } from '../../service/actions/actions-aside'

import 'antd/dist/reset.css'
import classes from './aside.module.scss'

function Aside({
  state,
  allCheckedOn,
  allCheckedOff,
  noneStopDispatch,
  oneStopDispatch,
  twoStopDispatch,
  threeStopDispatch,
}) {
  const isCheckedAll = state.noneStop && state.oneStop && state.twoStop && state.threeStop

  const switcher = () => {
    if (!isCheckedAll) {
      allCheckedOn()
    } else {
      allCheckedOff()
    }
  }

  return (
    <aside className={classes.aside}>
      <h3>Количество пересадок</h3>
      <Checkbox id="allCheckBox" checked={isCheckedAll} onChange={switcher}>
        {' '}
        Все{' '}
      </Checkbox>
      <Checkbox id="nonStop" checked={state.noneStop} onChange={noneStopDispatch}>
        {' '}
        Без пересадок
      </Checkbox>
      <Checkbox id="oneStop" checked={state.oneStop} onChange={oneStopDispatch}>
        {' '}
        1 пересадка
      </Checkbox>
      <Checkbox id="twoStop" checked={state.twoStop} onChange={twoStopDispatch}>
        {' '}
        2 пересадки
      </Checkbox>
      <Checkbox id="threeStop" checked={state.threeStop} onChange={threeStopDispatch}>
        {' '}
        3 пересадки
      </Checkbox>
    </aside>
  )
}
const mapStateToProps = (state) => {
  const { reducerAside } = state
  return {
    state: reducerAside,
  }
}

const mapDispatchToProps = (dispatch) => ({
  allCheckedOn: () => dispatch(all()),
  allCheckedOff: () => dispatch(allOff()),
  noneStopDispatch: () => dispatch(none()),
  oneStopDispatch: () => dispatch(oneS()),
  twoStopDispatch: () => dispatch(twoS()),
  threeStopDispatch: () => dispatch(threeS()),
})
export default connect(mapStateToProps, mapDispatchToProps)(Aside)
