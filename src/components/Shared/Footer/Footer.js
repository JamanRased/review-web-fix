import {faLink } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import './Footer.css'
const Footer = () => {
    const element = <FontAwesomeIcon icon={faLink} />
    return (
        <div className="mt-5 footer">
        <div className="">
            <div className="row">
                <div className="col-md-6 ">
                    <h2>Office Address</h2>
                    <small className="mt-5">Office: 631 Myra Street,New York</small>
                    <br />
                    <small className="mt-3">Phone: 404-379-5085</small>
                    <br />
                    <small className="mt-3">Fax: 678-914-9823</small>
                </div>
                <div className="col-md-6">
                    <h2>Follow Us</h2>
                    <div className="">
                        <h5>{element}</h5>
                    </div>
                </div>
            </div>
            <hr />
            <div className="botton text-center">
                <small>© 2021 Develop by Jaman Rased. All Rights Reserved.</small>
            </div>
        </div>
    </div>
    );
};

export default Footer;