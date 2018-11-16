import React from "react";
import Services from './Services'
import "./Main.css";
const Stats = () => {
  return (
    <div className="section__inner">
      <div className="stats-item">
        <div className="grid">
          <h1>
            The world's <br />
            biggest healthcare platform
          </h1>
         <p> We work from 6 offices all over the world, bringing Docplanner
          <br /> Group to life in almost 20 countries.</p>
        </div></div>
        <img src="https://www.docplanner.com/img/logo.png" className="img-stats"/>
      
      <Services/>
    </div>
  );
};
export default Stats;
