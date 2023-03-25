import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import {AiOutlineHeart} from 'react-icons/ai'
import {AiOutlineShoppingCart} from 'react-icons/ai'
import './navbar.css'
const Navbar = () => {
    
   const [search,setSearch]= useState(null)

  function Input(params){
    console.log(params);
  }

  return (
    <div className="nav">
      <h2>QPICK</h2>                           
      <input className="inp_search" type="text" onInput={(val)=> Input(val.target.value)} placeholder="Qidiruv" /> 
      <button type="button" className="position-relative heart">
        <AiOutlineHeart className="hearts" />
        <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
          0
        </span>
      </button>
      <button type="button" className="position-relative heart">
        <AiOutlineShoppingCart className="hearts" />
        <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
          0
        </span>
      </button>
    </div>
  );
};

export default Navbar;
