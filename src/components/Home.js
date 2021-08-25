import React from 'react';
import ModelCard from './ModelCard';
import NavBarHome from './NavbarHome';

const Home = () => (
    <div className="App">
      <NavBarHome />
      <h1>Select a version :</h1>
      <ModelCard />
    </div>
  )
  
  
  export default Home;