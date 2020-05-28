import React, { useState, createContext, useEffect } from 'react';

export const MovieContext = createContext();

export const MovieProvider = props => {
    const [movies, setMovies] = useState([]);
    const [search, setSearch] = useState("");
    const [query, setQuery] = useState('man');
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        getMovies();
        setIsLoading(false);
    }, [query]);

    const getMovies = async () => {
        const responses = await fetch(`https://www.omdbapi.com/?s=${query}&apikey=${process.env.REACT_APP_OMDB_KEY}`);
        const data = await responses.json();
        setMovies(data.Search);
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