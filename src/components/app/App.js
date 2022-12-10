import React from 'react'
import Aside from '../aside'
import Header from '../header'
import ItemList from '../item-list'

import logo from './logo.png'
import './App.css';

function App() {

  return (
    <main>
      <div className='logo-group'>
       <img src = {logo} alt = "logo pic"/>
      </div>
      <div className="container">
        <Aside />
        <div className = "layout">
          <Header />          
          <ItemList />
        </div>
      </div>
    </main>  
  );
}

export default App;


 