import React from "react";
import "./Block.css";
import { Button2 } from "./Button2";

function Block() {
  return (
    <>
      <div className="block-card">
       <video src='/videos/video2.mp4' autoPlay loop muted></video> 
       <h1></h1>
        <div className="prediction-container">
          <div className="prediction-cards">
            <div className="prediction-card">
              <div className="image-container1">
                <img src="images/heatwave.jpg" alt=""></img>
              </div>

              <Button2
                className="month-btn"
                buttonStyle="btn1--primary"
                buttonSize="btn1--large"
                onClick={console.log("hey")}
                path = 'heatwaves'
              >
                Heatwave
              </Button2>
            </div>
            <div className="prediction-card">
              <div className="image-container1">
                <img src="images/aqi1.jpg"></img>
              </div>
              <Button2
                className="month-btn"
                buttonStyle="btn1--primary"
                buttonSize="btn1--large"
                onClick={() => {}}
                path = 'aqi'
              >
                AQI
              </Button2>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Block;
