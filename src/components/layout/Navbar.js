import React, { useContext } from 'react';
import { MovieContext } from '../../MovieContext';

const Navbar = () => {
    const { movies } = useContext(MovieContext);
    return (
        <nav className="navbar navbar-dark bg-dark mb-5">
            <div className="container">
                <span className="navbar-brand">React Movie</span>
                <div className="navbar-nav">
                    <a href="#" className="nav-item nav-link">List of Movie : {movies === undefined ? <p>0</p> : movies.length}</a>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;