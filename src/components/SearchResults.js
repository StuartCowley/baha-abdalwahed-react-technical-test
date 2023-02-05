import React from "react";
import PropTypes from "prop-types"
import "../styles/SearchResults.css"

const SearchResults = ({ results }) => {

if (!results.length) {
        return <p>No Results</p>
    } else {
        return (
    <div className="search-results">
        {results.map((image) => {
            return (
                <img
                src={image}
                alt={`${image}`}
                key={image}
                />
            );
        })}
    </div>   
    );
};
};

SearchResults.propTypes = {
    results: PropTypes.arrayOf(PropTypes.string).isRequired,
};
export default SearchResults;