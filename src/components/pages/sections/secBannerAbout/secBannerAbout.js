import React from 'react';
import './secBannerAbout.css';

const SecBannerAbout = () => {
    return (
        <div className="about-banner-bgImg ">
            <div className="container-fluid " >
                <h4 className='fs-25 text-center text-white pt-5 ' ><a href='/home' className='text-white'>HOME </a> - ABOUT US</h4>
                <h1 className="fs-70 text-center text-white fw-700">
                    ABOUT US
                </h1>
            </div>
        </div>
    );
}

export default SecBannerAbout;
