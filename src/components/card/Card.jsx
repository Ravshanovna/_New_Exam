import React, { useEffect, useState } from "react";
// import {useDispatch,useSelector} from "react-redux"
import axios from "axios";
import "./card.css";
import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";

const Card = () => {
  const [mass, setMass] = useState([]);
  useEffect(() => {
    axios
      .get("https://api.npoint.io/2a2f92708e1ef812502c")
      .then((ress) => {
        setMass(ress.data);
        console.log(ress.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  return (
    <div>
      <div className="omega">
        {mass.map((item, index) => {
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
      </div>
    </div>
  );
};

export default Card;
