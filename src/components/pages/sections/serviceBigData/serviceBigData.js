import React from 'react';

import {SecReadMore} from '../index';
import bigData1 from '../images/Big-Data_1-1.png'

const ServiceBigData = () => {
    const headerData = {
        title: 'Bring value to your strategic business with SSS Big Data Delivery Excellence.',
        desc:'SSS, A Leader and Frontier in Big Data Innovation provide most rapid, high performing and accurate need based Big Data Analytics solutions to clients all over the World. Our simplified and powerful analyzing modules help to deliver scalable and faster data that boosts the real time performance.',
    } 
    const cardData = [
        {icon:<i class="fa fa-database"/>,title:'THE LAND SCAPE OF BIG DATA', desc:'The Big Data Phenomenon was propelled these days as there is a huge unprecedented volume of data available', readMore:'for companies who have no legacy infrastructure. This resulted in the early adoption of the latest and emerging line of Technology, people and process in Big Data that supports efficient data capture, storage and analysis of data. Big Data made Seamless Integration of various Technologies in an easy way by building an effective data-driven approach.'},
        {icon:<i class="fa fa-cloud"/>,title:'BIG DATA CLOUD INFRASTRUCTURE', desc:'SSS Big Data solutions offer meaningful and promising insights that create spark innovations and enhance business', readMore:'productivity in Cloud environment. Our Primary focus is on using various types of cloud environment structure that supports the large volumes, high velocity and different varied formats of Big Data with flexible retention and archiving.'},
        {icon:<i class="fa fa-square"/>,title:'BIG DATA GOVERNANCE', desc:'SSS’s rigorous and superior Big Data Governance methods help in maintaining the sensitive, confidential and quality of', readMore:'big data information for clients across the world. We ensure the best security of robust information with an intuitive environment by various data policy standards and services.'},
        {icon:<i class="fa fa-sort"/>,title:'AN END TO END ANALYTICS SOLUTION', desc:'SSS is committed in providing end to end Unique advanced analytics data management solutions to clients across ', readMore:'the globe. We have experienced team with good hands on expertise in implementing real time standard methodologies across multiple industries.'},
    ]

    return (
        <div className=' mt-5'>
            <h3>{headerData.title}</h3>
            <p className='fs-18'>{headerData.desc}</p>
            <div className='container w-75' >
                <div className='row mt-3'>
                    {cardData.map((e)=>(
                        <div className='col-12 col-md-6 p-3 '>
                            <div className='row'>
                                <div className='col-2 '>
                                <div className="service-icon d-flex justify-content-center">
                                <div className="icon_clipboard fs-25 fw-700 p-1">
                                    {e.icon}</div>
                                    </div>
                                </div>
                                <div className='col-10'> 
                                    <h5><strong>{e.title}</strong></h5>
                                    <p>{e.desc}<br/>
                                    <SecReadMore readMore={e.readMore}/>
                                    </p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <div className='mt-3'>
            <h5><strong>Accelerate your Business with SSS advanced Creative Technological Solutions</strong></h5>
            <img src={bigData1} alt='bigData' width='100%'/>
            </div>
            
        </div>
    );
}

export default ServiceBigData;
