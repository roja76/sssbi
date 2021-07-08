import React from 'react';

const SecDesc = (props) => {
    const {img} = props
    return (
        <div className='p-5'>
            <div className='container'>
                <div className='row m-5'>
                    <div className='col-12 col-md-6'>
                        <img src={img} alt='' height="300px" width='100%'/>
                    </div>
                    <div className='col-12 col-md-6'>
                        <p className='text-secondary fs-20 pt-3'>
                            Srinivasan Software Solutions, a Global Advanced Technological Business solutions, is one of the fastest growing Information Technology and consulting firm in India. Established in 2009 in the Temple town Tirupati with an intention to provide world-class enterprise IT solutions for day-to-day client needs as according to present emerging trends.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default SecDesc;
