import React from 'react'

import Aside from '../aside'
import Header from '../header'
import ItemList from '../item-list'

import classes from './App.module.scss'
import logo from './logo.png'
// import './App.css';

function App() {
  return (
    <main>
      <div className={classes['logo-group']}>
        <img src={logo} alt="logo" />
      </div>
      <div className={classes.container}>
        <Aside />
        <div className={classes.layout}>
          <Header />
          <ItemList />
        </div>
      </div>
    </main>
  )
}

export default App
