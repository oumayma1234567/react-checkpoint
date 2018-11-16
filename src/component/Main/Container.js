import React from "react";
import "./Main.css";

const Container = props => {
  return (
    <div className="contsats">
<div className="stats">
      <img className="img-service" src={props.stats.image} />
      <h3>{props.stats.title}</h3>
      <p>{props.stats.paragraphe}</p>
    </div>

    </div>
  )
};

export default Container;