import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import "./info.css";
export default function Info() {
    const params = useParams();
    const [Data, setData] = useState({});
    useEffect(() => {
        axios
            .get(`https://641d861d4366dd7def3fe5f8.mockapi.io/Qpick/${params.id}`)
            .then((res) => {
                setData({ ...res.data });
                console.log(res.data);
            });
    }, []);
    return (
      // <div className="container">
      <div className="tomon">
        <div className="card2">
          <img className="inf_img" src={Data.img} alt={Data.name} />
          <div className="imgs">
            <img className="img2" src={Data.img} alt={Data.name} />
            <img className="img2" src={Data.imgchet} alt="chet" />

            <img className="img2" src={Data.imgold} alt="oldi" />
          </div>
        </div>
        <div className="card3">
          <h1 className="txt1">
            <b>{Data.name}</b>
            {Data.name == "Iphone 12 pro" ||
            Data.name == "Iphone 12 pro selikonoviy" ||
            Data.name == "Iphone 13 pro" ? (
              <>
                <h4>
                  <b>Display:</b>
                  {Data.display}
                </h4>
                <h4>
                  <b>Chip:</b>
                  {Data.chip}
                </h4>
                <h4>
                  <b>Camera:</b>
                  {Data.camera}
                </h4>
                <h4>
                  <b>Zaryadi:</b>
                  {Data.power}
                </h4>
                <h4>
                  <b>OS:</b>
                  {Data.OS}
                </h4>
                <h4>
                  <b>Ogi'rligi:</b>
                  {Data.gm}
                </h4>
              </>
            ) : (
              <>
                <h4>
                  <b>Typi:</b>
                  {Data.type}
                </h4>
                <h4>
                  <b>Consturctor:</b>
                  {Data.constuctor1}
                </h4>
                <h4>
                  <b>Decoratsiya:</b>
                  {Data.oform}
                </h4>
                <h4>
                  <b>Ulagich:</b>
                  {Data.razem}
                </h4>
                <h4>
                  <b>Qo'shimcha:</b>
                  {Data.constuctor2}
                </h4>
                <h4>
                  <b>Functiyasi</b>
                  {Data.function}
                </h4>
              </>
            )}
            <h2 className="price">
              <b>Narxi: {Data.price}$</b>
            </h2>
            <button className="korz">
              Korzinka Qo'shish
            </button>
          </h1>
          <h4 className="lorem">
            <b>Malumot:</b> Lorem ipsum dolor sit amet consectetur adipisicing
            elit. Facere obcaecati aliquid nisi maiores praesentium minima,
            accusamus, placeat necessitatibus possimus maxime consectetur
            voluptates dicta dolor enim ratione cupiditate odio rem saepe.
          </h4>
        </div>
      </div>
      // </div>
    );
}
