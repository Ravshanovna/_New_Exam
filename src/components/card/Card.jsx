import React from "react";
import axios from "axios";
import "./card.css";
// import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";
import { useSelector } from 'react-redux'


const Card = () => {
  const selector = useSelector(state => state.CardFilter)
  console.log(selector, '=>Redux');


  return (
    <div>
      <div className="omega">
        {
          (selector.length > 0) ?
            <>
              {selector.map((item, index) => {
                return (
                  <div className="card1" key={index}>
                    <img className="img" src={item.img} alt={item.name} />
                    <h3 className="name">
                      <b>{item.name}</b>
                    </h3>
                    <button className="batafsil">Batafsil</button>
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
