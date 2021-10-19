import React, { useEffect, useState } from 'react';
import './Course.css'
const Course = () => {
    const [courseData, setCourseData] = useState([])
    
    useEffect(() => {
        fetch('CourseData.JSON')
        .then((res) => res.json())
        .then((data) => setCourseData(data));
    },[])
    return (
        <div>
            <div className= "courses-container mt-5">
                <h1> Our Top Course </h1>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. </p>
            </div>
            <div className="course-cart">
                <div className="row">
                    {courseData.map((cd) => (
                        <div key={cd.id} className="col-md-6 col-lg-4 col-sm-12">
                                <div className="cart p-3 m-2 border border">
                                    <div className="course-img">
                                        <img src={cd.image} alt="" />
                                    </div>
                                <h2 className="mt-4">{cd.name}</h2>
                                <p className="mt-2">{cd.detiles}</p>
                                <strong className="mt-2">Price: {cd.price}</strong>
                                <br/>
                                <button className="enroll-btn"> ENROOL-NOW </button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};
export default Course;