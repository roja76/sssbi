import React from 'react';

const page03 = () => {
    return (
        <div>
             <div className='teampage-header text-center'>
                <h2 className='text-white'><strong>RANGANATHAN TIRUMALAI ANANTHAMPULLAI</strong></h2>
                <h5 className='text-white'><a href='/home'>HOME </a> - Ranganathan Tirumalai Ananthampullai</h5>
            </div>
            <div className='container mt-5'>
                <div className='row mr-5 ml-5 mb-2'>
                    <div className='col-12 col-md-6'>
                        <div className='teampage-card'>
                            <img src='./assets/images/about/team_03.jpg' alt='' width='100%' height='580px'/>
                        </div>
                    </div>
                    <div className='col-12 col-md-6'>
                    <h3 className=''>RANGANATHAN TIRUMALAI ANANTHAMPULLAI</h3>
                    <h6 className=' text-color-2nd fs-18'>Director</h6>
                    <div className='header-line  mt-3 mb-3 bg-color-1st'/>
                    <p className='fs-16 mb-3 pr-5 teampage-text-color'>
                        Has over 8 years of splendid adroitness in Oracle BI, with end-to-end Enterprise
                        Solutions and ERP implementation. He is proficient in OBIEE, ETL Informatica, SQL, Cognos, ODI, BI Apps, Qlikview and MYSQL. He has strong domain knowledge of Enterprise Resource Planning and Supply Chain Management. He provides clear direction and sets roadmaps for our projects. He has a strong ability to influence and coach teams.  
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

export default page03;
