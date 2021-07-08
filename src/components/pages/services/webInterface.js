import React from 'react';
import {SecReadMore, SecWebTabs} from '../sections/index';


const WebInterface = () => {
    const headerData = {
        title: 'High Performance user friendly web development services',
        desc:'Srinivasan Software Solutions, A Technology Leader in Web Interface Development, is one stop destination for all your Technological needs. We offer seamless services that ensure productive, highly functional, scalable, secured and expertly constructed solutions for all your business needs. We are committed to deliver exceptional end to end solutions by setting a bench mark in quality that gives satisfactory user experience',
    } 
    const cardData = [
        {icon:<i className="fa fa-desktop"/>,title:'WEB DEVELOPMENT', desc:'SSS has proven expertise in crafting your business thoughts in to web applications. We are specialized in developing', readMore:'Responsive Static, Dynamic, E commerce and Open Source website designs with advanced framework based on business requirements of clients.'},
        {icon:<i className="fa fa-building-o" style={{fontSize:'25px'}}/>,title:'CUSTOM SOFTWARE DEVELOPMENT', desc:'We use the best technologies in building user friendly Custom Develop applications that meets the needs of the client.', readMore:'We cater many industries through quality work flow by using latest technologies and advanced methodologies. Our expert team is well versed in providing need based solutions for client requirements across the globe with mere efficiency.'},
        {icon:<i className="fa fa-mobile pl-1" style={{fontSize:'33px'}} ></i>,title:'MOBILE APPLICATION DEVELOPMENT', desc:'SSS, a leading Mobile Application Development company, is driving the clients business by providing the best', readMore:'services through useful, elegant and qualitative apps. Keeping abreast of latest modern trends and industry needs with advanced functionality transforms inventive and creative applications with smart and simplified features in a broader way.'},
        {icon:<i className="fa fa-plug"/>,title:'DIGITAL MARKETING SERVICES', desc:'SSS, A Brand leader in the online marketing industry, is specialized in understanding customer prospects and', readMore:'plan and execute the Integrated Online Marketing strategy that determines the business process needs'},
    ]
    return (
        <div className='container-fluid'>
            <div className='row mb-2 pl-3 ml-3'>
                <div className='col-12 col-md-6 '>
                    <h3 className='row fs-18 fw-700 pl-5' style={{textAlign:'center'}}>{headerData.title}</h3>
                    <div className=' row d-flex justify-content-center'>
                    <p className='fs-13 pl-5 pt-4 pr-3'>{headerData.desc}</p></div>
                </div>
                <div className='col-12 col-md-6   '>
                    <img src='https://i0.wp.com/www.sssbi.com/wp-content/uploads/2018/01/Web-Interface_3-1.png?resize=600%2C379&ssl=1' alt='webinterface' height='200px' width='70%' />
                </div>
            </div>
            <div className='p-5 pl-3 ml-3' >
                <div className='row mt-3'>
                    {cardData.map((e)=>(
                        <div className='col-12 col-md-6 p-3 '>
                            <div className='row'>
                                <div className='service-icon d-flex justify-content-center'>
                                <div className='col-1 fs-20 ml-2 mt-1 pr-5'> 
                                    {e.icon}
                                </div>
                                </div>
                                <div className='col-10'> 
                                    <h5 className='fs-18 fw-700'>{e.title}</h5>
                                    <p className='fs-13'>{e.desc}<br/>
                                    <SecReadMore readMore={e.readMore}/>
                                    </p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <SecWebTabs/>
        </div>
    );
}

export default WebInterface;
