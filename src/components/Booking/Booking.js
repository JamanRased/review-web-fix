import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';

const Booking = () => {
    const { courseId } = useParams();
    const [service, setService] = useState([]);
    useEffect(()=>{
        fetch(`http://localhost:3000/booking/${courseId}`)
        .then(res => res.json())
        .then(data => setService(data))
    })
    return (
        <div>
           <div className='detailes-Form'>
                <h4>Detailes Of : {courseId}</h4>
            </div>    
        </div>
    );
};

export default Booking;