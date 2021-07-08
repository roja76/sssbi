import React from 'react';
import Carousel from 'react-multi-carousel';
const SecClients = (props) => {
  const { sliderUrl,responsive } = props;
    // const sliderUrl = [
    //     {src:"./assets/images/clients/c1.png", alt:"slider4"},
    //     {src:"./assets/images/clients/c2.png", alt:"slider5"},
    //     {src:"./assets/images/clients/c3.png", alt:"slider5"},
    //     {src:"./assets/images/clients/c1.png", alt:"slider4"},
    //     {src:"./assets/images/clients/c2.png", alt:"slider5"},
    //     {src:"./assets/images/clients/c3.png", alt:"slider5"},
    //     {src:"./assets/images/clients/c1.png", alt:"slider4"},
    //     {src:"./assets/images/clients/c2.png", alt:"slider5"},
    //     {src:"./assets/images/clients/c3.png", alt:"slider5"},
    //     {src:"./assets/images/clients/c1.png", alt:"slider4"},
    //     {src:"./assets/images/clients/c2.png", alt:"slider5"},
    //     {src:"./assets/images/clients/c3.png", alt:"slider5"},
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
    //       items: 5
    //     }
    //   };
    return (
        <div className="container-fluid">
            <div className="row">
                <div className="col-12  px-0">
                    <Carousel responsive={responsive} arrows={false} infinite={true} autoPlay={true} autoPlaySpeed={3000}>
                    {sliderUrl.map((row, index)=>{
                      return (
                        <div className="w-100 border p-3" key={`secSlider${index}`}>
                          <img src={row.src} className="w-100" alt={row.alt} />
                        </div>
                      )
                    })}
                    </Carousel>
                </div>
            </div>
        </div>
    );
}

export default SecClients;
