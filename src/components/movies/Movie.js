import React from 'react';
import { Link } from 'react-router-dom';

const Movie = ({ id, title, year, poster }) => {

    return (
        <div className="col-md-4">
            <div className="card mt-3">
                <img src={poster} className="card-img-top" alt="" />
                <div className="card-body">
                    <h5 className="card-title">{title}</h5>
                    <h6 className="card-subtitle mb-2 text-muted see-details">{year}</h6>
                    <Link to={`/detail/${id}`} className="btn btn-primary see-details">See Details</Link>
                </div>
            </div>
        </div>
    );
}

export default Movie;