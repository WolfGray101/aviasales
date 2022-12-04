import React from 'react'
import { Checkbox} from 'antd';

import 'antd/dist/reset.css'
import './aside.css'

const Aside = () => {
  const onChange = (e, id ) => {
    console.log(`checked = ${e.target.checked} ${e.target.id}`);
  };
  return (
   <aside className="aside">
        <h3>Количество пересадок</h3>
        <Checkbox id = {1} onChange={onChange}>Все</Checkbox>
        <Checkbox id = {2} onChange={onChange}>Без пересадок</Checkbox>
        <Checkbox id = {3} onChange={onChange}>1 пересадка</Checkbox>
        <Checkbox id = {4} onChange={onChange}>2 пересадки</Checkbox>
        <Checkbox id = {5} onChange={onChange}>3 пересадки</Checkbox>
    
   </aside>
  )
}

export default Aside