import React, { useState } from "react";
import "./Months.css";
import { Button3 } from "./Button3";
import axios from "axios";


function Months() {
  const [state,setState]=useState(false);
  let url="https://internal.imd.gov.in/section/nhac/dynamic/FAQ_heat_wave.pdf";
  const [data, setdata]= useState('')
  let urln = window.location.href.split('/')
  var option = urln.pop()
  var location = urln.pop()
  function APIcall(month) {
    console.log(location)
    var backend_URL = `http://localhost:8000/Districts/Predictions/${option.toUpperCase()}/${location}/${month}`
    axios.get(backend_URL,)

    .then(function (response) {
      console.log(response);
      setdata (response.data)
    })
    .catch(function (error) {
      console.log(error);
    });
  }
  return (
    <>
      <div className="month-page">
      <video src='/videos/video2.mp4' autoPlay loop muted></video>
      <h1 className="location">{location}</h1>
        <div className="month-container">
          <div className="month-left">
            <h2 className="head">MONTHS</h2>
            <div className="month-buttons">
              <Button3
                className="month-btn"
                buttonStyle="btn1--primary"
                buttonSize="btn1--large"
                onClick={()=>{
                  APIcall('January')
                }}
              >
                JANUARY
              </Button3>
              <Button3
                className="month-btn"
                buttonStyle="btn1--primary"
                buttonSize="btn1--large"
                onClick={()=>{
                  APIcall('February')
                }}
              >
                FEBRUARY
              </Button3>
              <Button3
                className="month-btn"
                buttonStyle="btn1--primary"
                buttonSize="btn1--large"
                onClick={()=>{
                  APIcall('March')
                }}
              >
                MARCH
              </Button3>
              <Button3
                className="month-btn"
                buttonStyle="btn1--primary"
                buttonSize="btn1--large"
                onClick={()=>{
                  APIcall('April')
                }}
              >
                APRIL
              </Button3>
              <Button3
                className="month-btn"
                buttonStyle="btn1--primary"
                buttonSize="btn1--large"
                onClick={()=>{
                  APIcall('May')
                }}
              >
                MAY
              </Button3>
              <Button3
                className="month-btn"
                buttonStyle="btn1--primary"
                buttonSize="btn1--large"
                onClick={()=>{
                  APIcall('June')
                }}
              >
                JUNE
              </Button3>
              <Button3
                className="month-btn"
                buttonStyle="btn1--primary"
                buttonSize="btn1--large"
                onClick={()=>{
                  APIcall('July')
                }}
              >
                JULY
              </Button3>
              <Button3
                className="month-btn"
                buttonStyle="btn1--primary"
                buttonSize="btn1--large"
                onClick={()=>{
                  APIcall('August')
                }}
              >
                AUGUST
              </Button3>
              <Button3
                className="month-btn"
                buttonStyle="btn1--primary"
                buttonSize="btn1--large"
                onClick={()=>{
                  APIcall('September')
                }}
              >
                SEPTEMBER
              </Button3>
              <Button3
                className="month-btn"
                buttonStyle="btn1--primary"
                buttonSize="btn1--large"
                onClick={()=>{
                  APIcall('October')
                }}
              >
                OCTOBER
              </Button3>
              <Button3
                className="month-btn"
                buttonStyle="btn1--primary"
                buttonSize="btn1--large"
                onClick={()=>{
                  APIcall('November')
                }}
              >
                NOVEMBER
              </Button3>
              <Button3
                className="month-btn"
                buttonStyle="btn1--primary"
                buttonSize="btn1--large"
                onClick={()=>{
                  APIcall('December')
                }}
              >
                DECEMBER
              </Button3>
              
            </div>
          </div>
          <div className="month-right">
            <h2>PREDICTIONS</h2>
            <div className="value">
            {/* <input type="text" name="name" /> */}
            {data.AQI_bucket_calculated && <>
            AQI:{data.AQI_calculated}<br/>
            Purity Level:{data.AQI_bucket_calculated}<br/>
            <div className="image-contain">
              <img src="images/AQI.jpg"  width={250} height={200}></img>
              {/* <img src="images/aqilevel.jpg"  width={250} height={200} ></img> */}
            </div>
            </>}
            {data.HeatWave && <>
            Occurence: {data.HeatWave}<br/>
            Maximum Temperature: {data.Max_Temp}<br/>
            <div className="image-contain">
              {/* <img src="images/heatlevel.jpeg"  width={250} height={200} ></img> */}
              <img src="images/heatwave.jpg"  width={250} height={200} ></img>
            </div>
            <p>Check this <a href='https://internal.imd.gov.in/section/nhac/dynamic/FAQ_heat_wave.pdf' target="_blank">link</a> for IMD report.</p>
            </>}
            </div>
            
          </div>
        </div>
      </div>
    </>
  );
}

export default Months;
