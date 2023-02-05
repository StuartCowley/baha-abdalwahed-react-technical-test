import React, { useState } from 'react';
import "../styles/App.css";
import Search from './Search';
import SearchResults from './SearchResults';
import DemoImage from "../Images/200424060716-nasa-worm-logo.jpg"

const App = () => {
  const [ searchResults, setSearchResults ] = useState([]);
  return (
    <div className="App">
  <img
  className="nasa-logo"
  src={DemoImage}
  alt="nasalogo"
  />
  <Search setSearchResults={setSearchResults} />
  <SearchResults results={searchResults}/>
  </div>
  );
};


export default App;