import React from 'react';
import './secSteps.css'

const SecSteps = () => {
    return (
        <div className='steps-bgImg'>
            <div className='container'>
                <h1 className='text-center text-white mb-5' ><strong>SIMPLE STEPS . QUICK RESULTS</strong></h1>
                <div className='d-flex justify-content-between'>
                    <div className='d-flex'>
                        <div className='text-center p-4 steps-card'>
                            <i class="fa fa-pencil fs-50"></i>
                            <div className='steps-num'><strong>1</strong></div>
                        </div>
                        <h6 className='text-white text-center fs-25 pt-4 pl-4'>
                            <strong>WE PLAN & SKETCH .</strong>
                        </h6>
                    </div>
                    <div className='d-flex'>
                        <div className='text-center pt-4 steps-card'>
                        <i class="fa fa-diamond fs-50"></i>
                            <div className='steps-num'><strong>2</strong></div>
                        </div>
                        <h6 className='text-white text-center fs-25 pt-4 pl-4'>
                            <strong>WE DESIGN & DEVELOP .</strong>
                        </h6>
                    </div>
                    <div className='d-flex'>
                        <div className='text-center pt-4 pr-2 steps-card'>
                        <i class="fa fa-paper-plane fs-45"></i>
                            <div className='steps-num'><strong>3</strong></div>
                        </div>
                        <h6 className='text-white text-center fs-25 pt-4 pl-4'>
                            <strong>WE TEST & DELIVER .</strong>
                        </h6>
                    </div>

                </div>
            </div>
        </div>
    );
}

export default SecSteps;
