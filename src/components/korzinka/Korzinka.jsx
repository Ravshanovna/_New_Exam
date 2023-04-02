import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "./korzinka.css";
import { AiFillDelete } from "react-icons/ai";
const Korzinka = () => {
  const [data, setData] = useState([]);
  const naviget = useNavigate();

  useEffect(() => {
    axios
      .get("https://6422d0cd77e7062b3e236a04.mockapi.io/scxcvdfvcx/telephone")
      .then((res) => {
        let data = res.data.filter((item) => {
          return item.status == true;
        });
        console.log(data);
        setData(data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  function Batafsil(params) {
    naviget(`/Info/${params.id}`);
  }

  function Delete(params) {
    axios
      .put(
        `https://6422d0cd77e7062b3e236a04.mockapi.io/scxcvdfvcx/telephone/${params}`,
        {
          status: false
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
  return (
    <div className="container">
      <div className="row my-5">
        {data.length > 0 &&
          data.map((item, index) => {
            return (
              <div className="col-4">
                <div className="card text-center" key={index}>
                  <AiFillDelete
                    className="delete"
                    onClick={() => Delete(item.id)}
                  />
                  <img
                    className="img ps-5 ms-3"
                    width={300}
                    height={350}
                    src={item.img}
                    alt={item.name}
                  />
                  <h3 className="fw-bold h4 fs-3">{item.name}</h3>
                  <h2 className="h4">{item.narx}$</h2>
                  <button
                    onClick={() => Batafsil(item)}
                    className="batafsil mx-5 mb-3 fw-bold fs-5"
                  >
                   Learn_More
                  </button>

                </div>
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default Korzinka;
