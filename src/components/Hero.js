import React from 'react'
import Hero from '../assets/img/nepal-kathmandu-city-view.jpg';
import '../assets/css/home.css';

const hero = () => {
    return (
        <div>
            <div className='hero'>
                <div className='image'>
                    <img src={Hero} alt="Hero" />
                    <div className='text'>
                        <h1>Find Your Perfect Stay – Easy, Fast & Hassle-Free!</h1>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default hero;
