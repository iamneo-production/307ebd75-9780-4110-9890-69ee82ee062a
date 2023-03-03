import React from "react";
import "./Boxes.css";
import { Button1 } from "./Button1";
import { setdata } from "./data/data";

function Boxes() {
  return (
    <>
      <div className="boxes">
        <video src="/videos/video2.mp4" autoPlay loop muted></video>
        <div className="service">
          <h1></h1>
          {/* <p className="outer-p">
          Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
          nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat,
          sed diam voluptua.
        </p> */}
          <div className="service-cards">
            <div className="service-card">
              <div className="image-container2">
                <img src="images/karimnagar3.jpg"></img>
              </div>
              <Button1
                className="month-btn"
                buttonStyle="btn1--primary"
                buttonSize="btn1--large"
                path = 'KARIMNAGAR'
              >
                KARIMNAGAR
              </Button1>
            </div>
            <div className="service-card">
              <div className="image-container2">
                <img src="images/adilabad.jpg"></img>
              </div>
              {/* <button className="booking-btn">ADILABAD</button> */}
              <Button1
                className="month-btn"
                buttonStyle="btn1--primary"
                buttonSize="btn1--large"
                path = 'ADILABAD'
                
              >
                ADILABAD
              </Button1>
            </div>
            <div className="service-card">
              <div className="image-container2">
                <img src="images/khammam1.jpg"></img>
              </div>
              {/* <button className="booking-btn">KHAMMAM</button> */}
              <Button1
                className="month-btn"
                buttonStyle="btn1--primary"
                buttonSize="btn1--large"
                path = 'KHAMMAM'
              >
                KHAMMAM
              </Button1>
            </div>
          </div>
          <div className="service-cards1">
            <div className="service-card">
              <div className="image-container2">
                <img src="images/warangal.jpg"></img>
              </div>
              {/* <button className="booking-btn">WARANGAL</button> */}
              <Button1
                className="month-btn"
                buttonStyle="btn1--primary"
                buttonSize="btn1--large"
                path = 'WARANGAL'
              >
                WARANGAL
              </Button1>
            </div>
            <div className="service-card">
              <div className="image-container2">
                <img src="images/nizamabad.jpg"></img>
              </div>
              {/* <button className="booking-btn">NIZAMABAD</button> */}
              <Button1
                className="month-btn"
                buttonStyle="btn1--primary"
                buttonSize="btn1--large"
                path = 'NIZAMABAD'
              >
                NIZAMABAD
              </Button1>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default Boxes;
