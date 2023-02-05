import React from "react";
import PropTypes from "prop-types"
import "../styles/SearchResults.css"

const SearchResults = ({ results }) => {
    if (!results.length) {
        return <p></p>
    } else {
    return (
    <div className="search-results">
        {results.map((image) => {
            return (
                <img
                className="search-results_image"
                src={image}
                alt="Space_image"
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