import React from 'react'
import Aside from '../aside'
import Header from '../header'
import ItemList from '../item-list'
import Footer from '../footer'

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
          <Footer />          
        </div>
      </div>
    </main>  
  );
}

export default App;


 