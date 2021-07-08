import React from 'react';
import { SecSecThumbSlider } from '..';
import "./secTechnology.css";

const SecTechnology = () => {
     const thumbSliderUrl = [
        {name:"Big Data", name1:"Business Analytics"},
        {name:"Digital Marketing", name1:"IOT"},
        {name:"Web Interface", name1:"Staffing Services"},
        {name:"IT Outsourcing", name1:"BI Solutions"},
        {name:"BI Solutions", name1:"IT Outsourcing"},
        {name:"Staffing Services", name1:"Web Interface"},
        {name:"IOT", name1:"Digital Marketing"},
        {name:"Business Analytics", name1:"Big Data"}
    ]
    const thumbResponsive = {
        superLargeDesktop: {
          breakpoint: { max: 4000, min: 3000 },
          items: 8
        },
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 8
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 8
        },
        mobile: {
          breakpoint: { max: 4000, min: 0 },
          items: 4
        }
      };
    return (
        <div className="bg-color-3rd py-5 sec-tech">
            <div className='container  '>
              <div className="row">
                <div className="col-12 px-0 text-center">
                    <span className="text-white">We Think & Deliver</span>
                    <h2 className="my-0 fs-36 text-white">Areas Of Expertise</h2>
                    <span className="header-line mt-2 bg-color-1st"></span>
                    <h3 className='fs-22  my-0 py-3 text-white'>Take time to talk to sss technical experts - Empower Your Organization</h3>
                    <p className='fs-14 text-color-4th mb-0 pb-4 text-white'>Srinivasan Software Solutions is committed to deliver fast, flexible and powerful solutions by following best implementation strategies and practices with best user experience. We are serving global clients with meticulous approach in executing prestigious projects by following strict time lines that helped us to create a unique mark of our own. We have an excellent team of professionals with wide spectrum of knowledge, skills and core competency in providing trust worthy services to clients all over the world.</p>
                </div>
                <div className='col-12 px-0'>
                    <SecSecThumbSlider thumbSliderUrl={thumbSliderUrl} thumbResponsive={thumbResponsive} />
                </div>
              </div>
            </div>
        </div> 
    );
}

export default SecTechnology;
