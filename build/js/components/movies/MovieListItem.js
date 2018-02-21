import React, { Component } from 'react';

const MovieListItem = ({ movie }) => {
    const { title, poster_path, vote_average, release_date } = movie;
    const imgUrl = `https://image.tmdb.org/t/p/w342/${poster_path}`;

    const backgroundImage = {
        backgroundImage: 'url(' + imgUrl + ')',
    };

    return (
        <div className="movie__item">
            <div className="movie__item-header">
                <div className="movie__item-poster" style={backgroundImage} />
            </div>
            <div className="movie__item-content">
                <div className="movie__item-title">
                    <h3>{title}</h3>
                </div>
                <div className="movie__item-info">
                    <div className="movie-year movie-info movie-info--left">
                        Year <span>{release_date}</span>
                    </div>
                    <div className="movie-rating movie-info movie-info--right">
                        Rating <span>{vote_average}</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MovieListItem;
