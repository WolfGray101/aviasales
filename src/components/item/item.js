import React from 'react';
import { Col, Row } from 'antd';

import './item.css'
import plane from './s7_plane.png'

const Item = () => {
   
  return (

    <div className = "card-item">
     
    <div className = 'card-item__header'>
     <div className ='price'>
       <h2> 13 500 p </h2>
      </div>
      
      <div className ='aviacompany_logo'>
        <img src = {plane} alt = 'flying company logo'/>
      </div>
    </div>

    <div className = 'card-item__info'>
      
      <div className = 'card-item__info-to'>
      <div className = 'card-item__info-details'>
        1 col-order-4
      </div >
      <div className = 'card-item__info-details'>
        2 col-order-3
      </div>
      <div className = 'card-item__info-details'>
        3 col-order-2
      </div>
      </div> 
     
      <div className = 'card-item__info-from'>
      <div className = 'card-item__info-details'>
        1 col-order-4
      </div >
      <div className = 'card-item__info-details'>
        2 col-order-3
      </div>
      <div className = 'card-item__info-details'>
        3 col-order-2
      </div>   
      </div>
  
    </div>
    </div>

  )
}

export default Item