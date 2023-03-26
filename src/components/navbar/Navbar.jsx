import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import {AiOutlineHeart} from 'react-icons/ai'
import {AiOutlineShoppingCart} from 'react-icons/ai'
import './navbar.css'
import axios from "axios";
import { useDispatch , useSelector} from "react-redux";


const Navbar = () => {

  const dispatch = useDispatch()
  const selector = useSelector(state => state.NumberHeader)
  const [NumberLike , setNumberLike] = useState([])
  console.log(selector);

  useEffect(() => {
    axios.get("https://641d861d4366dd7def3fe5f8.mockapi.io/Qpick")
    .then((res)=>{
      dispatch({type:"YuborCard" , payload:res.data})
      let data = res.data.filter(item=>{
        return item.status1 == true
      })
      console.log(data);
      setNumberLike(data)
    })
    .catch(error=>{
      console.log(error);
    })
  }, []);

  function Input(params){
    axios.get("https://641d861d4366dd7def3fe5f8.mockapi.io/Qpick")
  .then((res)=>{
    let data = res.data.filter(item=>{
      return item.name.toLowerCase().includes(params.toLowerCase())
     })
    //  console.log(data);
     dispatch({type:"YuborCard" , payload:data})
  }) 
  }

  return (
    <div className="nav">
      <Link style={{textDecoration:"none",color:"black"}} to="/">
      
      <h2>QPICK</h2>                           
      </Link>
      <input className="inp_search" type="text" onInput={(val)=> Input(val.target.value)} placeholder="Qidiruv" /> 
      <button type="button" className="position-relative heart">
        <AiOutlineHeart className="hearts" />
        <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
          {NumberLike.length}
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
