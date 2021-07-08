import React from 'react';
import './secMission.css';

const SecMission = (props) => {
    const {image} = props;

    return (
        <div className='container'>
            <div className='row ml-5 mr-5'>
                <div className='col-12 col-md-6  pr-5 pl-5'>
                    <div className='mission-card text-center '>
                        <div className='mb-2'>
                            <img src={image.img1} alt='' height='300px' width='100%'/>
                            {/* <div className='mission-overlay'>mission</div> */}
                        </div>
                        <h2 className='mt-3 mb-3'><strong>Our Mission</strong></h2>
                        <div className='mission-line mb-3'/>
                        <p className='pl-5 pr-5 mb-4'>
                            Transform your dream vision in to reality with Srinivasan Software Solutions. Enhancing the Customer values by offering seamless service that accelerates the consistent business growth in a mutual way is our main motto. We are specialized in enriching the pro active business needs by building reliable standards and transparent work style.
                        </p>
                    </div>
                </div>
                <div className='col-12 col-md-6 pr-5 pl-5'>
                <div className='mission-card text-center '>
                        <div className='mb-2'>
                            <img src={image.img2} alt='' height='300px' width='100%'/>
                            {/* <div className='mission-overlay'>mission</div> */}
                        </div>
                        <h2 className='mt-3 mb-3'><strong>OUR INSIGHT</strong></h2>
                        <div className='mission-line mb-3'/>
                        <p className='pl-5 pr-5 mb-4'>
                            Srinivasan Software Solutions aims to deliver superior performance through qualitative planning and exploring innovative thoughts. Our Team is our strength and we always strive for operational excellence with customer centric approach that helps businesses of all sizes in achieving their strategic goals.
                        </p>
                    </div>
                </div>
            </div>
           
        </div>
    );
}

export default SecMission;
