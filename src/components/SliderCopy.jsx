import React from 'react';
import { Fade } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';
import lambo from '../assets/lamborgini.jpg'
import front from '../assets/car-front.jpg'
//import audi_blue from '../assets/audi-blue.jpg'

const FadeExample2 = () => {
  return (
    <div>
        <Fade autoplay={true} duration={1500} transitionDuration={3000} onChange={function noRefCheck(){}}
  onStartChange={function noRefCheck(){}}>
            <div className="each-slide ">
            <div>
                <img src={lambo} className='h-screen w-screen'/>
            </div>
            
            </div>
            <div className="each-slide ">
            
            <div>
                <img src={front} className='h-screen w-screen'/>
            </div>
            </div>

        </Fade>
    </div>
  );
};

export default FadeExample2;