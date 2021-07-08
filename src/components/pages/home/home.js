import React from 'react';
import { SecService,SecSlider,SecTechnology, SecClients } from '../sections';
import './home.css';

const Home = () => {
  const sliderUrl = [
        {src:"./assets/images/slider/bg1.png", alt:"slider4", data:<div className='slider-overlay'>
        <div className='row ml-5 mr-5 '>
          <div className='col-6'>
            <p className='text-white fs-25 slider-text-line mt-5'>WE ARE SSS</p>
            <h1 className='text-white slider-text-line fs-40 mt-3 '>DELIVERING SMARTER <br/>BUSINESS INSIGHTS<br/> TO CLIENTS  </h1>
            <p className='text-white fs-20 pt-5 font-italic'>Take advantage of our experience and <br/>set it to work for you </p>
          </div>
          <div className='col-6 pt-5 text-center'>
              <h3 className='slider-text-font1 fs-30   mt-5 mb-5'>Ready to check out our work? </h3>
              <a className='slider-btn-1 mt-5 text-center'>YES, TAKE ME THERE </a>
            
           
          </div>
        </div>
      </div>},
        {src:"./assets/images/slider/bg2.png", alt:"slider5", data:<div className='slider-overlay p-5'>
        <div className='text-center mt-5'>
          <h1 className='text-white slider-text-line pt-5 pb-1 fs-35'>ACCELERATE YOUR BUSINESS </h1>
          <h1 className='text-white slider-text-line fs-35'>WITH SSS<br/>ADVANCED CREATIVE<br/>TECHNOLOGICAL SOLUTIONS</h1>
          <p className='text-white fs-20 pt-2 mb-5 font-italic'>For all your business needs </p>
          <a className='slider-btn-1 mt-5'>WHAT WE DO </a>
        </div>
      </div>},
    ]
    const responsive = {
        superLargeDesktop: {
          breakpoint: { max: 4000, min: 3000 },
          items: 1
        },
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 1
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 1
        },
        mobile: {
          breakpoint: { max: 4000, min: 0 },
          items: 1
        }
      };
      const cardData = [
        {icon:<i className="fa fa-line-chart" style={{fontSize:'25px'}} />,title:'Assured High Quality', desc:'We thrive on taking on client’s challenges and deliver high quality solutions'},
        {icon:<i className="fa fa-globe" />,title:'Huge Global Arena', desc:'We use our world-class methodologies and processes & tools'},
        {icon:<i className="fa fa-thumbs-o-up" />,title:'Guaranteed Satisfaction', desc:'We measure client satisfaction and deliver on time above client’s expectation'},
        {icon:<i className="fa fa-arrows-alt" />,title:'Accountbility', desc:'We take responsibility for both our successes and our failures.'},
    ]
    const clientUrl = [
      {src:"./assets/images/clients/c1.png", alt:"slider4"},
      {src:"./assets/images/clients/c2.png", alt:"slider5"},
      {src:"./assets/images/clients/c3.png", alt:"slider5"},
      {src:"./assets/images/clients/c1.png", alt:"slider4"},
      {src:"./assets/images/clients/c2.png", alt:"slider5"},
      {src:"./assets/images/clients/c3.png", alt:"slider5"},
      {src:"./assets/images/clients/c1.png", alt:"slider4"},
      {src:"./assets/images/clients/c2.png", alt:"slider5"},
      {src:"./assets/images/clients/c3.png", alt:"slider5"},
      {src:"./assets/images/clients/c1.png", alt:"slider4"},
      {src:"./assets/images/clients/c2.png", alt:"slider5"},
      {src:"./assets/images/clients/c3.png", alt:"slider5"},
  ]
  const clientResponsive = {
      superLargeDesktop: {
        breakpoint: { max: 4000, min: 3000 },
        items: 1
      },
      desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 1
      },
      tablet: {
        breakpoint: { max: 1024, min: 464 },
        items: 1
      },
      mobile: {
        breakpoint: { max: 4000, min: 0 },
        items: 5
      }
    };
    return (
        <div>
          <SecSlider sliderUrl={sliderUrl} responsive={responsive} />
          <SecService cardData={cardData} />
          <SecTechnology/>
          <div className='container'>
              <div className="row py-5">
                <div className="col-12 px-0 text-center">
                    <span className="text-color-4th">Our Partners</span>
                    <h2 className="my-0 fs-36 ">Clients who trust us</h2>
                    <span className="header-line mt-2 bg-color-1st"></span>
                   </div>
                <div className='col-12 px-0 pt-4'>
                  <SecClients sliderUrl={clientUrl} responsive={clientResponsive} />
                </div>
              </div>
            </div>
        </div>
    );
}

export default Home;
