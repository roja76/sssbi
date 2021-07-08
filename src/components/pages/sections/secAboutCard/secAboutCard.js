import React from 'react';
import './secAboutCard.css';

const SecAboutCard = () => {
    return (
        <div>
            <div className="container pt-5  pb-5">
      <div className="row">
      <div className="col-12 col-sm-8 col-md-5 col-lg-5">
          <div
            className="card cddb"
          >
            <div className="card-body">
              <img
                className="img-fluid jusity-content-center  ml-5"
                style={{
                  borderRadius: "400px",
                  display: "inline-block",
                  position: "relative",
                  left: "30%",
                }}
                src="https://i0.wp.com/www.sssbi.com/wp-content/uploads/2018/01/11-1.jpg?zoom=1.5&ssl=1"
                alt="hello"
              />
              <p className="fs-18 m-3 text-justify">
                We trust SSS to deliver Technical Solutions that meet our
                Stringent business needs & always in a timely & Cost efficiency
                manner. SSS has shown a great commitment to customer
                satisfaction and it is a pleasure to work with them.
              </p>
              <div
                className="row" style={{display: "inline-block",
                position: "relative",
                left: "50%"}}>
                <i className="fa fa-quote-right fs-50"></i>
              </div>
              <div
                className="row" style={{display: "block",
                position: "relative",
               }}>
               <h2 className='d-flex justify-content-center pt-4' style={{color:'#fff'}}>Gerry Mitchell</h2>
              </div>
            </div>
          </div>
        </div>
        <div className="col-12 col-sm-8 col-md-7 col-lg-7">
        <div className='pt-3  '>
        <p className="fs-16 pr-2 pl-2 d-flec justify-content-center text-justify">
                  Srinivasan Software Solutions, a Global Advanced Technological
                  Business solutions, is one of the fastest growing Information
                  Technology and consulting firm in India. Established in 2009
                  in the Temple town Tirupati with an intention to provide
                  world-className enterprise IT solutions for day-to-day client
                  needs as according to present emerging trends.
                </p>
          <p className='fs-16 pr-2 pl-2 d-flec justify-content-center text-justify'>We bring Customized solutions to companies of all sizes in different verticals that meet industry demands. We are committed to deliver fast, flexible and powerful solutions by following best implementation strategies and practices with best user experience. We are serving global clients with meticulous approach in technological business solutions executing prestigious projects by following strict time lines that helped us to create a unique mark of our own. We have an excellent team of professionals with wide spectrum of knowledge, skills and core competency in providing trust worthy services to clients all over the world.Also recognized as a pioneer in self paced online training that facilitates to building the Industry Thought leaders and Professional aspiring individuals as according to the need of today’s emerging markets. We always emphasize on connecting real time knowledge and superior enterprise knowledge & practical applications to enthusiastic learners of all levels in various latest tools and technologies.</p>
      
      </div></div>
       
      </div>
     
    </div>
        </div>
    );
}

export default SecAboutCard;
