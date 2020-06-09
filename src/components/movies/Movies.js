import React, { useContext } from 'react';
import { MovieContext } from '../../MovieContext';
import Movie from './Movie';
import Spinner from '../layout/Spinner';

const Movies = () => {
    const { movies, isLoading, isError } = useContext(MovieContext);
    if (isLoading) {
        return <Spinner />
    } else {
        if (isError && !isLoading) {
            return (
                <h3 className="mt-4 text-center">Something went wrong</h3>
            )
        }
        if (movies === undefined && !isLoading) {
            return (
                <h3 className="mt-4 text-center">Movie not found</h3>
            )
        }
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