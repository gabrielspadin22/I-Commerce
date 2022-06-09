import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css'

function Footer() {
    return (
        <div className='footer'>
            <div>I-Commerce 2022</div>
            <Link className='btn btn-secondary p-2 bg-transparent border-0'to={'/createproduct'}>?</Link>
        </div>
    );
}

export default Footer;