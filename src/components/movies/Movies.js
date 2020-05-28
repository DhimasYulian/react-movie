import React, { useContext } from 'react';
import { MovieContext } from '../../MovieContext';
import Movie from './Movie';
import Spinner from '../layout/Spinner';

const Movies = () => {
    const { movies, isLoading } = useContext(MovieContext);
    if (movies === undefined || movies.length === 0 || isLoading === true) {
        return <Spinner />
    } else {
        return (
            <React.Fragment>
                <div className="container">
                    <div className="row">
                        {movies.map((movie, index) => (
                            <Movie key={index} id={movie.imdbID} title={movie.Title} year={movie.Year} poster={movie.Poster} />
                        ))}
                    </div>
                </div>
            </React.Fragment>
        )
    }
}

export default Movies;