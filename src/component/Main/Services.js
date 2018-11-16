import React from "react";
import Container from "./Container"
import "./Main.css";
const items=[
  {image:"https://www.docplanner.com/img/flag.png",
  title: 'Leader in 10' ,
  paragraphe: 'Poland Turkey Spain Italy Mexico Brazil Argentina and Chile',
},
  {
    image:"https://www.docplanner.com/img/visits.png",
    title: '1 million appointments',
    paragraphe: 'booked last month',

  },
  {
    image:"https://www.docplanner.com/img/patients.png",
    title: '30 million unique patients ',
    paragraphe: 'visit us every month',

  },
{
  image:"https://www.docplanner.com/img/doctors.png",
  title: '2 million active doctors' ,
  paragraphe: 'trust	in our solutions',
  },
]
const Services = (props) => {
  return <div className="content-cart">
   {items.map((elm,i)=>
   <Container key={i} stats={elm}/>
   )} 
   </div>
}
export default  Services;