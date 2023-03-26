import React, { useState, useEffect } from "react";
import axios from "axios";
import './korzinka.css'

const Korzinka = () => {
    const [data,setData] = useState([])

        useEffect(() => {
          axios
            .get("https://641d861d4366dd7def3fe5f8.mockapi.io/Qpick")
            .then((res) => {
              let data = res.data.filter((item) => {
                return item.status2 == true;
              });
              console.log(data);
              setData(data);
            })
            .catch((error) => {
              console.log(error);
            });
        }, []);
  return (
    <div className="omega">
      {data.length > 0 &&
        data.map((item, index) => {
          return (
            <div className="card1" key={index}>
            
              <img className="img" src={item.img} alt={item.name} />
              <h3 className="name">
                <b>{item.name}</b>
              </h3>
              
            </div>
          );
        })}
    </div>
  );
};

export default Korzinka;
