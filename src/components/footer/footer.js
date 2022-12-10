import React from 'react';
import { connect } from 'react-redux';

import {
moreTickets
 } from "../../service/actions/actions-item-list";
import './footer.css'

const Footer = ({moreTicketsDispatch}) => {
   // console.log(moreTicketsDispatch);
   return (
    <button className = "footer" onClick={() => moreTicketsDispatch(5)}>
    <span>Показать еще 5 билетов </span>
    </button>
   )
}

const mapStateToProps = (state) => {
 const {ticketReducer} = state
 return {
   ticketReducer:ticketReducer
 }
}


const mapDispatchToProps = (dispatch) =>{
  return {
   moreTicketsDispatch: (amount) => dispatch(moreTickets(amount))
  } 
} 

export default connect(mapStateToProps, mapDispatchToProps)(Footer)