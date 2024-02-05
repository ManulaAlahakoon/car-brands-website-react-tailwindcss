import BrandCard from "../layouts/BrandCard"
import benz from "../assets/logos/benz.jpg"
import bmw from "../assets/logos/bmw.jpg"
import lambogini from "../assets/logos/lambogini.jpeg"
import volvo from "../assets/logos/volvo.png"
import audi from "../assets/logos/audi.jpg"
import ferrari from "../assets/logos/ferrari.jpg"
import vega from "../assets/logos/vega.jpeg"

const Brands = () => {
    return ( 
        <div className="min-h-screen flex flex-col justify-center lg:px-32 px-5 bg-backgroungColor">
            <h1 className="text-center text-3xl mt-24 mb-8 ">Brands</h1>
        
            <div className="flex flex-row justify-center flex-wrap gap-8 pb-8 ">
                <div className="base-1/2 sm:basis-1/3 md:basis-1/4 "><BrandCard  img={benz} title={"Mercedes Benz"} /></div>
                <div className="base-1/2 sm:basis-1/3 md:basis-1/4 "><BrandCard  img={bmw} title={"BMW"} /></div>
                <div className="base-1/2 sm:basis-1/3 md:basis-1/4 "><BrandCard  img={lambogini} title={"Lambogini"} /></div>
                <div className="base-1/2 sm:basis-1/3 md:basis-1/4 "><BrandCard  img={vega} title={"Vega"} /></div>
                <div className="base-1/2 sm:basis-1/3 md:basis-1/4 "><BrandCard  img={audi} title={"Audi"} /></div>
                <div className="base-1/2 sm:basis-1/3 md:basis-1/4 "><BrandCard  img={ferrari} title={"Ferrari"} /></div>
            </div>
         </div>
     );
}
 
export default Brands;