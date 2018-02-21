import React, { Component } from 'react';

const Selection = ({ genres, genre, onGenreChange }) => (
    <div className="movie-selection movie-nav__item">
        <label>Genre</label>
        <select value={genre} onChange={onGenreChange}>
            {genres.map(genre => (
                <option value={genre.name} key={genre.id}>
                    {genre.name}
                </option>
            ))}
        </select>
    </div>
);

export default Selection;
