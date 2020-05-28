import React, { useContext } from 'react';

import { MovieContext } from '../../MovieContext';

const Search = () => {
    const props = useContext(MovieContext);
    return (
        <React.Fragment>
            <div className="container">
                <form onSubmit={props.getSearch}>
                    <div className="row mt-3 justify-content-center">
                        <div className="col-md-8">
                            <h1 className="text-center">Search Movies</h1>
                            <div className="input-group mb-3">
                                <input type="text" className="form-control" placeholder="Search Movies..." value={props.search} onChange={props.updateSearch} />
                                <div className="input-group-append">
                                    <button className="btn btn-dark" type="submit">Search</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </form>
                <hr />
                {props.isLoading === true ? <h1 className="text-center mx-auto">Loading...</h1> : ""}
            </div>
        </React.Fragment>
    );
}

export default Search;