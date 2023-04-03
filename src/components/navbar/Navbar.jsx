import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import {AiOutlineHeart} from 'react-icons/ai'
import {AiOutlineShoppingCart} from 'react-icons/ai'
import './navbar.css'
import axios from "axios";
import { useDispatch} from "react-redux";


const Navbar = () => {

  const dispatch = useDispatch()
  const [NumberLike , setNumberLike] = useState([])
  const[NumberKorzinka,setNumberKorzinka]= useState([])
  useEffect(() => {
    axios.get("https://6422d0cd77e7062b3e236a04.mockapi.io/scxcvdfvcx/project1")
    .then((res)=>{
      dispatch({type:"YuborCard" , payload:res.data})
      let data = res.data.filter(item=>{
        return item.status1 == true
      })
       dispatch({ type: "YuborCard2", payload: res.data });
       let data2 = res.data.filter((item) => {
         return item.status2 == true;
       });
      setNumberLike(data)
      setNumberKorzinka(data2)
    })
    .catch(error=>{
      console.log(error);
    })
  }, []);

  function InpVal(params){
    axios.get("https://6422d0cd77e7062b3e236a04.mockapi.io/scxcvdfvcx/project1")
  .then((res)=>{
    let data = res.data.filter(item=>{
      return item.name.toLowerCase().includes(params.toLowerCase())
     })
     dispatch({type:"YuborCard" , payload:data})
  }) 
  }

  return (
    <div className="main">
      <div className="px-4 bg-light">
        <div className="d-flex justify-content-between align-items-center py-3">
        <Link  to="/">
        <img
              className="imgee"
              src={"https://www.linkpicture.com/q/QPICK.png"}
              alt="rasm"
            />                     
      </Link>
      <input className="search" type="text" onInput={(val)=> InpVal(val.target.value)} placeholder="Qidiruv" /> 
      <Link to='/like'>
      <button type="button" className="btn position-relative ps-5 heart">
        <h2><AiOutlineHeart /></h2>
        <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
          {NumberLike.length}
        </span>
      </button>
      </Link>
      <Link to='/korzinka'>
      
      <button type="button" className=" btn position-relative heart">
        <h2><AiOutlineShoppingCart /></h2>
        <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
          {NumberKorzinka.length}
        </span>
      </button>
      </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
