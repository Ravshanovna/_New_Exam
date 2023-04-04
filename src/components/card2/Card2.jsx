import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import "./card2.css";
export default function Info() {
  const params = useParams();
  const [Data, setData] = useState({});
  const [ImgOzgartirish, setImgOzgartirish] = useState();
  useEffect(() => {
    axios
      .get(
        `https://6422d0cd77e7062b3e236a04.mockapi.io/scxcvdfvcx/project1/${params.id}`
      )
      .then((res) => {
        setData({ ...res.data });
        console.log(res.data);
      });
  }, []);

  function Img() {
    setImgOzgartirish(Data.img);
  }
  function Img_last() {
    setImgOzgartirish(Data.last_img);
  }
  function Img_first() {
    setImgOzgartirish(Data.first_img);
  }
  function Add(params) {
    axios
      .put(
        `https://6422d0cd77e7062b3e236a04.mockapi.io/scxcvdfvcx/project1/${params}`,
        {
          status2: true
        }
      )
      .then(() => {
        window.location.reload();
      });
  }
  return (
    <div className="container">
      <div className="row py-5">
       <div className="col">
       <div className="d-flex">
          <div className="col me-4">
            <img
              className="inf_img"
              src={ImgOzgartirish != null ? ImgOzgartirish : Data.img}
              alt={Data.name}
            />
          </div>
          <div className="col pt-4">
            <img
              onClick={Img}
              width={150}
              height={120}
              className="m-2 img"
              src={Data.img}
              alt={Data.name}
            />
            <img
              onClick={Img_last}
              width={150}
              height={100}
              className="m-2 img"
              src={Data.last_img}
              alt="last_img"
            />
            <img
              onClick={Img_first}
              width={150}
              height={100}
              className="m-2 img"
              src={Data.first_img}
              alt="firs_img"
            />
          </div>
        </div>
       </div>
        <div className="col pt-5">
          <h1 className="h4 text-center fw-bold fs-1">
            <b>{Data.name}</b>
            {Data.name == "Iphone 12 pro" ||
            Data.name == "Iphone 12 pro selikonoviy" ||
            Data.name == "Redmi 9" ||
            Data.name == "Redmi 10" ||
            Data.name == "Redmi Note 11 pro" ||
            Data.name == "Iphone 14" ||
            Data.name == "Poco x3 pro" ||
            Data.name == "Asus rog 5" ||
            Data.name == "Iphone 13 pro" ? (
              <>
                <h4>
                 {Data.narx}$
                </h4>
                <h4>
                  {Data.description}
                </h4>
              </>
            ) : (
              <div>
                <h4 className="fw-bold">
                  {Data.narx}$
                </h4>
                <h6>
                  {Data.description}
                </h6>
              </div>
            )}
            <button
              onClick={() => Add(Data.id)}
              className="korz py-2 px-4 fw-bold fs-5"
            >
              Add_ Basket
            </button>
          </h1>
        </div>
      </div>
    </div>
  );
}
