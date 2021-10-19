import React from 'react';
import Banner from '../Banner/Banner';
import Footer from '../../Shared/Footer/Footer';
import Course from '../Courses/Course';
import Contact from '../Contact/Contact';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Course></Course>
            <Contact></Contact>
            <Footer></Footer>
        </div>
    );
};

export default Home;