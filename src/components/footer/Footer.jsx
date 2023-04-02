import React from "react";
import "./footer.css";

const Footer = () => {
  return (
    <div className="footer">
      <div className="container pt-5 ">
        <div className="row align-items-center sec">
          <div className="col-2 ">
            <img
              className="nav_img"
              src="https://www.linkpicture.com/q/QPICK.png"
              alt="Logo"
            />
          </div>
          <div className="col-3">
            <h4>Popular</h4>
            <span>Programming</span> <br />
            <span>Books for children</span> <br />
            <span>Psychology</span>
            <br />
            <span>Business</span>
          </div>
          <div className="col-3">
            <h4>Information</h4>
            <span>Delivery</span> <br />
            <span>Payment</span> <br />
            <span>About the store</span>
            <br />
            <span>Business</span>
          </div>
          <div className="col-2">
            <h4>Help</h4>
            <span>Contacts</span> <br />
            <span>Purchase returns</span> <br />
            <span>Help for the buyer</span>
            <br />
            <span>Business</span>
          </div>
          <div className="col-2 fw-bold">
            <p>+998 97 706 26 31</p>
            <a href="tel:931343377"><button className="button1">Request a call</button></a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
