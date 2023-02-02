import React from 'react';
import '../App.css';
import Search from './Search';
import DemoImage from "../Images/200424060716-nasa-worm-logo.jpg"

const App = () => {
  return (
    <div className="App">
  <img
  className="nasa-logo"
  src={DemoImage}
  alt="nasalogo"
  />
  <Search />
  </div>
  );
}

export default App;         
