import React from 'react';

const Page04 = () => {
    return (
        <div>
             <div className='teampage-header text-center'>
                <h2 className='text-white'><strong>SATYA NARAYANA RAYAPUREDDI</strong></h2>
                <h5 className='text-white'><a href='/home'>HOME </a> - Satya Narayana Rayapureddi</h5>
            </div>
            <div className='container mt-5'>
                <div className='row mr-5 ml-5 mb-2'>
                    <div className='col-12 col-md-6'>
                        <div className='teampage-card'>
                            <img src='./assets/images/about/team_04.jpg' alt='' width='100%' height='550px'/>
                        </div>
                    </div>
                    <div className='col-12 col-md-6'>
                    <h3 className=''>SATYA NARAYANA RAYAPUREDDI</h3>
                    <h6 className=' text-color-2nd fs-18'>Director</h6>
                    <div className='header-line  mt-3 mb-3 bg-color-1st'/>
                    <p className='fs-16 mb-3 pr-5 teampage-text-color'>
                        Performance driven, highly organized, result oriented professional with over 18 years of progressive advancement in Programme / Project Management, consulting, technology service delivery and innovative leadership and achievements. Highly motivated self-starter who maintains high team morale during difficult times. A leading cross-cultural and cross-functional teams in USA, UK, Japan & India, applying the methodology and tools that fits the need.   
                    </p>
                    <h5 className='fs-22'>Infor</h5>
                    <div className='header-line  mb-2 bg-color-1st'/>
                    <p className='teampage-text-color mb-3 fs-16 teampage-infor'>
                        <strong>Phone :</strong> <a className='teampage-text-color' href="tel:12345">12345</a><br/>
                        <strong>Email :</strong> <a className='teampage-text-color' href="mailto:email@gmai.com">email@gmai.com</a>
                    </p>
                    <h5 className='fs-22'>Social</h5>
                    <div className='header-line  mb-2 bg-color-1st'/>
                    <div className='d-flex'>
                            <a href='#'>
                            <div className='team-icon-bg mr-3'>
                            <i className="fa fa-facebook fs-20 pl-1"/>
                            </div>
                            </a>
                            <a href='#'>
                            <div className='team-icon-bg mr-3'>
                            <i className="fa fa-linkedin fs-20"/>
                            </div>
                            </a>
                            <a href='#'>
                            <div className='team-icon-bg mr-3'>
                            <i className="fa fa-google-plus fs-20"/>
                            </div>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Page04;
