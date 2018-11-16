import React from "react";
import "./Main.css";

const Affichplace = (props) => {
  return (
    <div className="affich-place">
<div className="place"><a href="#">
      <img className="img-Place" src={props.place.image} />
      <div className="contplace">
      <h3>{props.place.title}</h3>
      <p>{props.place.button}</p>
    </div>  </a>
      
    </div>
  </div>
  )
};

export default Affichplace;