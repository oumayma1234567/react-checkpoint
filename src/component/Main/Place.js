import React from "react";
import Affichplace from "./Affichplace";
import "./Main.css";

const items=[
    {image:"https://www.docplanner.com/images/warsaw.png",
     title:"warsaw",
     button:<input type="button" value="SEE OPENINGS" className="button-place"/>,
    },
    {image:"https://www.docplanner.com/images/barcelona.png",
    title:"barcelone",
    button:<input type="button" value="SEE OPENINGS" className="button-place"/>,
   },
   {image:"https://www.docplanner.com/images/istanbul.png",
   title:"istanbul",
   button:<input type="button" value="SEE OPENINGS" className="button-place"/>,
  },
  {image:"https://www.docplanner.com/images/rome.png",
  title:"Rome",
  button:<input type="button" value="SEE OPENINGS" className="button-place"/>,
 },
 {image:"https://www.docplanner.com/images/mexico-city.png",
 title:"Mexicocity",
 button:<input type="button" value="SEE OPENINGS" className="button-place"/>,
},
{image:"https://www.docplanner.com/images/curitiba.png",
title:"Curitiba",
button:<input type="button" value="SEE OPENINGS" className="button-place"/>,
},
]

const Place = (props) => {
    return <div className="content-Place">
     {items.map((elm,i)=>
     <Affichplace key={i} place={elm}/>
     )} 
     </div>
  }
export default Place;