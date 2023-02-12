import React, { useState } from 'react'
import "../styles/search.css"
import PropTypes from "prop-types"
import getImages from '../requests/getImages';

const Search = ({ setSearchResults }) => {
    const [ value, setValue ] = useState();

    const handleSubmit = async (event) => {
        event.preventDefault();
        setSearchResults(await getImages(value));
    };

  return (
    <>
    <form className="search-form" onSubmit={handleSubmit}>
     <input
      className="search-input" 
      type="text"
      onChange={(e) => setValue(e.target.value)}
      />
      <button className="search-button" type="submit">
      <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200" />
      Go!
      </button>
      </form>
      </>
  );
};

Search.propTypes = {
  setSearchResults: PropTypes.func.isRequired,
}

export default Search;
