import React from 'react';

const Header = () => {
    return (
        <section className="header-1">
        <div>
            <a href="#">
            <img className="logo-docplanner" 
            src="https://www.docplanner.com/img/logo-default-group-en.svg?v=1" 
            alt="Docplanner Group"/>	
            </a>
            </div>
        <div className="menu">
            <div className="liste">
            <a href="#" className="about">About us</a>
            <a href="#" className="career">Career</a>
        </div>
            <ul>
            <li> <a href=" #" className="docplanner">Docplanner</a>
            <ul>
            <li><a href="#">Marketing & PR</a></li>
            <li><a href="#">Customer success & sales</a></li>
            <li><a href="#">IT,Product,Design & UT</a></li>
            <li><a href="#">Finance & Administration</a></li>
            <li><a href="#">HR & more</a></li>
        </ul>
            </li>
        </ul>
</div>
</section>
        );
        
        
     
    

}

export default Header;