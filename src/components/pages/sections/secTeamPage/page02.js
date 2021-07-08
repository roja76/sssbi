import React from 'react';

const Page02 = () => {
    return (
        <div>
             <div className='teampage-header text-center'>
                <h2 className='text-white'><strong>KALYANI RANGARAJAN</strong></h2>
                <h5 className='text-white'><a href='/home'>HOME </a> - Kalyani Rangarajan</h5>
            </div>
            <div className='container mt-5'>
                <div className='row mr-5 ml-5'>
                    <div className='col-12 col-md-6'>
                        <div className='teampage-card'>
                            <img src='./assets/images/about/team_02.jpg' alt='' width='100%' height='550px'/>
                        </div>
                    </div>
                    <div className='col-12 col-md-6'>
                    <h3 className='pt-1'>KALYANI RANGARAJAN</h3>
                    <h6 className='pt-1 text-color-2nd fs-18'>Founder - Director</h6>
                    <div className='header-line  mt-3 mb-3 bg-color-1st'/>
                    <p className='fs-16 mb-3 pr-5 teampage-text-color'>
                        Over 15 years of commendable record of building, leading, Supporting world class business intelligence and Data Warehousing solutions.
                        Kalyani has established SSS in 2009 with a motive to provide best-in-class, cost effective IT Services and Enterprise Solutions. She has an experience as a corporate consultant and extensively worked with many leading companies on Data Warehousing, ETL and Reporting Tools.
                    </p>
                    <h5 className='fs-22'>Infor</h5>
                    <div className='header-line   mb-2 bg-color-1st'/>
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

export default Page02;
