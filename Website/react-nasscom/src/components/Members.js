import React from "react";
import './Members.css';

function Members() {
  return (
    <>
      <div className="gallery">
        <div className="teaam">
          <h1>ORBIT LOADERS</h1>
          
          <div className="member-cards">
            <div className="member-card">
              <div className="image-container">
                <img src="images/shravs2.jpeg"></img>
              </div>
              <h2>Aramandla Sravanthi</h2>
              
            </div>
            <div className="member-card">
              <div className="image-container">
                <img src="images/sevanth1.jpeg"></img>
              </div>
              {/* <button className="booking-btn">ADILABAD</button> */}
              <h2>Sevanth Gajula</h2>
            </div>
            <div className="member-card">
              <div className="image-container">
                <img src="images/sravya.jpeg"></img>
              </div>
              {/* <button className="booking-btn">KHAMMAM</button> */}
              <h2>Sravya Nekkanti</h2>
            </div>
            <div className="member-card">
              <div className="image-container">
                <img src="images/saran.jpeg"></img>
              </div>
              {/* <button className="booking-btn">KHAMMAM</button> */}
              <h2>Dammavalam Sai Saran</h2>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Members;
