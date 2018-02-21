import React, { Component } from 'react';

import Header from '../components/header/Header';

import Movies from '../components/movies/Movies';

class App extends Component {
    render() {
        return (
            <main className="site">
                <Header />
                <div className="site__container">
                    <div className="site__row">
                        <div className="site__left">Hello, World</div>
                        <div className="site__right">
                            <Movies />
                        </div>
                    </div>
                </div>
            </main>
        );
    }
}

export default App;
