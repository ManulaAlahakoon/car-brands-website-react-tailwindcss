import BrandCard from "../layouts/BrandCard"
import benz from "../assets/logos/benz.jpg"
import bmw from "../assets/logos/bmw.jpg"
import lambogini from "../assets/logos/lambogini.jpeg"
import volvo from "../assets/logos/volvo.png"
import audi from "../assets/logos/audi.jpg"

const Brands = () => {
    return ( 
        <div className="">
            <h1>Brands</h1>
        
            <div>
                <BrandCard img={benz} title={"Mercedes Benz"} />
                <BrandCard img={bmw} title={"BMW"} />
                <BrandCard img={lambogini} title={"Lambogini"} />
                <BrandCard img={volvo} title={"Volvo"} />
                <BrandCard img={audi} title={"Audi"} />
            </div>
         </div>
     );
}
 
export default Brands;