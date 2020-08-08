import React from 'react';
import 'tachyons';
import './Hero.css';

const Hero = (props) => {
    return (
        <>
        <div className="hero">
            <h1>{props.title}</h1>
        </div>
        </>
    );
}

export default Hero