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
        .get("https://641d861d4366dd7def3fe5f8.mockapi.io/Qpick")
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
      .put(`https://641d861d4366dd7def3fe5f8.mockapi.io/Qpick/${params}`, {
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
      .put(`https://641d861d4366dd7def3fe5f8.mockapi.io/Qpick/${params}`, {
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

  function Batafsil(params) {
    naviget(`/Info/${params.id}`);
  }

    return (
        <div className='omega'>
            {
              (data.length>0)&& data.map((item,index)=>{
                return (
                  <div className="card1" key={index}>
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

                    <img className="img" src={item.img} alt={item.name} />
                    <h3 className="name">
                      <b>{item.name}</b>
                    </h3>
                    <button
                      onClick={() => {
                        Batafsil(item);
                      }}
                      className="batafsil"
                    >
                      Batafsil
                    </button>
                  </div>
                );
              })  
            }
        </div>
    );
}

export default Like;
