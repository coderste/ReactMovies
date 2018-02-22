import React, { Component } from 'react';

import Header from '../components/header/Header';

import Navigation from '../components/navigation/Navigation';
import Movies from '../components/movies/Movies';

class App extends Component {
    state = {
        url: `https://api.themoviedb.org/3/genre/movie/list?api_key=${
            process.env.MIX_TMDB_API_KEY
        }&language=en-US`,
        moviesUrl: `https://api.themoviedb.org/3/discover/movie?api_key=${
            process.env.MIX_TMDB_API_KEY
        }&language=en-US&sort_by=vote_average.desc&include_adult=false&include_video=false&page=1`,
        genre: 'Comedy',
        genres: [],
        year: {
            label: 'year',
            min: 1990,
            max: 2018,
            step: 1,
            value: { min: 2000, max: 2018 },
        },
        rating: {
            label: 'rating',
            min: 0,
            max: 10,
            step: 1,
            value: { min: 8, max: 10 },
        },
        runtime: {
            label: 'runtime',
            min: 0,
            max: 300,
            step: 15,
            value: { min: 60, max: 120 },
        },
    };

    generateUrl = () => {
        const { genres, year, rating, runtime } = this.state;
        const selectedGenre = genres.find(
            genre => genre.name === this.state.genre
        );
        const genreId = selectedGenre.id;

        const moviesUrl =
            `https://api.themoviedb.org/3/discover/movie?` +
            `api_key=${process.env.MIX_TMDB_API_KEY}&` +
            `language=en-US&sort_by=vote_average.desc&` +
            `with_genres=${genreId}&` +
            `primary_release_date.gte=${year.value.min}-01-01&` +
            `primary_release_date.lte=${year.value.max}-12-31&` +
            `vote_average.gte=${rating.value.min}&` +
            `vote_average.lte=${rating.value.max}&` +
            `with_runtime.gte=${runtime.value.min}&` +
            `with_runtime.lte=${runtime.value.max}&` +
            `page=1&`;

        this.setState({ moviesUrl });
    };

    onSearchClick = () => {
        this.generateUrl();
    };

    onGenreChange = event => {
        this.setState({ genre: event.target.value });
    };

    setGenres = genres => {
        this.setState({ genres });
    };

    onChange = data => {
        this.setState({
            [data.type]: {
                ...this.state[data.type],
                value: data.value,
            },
        });
    };

    render() {
        return (
            <main className="site">
                <Header />
                <div className="site__container">
                    <div className="site__row">
                        <div className="site__left">
                            <Navigation
                                onChange={this.onChange}
                                onGenreChange={this.onGenreChange}
                                setGenres={this.setGenres}
                                onSearchClick={this.onSearchClick}
                                {...this.state}
                            />
                        </div>
                        <div className="site__right">
                            <Movies url={this.state.moviesUrl} />
                        </div>
                    </div>
                </div>
            </main>
        );
    }
}

export default App;
