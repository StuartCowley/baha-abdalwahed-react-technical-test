import React, { useState } from 'react'
import "../styles/search.css"
import PropTypes from "prop-types"
import getImages from '../requests/getImages';

<<<<<<< HEAD
const Search = ({ setSearchResults }) => {
=======
const Search = () => {
>>>>>>> 2b529be3cca8260c63e7f030bc73dfa068f5aee7
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
