import React, {Fragment}  from "react";
import Card from './Card';
  
const items=[
    
  {title:"For patients",
  paragraphe:"Find a doctor, book a visit and  solve any health-related doubt",
  image:"https://www.docplanner.com/img/screen-marketplace@2x.png",
  bgColor: '#00CCB1',
  
  selectCard:true
 },
  {title:"For doctors",
  paragraphe:"Save time managing visits and cut no-shows by half",
  image:"https://www.docplanner.com/img/screen-saas@2x.png",
  bgColor: '#3D83DF',
 
  selectCard:false
  }
]

const Content=(props)=>{ 
      return <div className="content-card"> 
      {items.map((elm,i)=>
     <Fragment>  
     <Card key={i} item={elm}/>
     </Fragment>
     )}
     </div>
     
}

export default Content;