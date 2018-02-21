import React, { Component } from 'react';

import Selection from './Selection';
import Slider from './Slider';
import Search from './Search';

class Navigation extends Component {
    componentDidMount() {
        fetch(this.props.url)
            .then(response => response.json())
            .then(data => this.props.setGenres(data.genres))
            .catch(error => console.log(error));
    }

    render() {
        const {
            genre,
            genres,
            onGenreChange,
            onChange,
            year,
            rating,
            runtime,
            onSearchClick,
        } = this.props;

        return (
            <section className="movie-nav">
                <Selection
                    genres={genres}
                    genre={genre}
                    onGenreChange={onGenreChange}
                />

                <Slider data={year} onChange={onChange} />
                <Slider data={rating} onChange={onChange} />
                <Slider data={runtime} onChange={onChange} />

                <Search onClick={onSearchClick} />
            </section>
        );
    }
}

export default Navigation;
