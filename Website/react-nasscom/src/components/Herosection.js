import React from 'react';
import '../App.css';
import { Button } from './Button';
import './Herosection.css';

function Herosection() {
  return (
    <div className='hero-container'>
        <video src='/videos/video2.mp4' autoPlay loop muted></video>
      <div className='content'>
      {/* <p className='slide1'>Team ORBIT LOADERS presents</p> */}
       <h1 className='slide1name'>Heatwave & AQI Predictions</h1>
       <p className='slide1'>Welcome to our AI-powered monthly Heatwave and Air Quality Index prediction platform! We're excited to offer a cutting-edge solution for individuals, environmental agencies, and policymakers who need accurate monthly Heatwave Occurence and Air Quality Index predictions at a specific location.</p>
       {/* <p className='slide1'>We're excited to offer a cutting-edge solution for individuals, environmental agencies, and policymakers who need accurate monthly heatwaves and air quality index predictions in a specific location. </p> */}
       <p className='slide1'>So why wait? Try our platform today and get accurate predictions for tier-2 cities of Telangana like Adilabad, Karimanagar, Khammam, Nizamabad, Warangal.</p>
       <p className='slide2'>Don't let Heat Waves and Poor Air Quality catch you off guard - use our platform today!</p>
      <div className='hero-btns'>
        <Button
          className='btns'
          buttonStyle='btn--primary'
          buttonSize='btn--large'
          onClick={console.log('hey')}
        >
          LET'S GO
        </Button>
        </div>
      </div>
    </div>
  );
}

export default Herosection;
