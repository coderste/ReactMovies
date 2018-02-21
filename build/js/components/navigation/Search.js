import React, { Component } from 'react';

const Search = ({ onClick }) => (
    <div className="movie-search">
        <button onClick={onClick}>Search Movies</button>
    </div>
);
export default Search;
