import React, { Component } from 'react';
import './App.css';
import Header from './Header';
import Healthcar from "./Healthcar";
import Content from './component/Main/Content';
import Brands from './component/Main/Brands ';
import Stats from './component/Main/Stats';
import Officel from './component/Main/Officel';
import Place from './component/Main/Place';
import Footer from './Footer';
class App extends Component {
  render() {
    return (
      <div className="App">
       <Header/>
       <Healthcar/>
       <Content />
       <Brands />
       <Stats />
       <Officel/>
       <Place/>
       <Footer/>
      </div>
    );
  }
}

export default App;

