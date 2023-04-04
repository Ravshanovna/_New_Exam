import React from "react";
import axios from "axios";
import "./card.css";
import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const Card = () => {
  const selector = useSelector((state) => state.CardFilter);
  const naviget = useNavigate();

  function Push(params) {
    naviget(`/Info/${params.id}`);
  }
  function Qora(params) {
    console.log(params,"qora");
    axios
      .put(
        `https://6422d0cd77e7062b3e236a04.mockapi.io/scxcvdfvcx/project1/${params}`,
        {
          status1: true
        }
      )
      .then((res) => {
        console.log(res.data);
        window.location.reload();
      })
      .catch((error) => {
        console.log(error);
      });
  }
  function Oq(params) {
    console.log(params,"oq");
    axios
      .put(`https://6422d0cd77e7062b3e236a04.mockapi.io/scxcvdfvcx/project1/${params}`,{
          status1: false
        })
      .then((res) => {
        console.log(res.data);
        window.location.reload();
      })
      .catch((error) => {
        console.log(error);
      });
  }
  return (
    <div className="container">
      <div className="row pb-5 text-center align-items-center">
        {selector.length > 0 ? (
          <>
            {selector.map((item, index) => {
              return (
                <div className="col-4" >
                  <div className="card my-3" key={index}>
                    {item.status1 == false ? (
                      <AiOutlineHeart
                        className="oq"
                        onClick={() => Qora(item.id)}
                      />
                    ) : (
                      <AiFillHeart
                        className="qora"
                        onClick={() => Oq(item.id)}
                      />
                    )}

                    <img
                      width={300}
                      height={350}
                      className=" mx-5 py-2"
                      src={item.img}
                      alt={item.name}
                    />
                    <h3 className="name">
                      <b>{item.name}</b>
                    </h3>
                    <button onClick={() => Push(item)} className="learn mx-5 mb-3 fw-bold fs-5">
                      Learn_More
                    </button>
                  </div>
                </div>
              );
            })}
          </>
        ) : (
          <>Loading...</>  
        )}
      </div>
    </div>
  );
};

export default Card;
