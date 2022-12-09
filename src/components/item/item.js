import React from 'react';

import './item.css'

const Item = ({ price, carrier, segments}) => {
   
  const first = segments[0]
  const second = segments[1]
  const prices = price.toString().slice(0,2) + ' ' + price.toString().slice(2)

  const timeFlying = (segment) => `${Math.floor(segment.duration/60)} ч ${segment.duration%60} мин`

  const stopsAmount = (segment) => {
    return  segment.stops.length === 0? 'НЕТ ПЕРЕСАДОК' : `${segment.stops.length} ПЕРЕСАДКИ`
  }

  const stops = first.stops.join(', ')
  const stops2 = second.stops.join(', ')

  const timeToFly = (segment) => {
    const time= Date.parse(first.date); 
    return `${(new Date(time)).getHours() }:${(new Date(time)).getMinutes()}-${(new Date((time+segment.duration*60000)))
      .getHours() }:${(new Date((time+segment.duration*60000)))
        .getMinutes()} `
  };


  return (

    <div className = "card-item">
     
    <div className = 'card-item__header'>
     <div className ='price'>
       {`${prices} Р`}
      </div>
      
      <div className ='aviacompany_logo'>
        <img src = {`http://pics.avs.io/99/36/${carrier}.png`} alt = 'flying company logo'/>
      </div>
    </div>

    <div className = 'card-item__info'>
      
      <div className = 'card-item__info-to'>
      <div className = 'card-item__info-details'>
       <span> {`${first.origin} - ${first.destination}`} </span>
      </div >
      <div className = 'card-item__info-details'>
      <span> В ПУТИ </span>
      </div>
      <div className = 'card-item__info-details'>
       <span> {stopsAmount(first)}</span>
      </div>
      </div> 

      <div className = 'card-item__info-to'>
      <div className = 'card-item__info-details'>
        {timeToFly(first)} 
      </div >
      <div className = 'card-item__info-details'>
      {timeFlying(first)}
      </div>
      <div className = 'card-item__info-details'>
        {stops}
      </div>
      </div> 
     
      <div className = 'card-item__info-from'>
      <div className = 'card-item__info-details'>
       <span>{`${second.origin} - ${second.destination}`}</span>
      </div >
      <div className = 'card-item__info-details'>
      <span> В ПУТИ </span>
      </div>
      <div className = 'card-item__info-details'>
        <span>{stopsAmount(second)} </span>
      </div>
      </div> 
      <div className = 'card-item__info-to'>
      <div className = 'card-item__info-details'>
      {timeToFly(second)} 
      </div >
      <div className = 'card-item__info-details'>
      {timeFlying(second)}
      </div>
      <div className = 'card-item__info-details'>
        {stops2}
      </div>
       
      </div>
  
    </div>
    </div>

  )
}

export default Item