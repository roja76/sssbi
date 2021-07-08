import React from 'react';
import { SecBannerAbout, SecService,SecClients, SecMission,SecDesc ,SecTeam, SecTechnology, SecAboutCard, SecSteps } from '../sections';
import './about.css';


const About = () => {
    
    const cardData = [
        {icon:<i className="fa fa-line-chart" />,title:'Assured High Quality', desc:'We thrive on taking on client’s challenges and deliver high quality solutions'},
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

      const mission = {
        img1: './assets/images/about/mission_01.jpg',
        img2: './assets/images/about/mission_02.jpg'
      }
    return (
        <div>
           <SecBannerAbout/>
           <div className='about-bgcolor-1 mb-5'>
            <SecAboutCard/>
           {/* <SecDesc img='./assets/images/about/mission_img1.jpg'/> */}
           </div>
           <div className='mb-5'>
            <SecMission image={mission} />
           </div>
           <div className='pb- mb-5'>
            <SecSteps/>
           </div>
           <SecTeam/>
           <div className='about-bgcolor-1'>
           <SecService cardData={cardData}/>
           </div>
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

  export default About;
