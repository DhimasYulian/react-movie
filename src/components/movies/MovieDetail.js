import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const MovieDetail = (props) => {

    const [detail, setDetail] = useState({});

    useEffect(() => {
        getDetail();
    }, [props.match.params.id])

    const getDetail = async () => {
        const responses = await fetch(`https://www.omdbapi.com/?i=${props.match.params.id}&apikey=${process.env.REACT_APP_OMDB_KEY}`);
        const data = await responses.json();
        // console.log(data);
        setDetail(data);
    }

    return (
        <React.Fragment>
            <div className="container">
                <h1 className="text-center my-4 mx-auto">Movie Details</h1>
                <hr />
                <Link to="/" className="btn btn-dark mt-3">Go Back</Link>
                <div className="card mt-3">
                    <div className="row no-gutter">
                        <div className="col-md-4">
                            <img src={detail.Poster} alt="" className="card-img img-fluid" />
                        </div>
                        <div className="col-md-8">
                            <div className="card-body">
                                <ul className="list-group">
                                    <li className="list-group-item"><h3>{detail.Title}</h3></li>
                                    <li className="list-group-item"><strong>Release : </strong>{detail.Released}</li>
                                    <li className="list-group-item"><strong>Genre : </strong>{detail.Genre}</li>
                                    <li className="list-group-item"><strong>Director : </strong>{detail.Director}</li>
                                    <li className="list-group-item"><strong>Actors : </strong>{detail.Actors}</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}

export default MovieDetail;