import React from 'react';
import './secCareers.css';

const SecCareers = () => {
    return (
        <div className='mb-5'>
            <div className="careers-banner-bgImg ">
            <div className="container-fluid " >
                <h4 className='fs-25 text-center text-white pt-5 ' ><a href='/home' className='text-white'>HOME </a> - CAREERS</h4>
                <h1 className="fs-70 text-center text-white fw-700">
                CAREERS
                </h1>
            </div>
        </div>
        <div className='container mt-5 mb-3 text-center'>
            <div className='text-center'>
                <h2 className="mt-3"><strong>DO YOU LIKE CHALLENGES? DO YOU LOVE TO EXPLORE MORE? COME JOIN US!</strong></h2>
                <p className="fs-18 m-3 ">
                    At SSSBI, we tackle complex challenges, work hard, high-five and celebrate. We are fast learners, risk-takers. Together, we do tech talks, chats,team activities, fun and learning – Unlimited. We’ve built a team that does great work and we’re always looking for more whip-smart people to pipe up. 
                </p>
            </div>
            <div className='d-flex justify-content-center mt-5 mb-5'>
                <div className='w-75'>
                <div className="card cddb">
            <div className="card-body">
            <form>
                <div class="row">
                    <div class="col-6">
                    <input type="text" class="form-control" placeholder="Keyword"/>
                    </div>
                    <div class="col-6">
                    <input type="text" class="form-control" placeholder="Location"/>
                    </div>
                </div>
            </form>
            <button className='btn w-100 mt-2 btn-outline-dark search-btn' >Search Jobs</button>
            <div class="form-check form-check-inline mt-3">
                <input class="form-check-input" type="checkbox" id="inlineCheckbox1" value="freelance"/>
                <label class="form-check-label" for="inlineCheckbox1">Freelance</label>
                </div>
                <div class="form-check form-check-inline">
                <input class="form-check-input" type="checkbox" id="inlineCheckbox2" value="fullTime"/>
                <label class="form-check-label" for="inlineCheckbox2">Full Time</label>
                </div>
                <div class="form-check form-check-inline">
                <input class="form-check-input" type="checkbox" id="inlineCheckbox3" value="internship" />
                <label class="form-check-label" for="inlineCheckbox3">Internship</label>
                </div>
                <div class="form-check form-check-inline">
                <input class="form-check-input" type="checkbox" id="inlineCheckbox3" value="partTime" />
                <label class="form-check-label" for="inlineCheckbox3">Part Time</label>
                </div>
                <div class="form-check form-check-inline">
                <input class="form-check-input" type="checkbox" id="inlineCheckbox3" value="temporary" />
                <label class="form-check-label" for="inlineCheckbox3">Temporary</label>
                </div>
                
            </div>
          </div>
                </div>

            </div>
            <div>
                <hr/>
            </div>
            
        </div>

            
        </div>
    );
}

export default SecCareers;
