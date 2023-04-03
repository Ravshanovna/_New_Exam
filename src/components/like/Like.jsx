import React, { useState,useEffect } from 'react';
import axios from 'axios';
import './like.css'
import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";
import { useNavigate } from "react-router-dom";


const Like = () => {
    const [data,setData]= useState([])
  const naviget = useNavigate();

    useEffect(() => {
      axios
        .get("https://6422d0cd77e7062b3e236a04.mockapi.io/scxcvdfvcx/project1")
        .then((res) => {
          let data = res.data.filter(item=>{
            return item.status1 == true
          })
          console.log(data);
          setData(data)
        })
        .catch((error) => {
          console.log(error);
        });
    }, []);

  function Qora(params) {
    axios
      .put(`https://6422d0cd77e7062b3e236a04.mockapi.io/scxcvdfvcx/project1/${params}`, {
        status1: true,
      })
      .then((res) => {
        console.log(res.data);
        window.location.reload();
      })
      .catch((error) => {
        console.log(error);
      });
  }
  function Oq(params) {
    axios
      .put(`https://6422d0cd77e7062b3e236a04.mockapi.io/scxcvdfvcx/project1/${params}`, {
        status1: false,
      })
      .then((res) => {
        console.log(res.data);
        window.location.reload();
      })
      .catch((error) => {
        console.log(error);
      });
  }

  function Push(params) {
    naviget(`/Info/${params.id}`);
  }

    return (
        <div>
            {
              (data.length>0)&& data.map((item,index)=>{
                return (
                  <div className="card1" key={index}>
                    {item.status == true ? (
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

                    <img className="img" src={item.img} alt={item.name} />
                    <h3>
                      <b>{item.name}</b>
                    </h3>
                    <button
                      onClick={() => {
                        Push(item);
                      }}
                    >
                      Learn_More
                    </button>
                  </div>
                );
              })  
            }
        </div>
    );
}

export default Like;
