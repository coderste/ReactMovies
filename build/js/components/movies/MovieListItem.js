import React, { Component } from 'react';

const MovieListItem = ({ movie }) => {
    const { title, poster_path } = movie;
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
                        Year <span>2017</span>
                    </div>
                    <div className="movie-rating movie-info movie-info--right">
                        Rating <span>7.6</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MovieListItem;