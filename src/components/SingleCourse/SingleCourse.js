import React from 'react';
import { Link } from 'react-router-dom';

const SingleCourse = (service) => {
    const { id, name, price, image } = service;
    return (
        <div className="service pb-3">
            <img src={image} alt="" />
            <h3>{name}</h3>
            <h5>Price: {price}</h5>
            <Link to={`/booking/${id}`}>
                <button className="btn border bg-black text-white">Buy NOW</button>
            </Link>
        </div>
    );
};

export default SingleCourse;