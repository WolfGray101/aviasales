import React from 'react'

import { Checkbox} from 'antd';
import { all, none, oneS, twoS, threeS} from '../../service/actions/actions-aside'
import { connect } from 'react-redux';
import 'antd/dist/reset.css'
import './aside.css'

const Aside = ({ state, allCheckedDispatch, noneStopDispatch,
  oneStopDispatch, twoStopDispatch, threeStopDispatch }) => {

  const checkedAll = state.noneStop && state.oneStop && state.twoStop && state.threeStop

  return (
   <aside className="aside">

        <h3>Количество пересадок</h3>
        <Checkbox id = 'allCheckBox' checked={checkedAll} onChange={allCheckedDispatch}> Все </Checkbox>
        <Checkbox id = 'nonStop'     checked={state.noneStop}  onChange={noneStopDispatch}> Без пересадок</Checkbox>
        <Checkbox id = 'oneStop'     checked={state.oneStop}  onChange={oneStopDispatch}> 1 пересадка</Checkbox>
        <Checkbox id = 'twoStop'     checked={state.twoStop} onChange={twoStopDispatch}> 2 пересадки</Checkbox>
        <Checkbox id = 'threeStop'   checked={state.threeStop} onChange={threeStopDispatch}> 3 пересадки</Checkbox>

   </aside>
  )

}
const mapStateToProps = ( state ) => {

  const {reducerAside} = state
  return {
    state: reducerAside
  }
}

const mapDispatchToProps = ( dispatch ) => {
  return {
     allCheckedDispatch: () => dispatch(all()),
     noneStopDispatch: () => dispatch(none()),
     oneStopDispatch: () => dispatch(oneS()),
     twoStopDispatch: () => dispatch(twoS()),
     threeStopDispatch: () => dispatch(threeS())
  }
}
export default  connect(mapStateToProps, mapDispatchToProps)(Aside)