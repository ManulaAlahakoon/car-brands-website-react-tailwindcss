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
            <div className="each-slide h-screen w-screen">
            <div>
                <img src={bmw_car} />
            </div>
            
            </div>
            <div className="each-slide h-screen w-screen">
            
            <div>
                <img src={benz_full} />
            </div>
            </div>
            <div className="each-slide h-screen w-screen">
            <div>
            <img src={audi_blue} />
            </div>
            
            </div>
        </Fade>
    </div>
  );
};

export default FadeExample;