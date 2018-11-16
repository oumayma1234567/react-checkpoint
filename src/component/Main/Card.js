import React from "react";
import './Main.css'
import Select from './Select' 


const Card =(props)=>{
    return(
    <div className="item">
            <h3>{props.item.title}</h3>
            <p>{props.item.paragraphe}</p> 
            {props.item.selectCard && <Select/>}
            <img className="img-card"src={props.item.image}/> 
    </div>
    
 )
 }
 
 
export default Card;
/*import React from 'react';
import Select from './Select';

const cardForPatients = {
    titre:'For patients',
    soustitre:'Find a doctor, book a visit and solve any health-related doubt',
    image:'https://www.docplanner.com/img/screen-marketplace@2x.png',
    bgColor: '#00CCB1',

}
const cardForDoctors = {
    titre:"for the doctors",
    soustitre:"Save time managing visits and cut no-shows by half",
    image:"https://www.docplanner.com/img/screen-saas@2x.png",
    bgColor: '#3D83DF',
   
}


const Card = ({card: {bgColor, titre, soustitre, image,select}}) => {
    return (
        <div
            className="card"
            style={{backgroundColor: bgColor}}
            >
            <h4 className="card-title">
                {titre}
            </h4>
            <h1 className="card-subtitle">
                {soustitre}
            </h1>
            <img src ={image}/>
            <Select ={Select}/>
        </div>
    )
}
const Cards = () => {
    return <div className="the-cards">
        <Card card={cardForPatients} />
        <Card card={cardForDoctors } />
        
    </div>
    
}


export default Cards ;*/