import React, { useState, createContext, useEffect } from 'react';

export const MovieContext = createContext();

export const MovieProvider = props => {
    const [movies, setMovies] = useState([]);
    const [search, setSearch] = useState("");
    const [query, setQuery] = useState('man');
    const [isLoading, setIsLoading] = useState(true);
    const [isError, setIsError] = useState(false);

    useEffect(() => {
        getMovies();
    }, [query]);

    const getMovies = async () => {
        setIsLoading(true);
        try {
            const responses = await fetch(`https://www.omdbapi.com/?s=${query}&apikey=${process.env.REACT_APP_OMDB_KEY}`);
            const data = await responses.json();
            setMovies(data.Search);
        } catch (err) {
            setIsError(true);
        }
        setIsLoading(false);
    }

    const updateSearch = e => {
        setSearch(e.target.value);
        console.log(search);
    }

    const getSearch = e => {
        e.preventDefault();
        setQuery(search);
        setSearch("");
    }

    const movieState = {
        movies,
        search,
        isLoading,
        isError,
        getSearch,
        updateSearch
    }

    return (
        <MovieContext.Provider value={movieState}>
            {props.children}
        </MovieContext.Provider>
    );
}


export default MovieContext;