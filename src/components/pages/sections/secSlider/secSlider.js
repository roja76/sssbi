import React from 'react';
import Carousel from 'react-multi-carousel';
import './secSlider.css';

const SecSlider = (props) => {
  const { sliderUrl,responsive } = props;
    // const sliderUrl = [
    //     {src:"./assets/images/slider/bg1.png", alt:"slider4"},
    //     {src:"./assets/images/slider/bg2.png", alt:"slider5"},
    // ]
    // const responsive = {
    //     superLargeDesktop: {
    //       breakpoint: { max: 4000, min: 3000 },
    //       items: 1
    //     },
    //     desktop: {
    //       breakpoint: { max: 3000, min: 1024 },
    //       items: 1
    //     },
    //     tablet: {
    //       breakpoint: { max: 1024, min: 464 },
    //       items: 1
    //     },
    //     mobile: {
    //       breakpoint: { max: 4000, min: 0 },
    //       items: 1
    //     }
    //   };
    return (
        <div className="container-fluid">
            <div className="row">
                <div className="col-12 px-0">
                    <Carousel responsive={responsive} infinite={true} autoPlay={true} autoPlaySpeed={4000}>
                    {sliderUrl.map((row, index)=>{
                      return (
                        <div className="w-100" key={`secSlider${index}`}>
                          <img src={row.src} className="w-100" alt={row.alt} />
                          {row.data}
                          
                        </div>
                      )
                    })}
                    </Carousel>
                </div>
            </div>
        </div>
    );
}

export default SecSlider;
