import React from 'react'
import Carousel from 'react-multi-carousel';
import "./secThumbSlider.css"

function SecThumbSlider(props) {
   const { thumbSliderUrl, thumbResponsive} = props;
    
    //    const thumbSliderUrl = [
    //     {name:"Big Data", name1:"Business Analytics"},
    //     {name:"Digital Marketing", name1:"IOT"},
    //     {name:"Web Interface", name1:"Staffing Services"},
    //     {name:"IT Outsourcing", name1:"BI Solutions"},
    //     {name:"BI Solutions", name1:"IT Outsourcing"},
    //     {name:"Staffing Services", name1:"Web Interface"},
    //     {name:"IOT", name1:"Digital Marketing"},
    //     {name:"Business Analytics", name1:"Big Data"}
    // ]
    // const thumbResponsive = {
    //     superLargeDesktop: {
    //       breakpoint: { max: 4000, min: 3000 },
    //       items: 8
    //     },
    //     desktop: {
    //       breakpoint: { max: 3000, min: 1024 },
    //       items: 8
    //     },
    //     tablet: {
    //       breakpoint: { max: 1024, min: 464 },
    //       items: 8
    //     },
    //     mobile: {
    //       breakpoint: { max: 4000, min: 0 },
    //       items: 4
    //     }
    //   };
    return (
        <div className="container-fluid">
            <div className="row">
                <div className="col-12 px-0">
                    <Carousel responsive={thumbResponsive} arrows={false} showDots={true} dotListClass={'thumb-carousel-dot-list'} infinite={true} autoPlay={true} autoPlaySpeed={4000}>
                    {thumbSliderUrl.map((row, index)=>{
                      return (
                        <div className="w-100 pb-5" key={`secThumbSlider${index}`}>
                            <div className="d-flex flex-column ">
                                <div className={` pr-1 d-inline-block  w-100 thumbLogo  `}>
                                   <div className={`d-flex border fs-16 h-100  justify-content-center bg-white align-items-center  `}>
                                        {row.name}
                                    </div> 
                                </div>
                                <div className={` pt-1 pr-1 d-inline-block w-100 thumbLogo  `}>
                                <div className={`d-flex bg-white border fs-16 h-100 justify-content-center align-items-center  `}>
                                        {row.name1}
                                    </div>
                                </div>
                            </div>
                        </div>
                      )
                    })}
                    </Carousel>
                </div>
            </div>
        </div>
    );
}

export default SecThumbSlider

