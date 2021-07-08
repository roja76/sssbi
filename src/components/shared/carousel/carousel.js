import React from 'react';
import { Carousel } from 'antd';
import 'antd/dist/antd.css';



export const CarouselSlider = (props)=> {
    const {carouselObj, carouselData} = props;

    return (
        <div>
            <Carousel autoplay={carouselObj.autoplay?carouselObj.autoplay: false} dotPosition ={carouselObj.dotPosition ? carouselObj.dotPosition: 'bottom'} dots={carouselObj.dots?carouselObj.dots:true} easing={carouselObj.easing?carouselObj.easing:'linear'} effect={carouselObj.effect?carouselObj.effect:'scrollx'}>
                {
                carouselData.map((e)=>(
                    <div>
                        <img src={e}/>
                    </div>
                 ) )
                }
            </Carousel>
        </div>
    );
}


