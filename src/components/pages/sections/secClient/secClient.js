import React from 'react';
import { SecSecThumbSlider } from '..';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import './secClient.css'
const SecClient = () => {
    const responsive = {
        superLargeDesktop: {
          // the naming can be any, depends on you.
          breakpoint: { max: 5000, min: 4000 },
          items: 5
        },
        desktop: {
          breakpoint: { max: 4000, min: 1024 },
          items: 5
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 2
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1
        }
      };
    return (
        
        <div className='container-fluid p-5'>
           <Carousel
            swipeable={false}
            draggable={false}
            showDots={false}
            responsive={responsive}
            ssr={true} // means to render carousel on server-side.
            infinite={true}
            autoPlay={true}
            autoPlaySpeed={4000}
            customTransition="all"
            transitionDuration={500}
            containerClass="container-fluid"
            arrows={false}
            className ='pl-3'
            >
                
                <div className="  card " style={{border:'none'}}>
                    <div className=" card-body d-flex justify-content-center">
                        <img className=' imgcolor'  src="https://i0.wp.com/www.sssbi.com/wp-content/uploads/2017/12/18.png?zoom=1.5&fit=400%2C200&ssl=1"/>
                    </div>
                </div>
                <div className="  card " style={{border:'none'}}>
                    <div className=" card-body d-flex justify-content-center">
                        <img className=' imgcolor' src="https://i1.wp.com/www.sssbi.com/wp-content/uploads/2017/12/1-1.jpg?zoom=1.5&fit=200%2C110&ssl=1"/>
                    </div>
                </div>
                <div className="  card " style={{border:'none'}}>
                    <div className=" card-body d-flex justify-content-center">
                        <img className=' imgcolor' src="https://i1.wp.com/www.sssbi.com/wp-content/uploads/2017/12/17.png?zoom=1.5&fit=1024%2C227&ssl=1"/>
                    </div>
                </div>
                <div className="  card " style={{border:'none'}}>
                    <div className=" card-body d-flex justify-content-center">
                        <img className=' imgcolor' src="https://i1.wp.com/www.sssbi.com/wp-content/uploads/2017/12/4.jpg?zoom=1.5&fit=200%2C100&ssl=1"/>
                    </div>
                </div>
                <div className="  card " style={{border:'none'}}>
                    <div className=" card-body d-flex justify-content-center">
                        <img className=' imgcolor' src="https://i2.wp.com/www.sssbi.com/wp-content/uploads/2017/12/6.png?zoom=1.5&fit=400%2C200&ssl=1"/>
                    </div>
                </div>
                <div className="  card " style={{border:'none'}}>
                    <div className=" card-body d-flex justify-content-center">
                        <img className=' imgcolor' src="https://i2.wp.com/www.sssbi.com/wp-content/uploads/2017/12/15.png?zoom=1.5&fit=400%2C200&ssl=1"/>
                    </div>
                </div>
                <div className="  card " style={{border:'none'}}>
                    <div className=" card-body d-flex justify-content-center">
                        <img className=' imgcolor' src="https://i2.wp.com/www.sssbi.com/wp-content/uploads/2017/12/5.jpg?zoom=1.5&fit=200%2C133&ssl=1"/>
                    </div>
                </div>
                <div className="  card " style={{border:'none'}}>
                    <div className=" card-body d-flex justify-content-center">
                        <img className=' imgcolor' src="https://i1.wp.com/www.sssbi.com/wp-content/uploads/2017/12/16.png?zoom=1.5&fit=400%2C200&ssl=1"/>
                    </div>
                </div>
                <div className="  card " style={{border:'none'}}>
                    <div className=" card-body d-flex justify-content-center">
                        <img className=' imgcolor' src="https://i0.wp.com/www.sssbi.com/wp-content/uploads/2017/12/13.jpg?zoom=1.5&fit=300%2C200&ssl=1"/>
                    </div>
                </div>
                <div className="  card " style={{border:'none'}}>
                    <div className=" card-body d-flex justify-content-center">
                        <img className=' imgcolor' src="https://i1.wp.com/www.sssbi.com/wp-content/uploads/2020/01/usp_logo.png?zoom=1.5&fit=269%2C145&ssl=1"/>
                    </div>
                </div>
                
                
            

            </Carousel>
            
        </div>
    );
}

export default SecClient;
