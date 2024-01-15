import React from 'react';
import { Fade } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';
import benz_full from '../assets/benz-full.jpg'
import bmw_car from '../assets/bmw-i7.jpg'
import audi_blue from '../assets/audi-blue.jpg'

const FadeExample = () => {
  return (
    <div>
        <Fade autoplay={true} duration={1500} transitionDuration={3000} onChange={function noRefCheck(){}}
  onStartChange={function noRefCheck(){}}>
            <div className="each-slide ">
            <div>
                <img src={bmw_car} className='h-screen w-screen max-md:object-contain'/>
            </div>
            
            </div>
            <div className="each-slide ">
            
            <div>
                <img src={benz_full} className='h-screen w-screen'/>
            </div>
            </div>
            <div className="each-slide ">
            <div>
            <img src={audi_blue} className='h-screen w-screen '/>
            </div>
            
            </div>
        </Fade>
    </div>
  );
};

export default FadeExample;