import React, {useState} from 'react'
import { Radio } from 'antd';

import './header.css'

// const plainOptions = ['Apple', 'Pear', 'Orange'];

// const options = [
//   {
//     label: 'Самый дешевый',
//     value: 'Apple',
//   },
//   {
//     label: 'Самый быстрый',
//     value: 'Pear',
//   },
//   {
//     label: 'Оптимальный',
//     value: 'Orange',
//   },
// ];

const Header = () => {
  
//   const [value3, setValue3] = useState('Apple');
  
  
 const onChange = ({ target }) => {
  console.log(target)
    // console.log(`radio ${id} checked`, value);
    // setValue3(value);
  };

  return  (
    <header className="header" >

    
      <button className='header-filter-button active' onClick = {onChange} id= {1} value="a">Самый дешевый</button>
      <button className='header-filter-button' onClick = {onChange} id= {1} value="b">Самый быстрый</button>
      <button className='header-filter-button' onClick = {onChange} id= {1} value="d">Оптимальный</button>
    

    </header >
  )
}

export default Header