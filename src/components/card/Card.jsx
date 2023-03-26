import React from "react";
import axios from "axios";
import "./card.css";
import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";
import { useSelector} from 'react-redux'
import { useNavigate } from "react-router-dom";


const Card = () => {
  const selector = useSelector(state => state.CardFilter)
  const naviget = useNavigate()

  function Batafsil(params) {
    naviget(`/Info/${params.id}`)
  }
  function Qora(params){
    axios.put(`https://641d861d4366dd7def3fe5f8.mockapi.io/Qpick/${params}` ,{
      status1:true
    })
    .then((res)=>{
      console.log(res.data);
      window.location.reload()
    })
    .catch((error)=>{
      console.log(error);
    })
  }
  function Oq(params) {
    axios.put(`https://641d861d4366dd7def3fe5f8.mockapi.io/Qpick/${params}` ,{
      status1:false
    })
    .then((res)=>{
      console.log(res.data);
      window.location.reload()
    })
    .catch((error)=>{
      console.log(error);
    })
  }
  
  return (
    <div>
      <div className="omega">
        {
          (selector.length > 0) ?
            <>
              {selector.map((item, index) => {
                return (
                  <div className="card1" key={index}>
                    {
                      item.status1 == false ?
                      <AiOutlineHeart className="oq"  onClick={()=> Qora(item.id)}/>
                      :
                      <AiFillHeart className="qora"  onClick={()=> Oq(item.id)}/>
                    }

                    <img className="img" src={item.img} alt={item.name} />
                    <h3 className="name">
                      <b>{item.name}</b>
                    </h3>
                    <button onClick={()=>{Batafsil(item)}} className="batafsil">Batafsil</button>
                  </div>
                );
              })}
            </>
            :
            <>loading...</>
        }
      </div>
    </div>
  );
};

export default Card;
