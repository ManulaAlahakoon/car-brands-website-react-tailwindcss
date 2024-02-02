import CarModel from "../layouts/CarModel";
import CarModelRight from "../layouts/CarModelRight";
import sport from "../assets/models/Sport_car.jpeg"
import cabrio from "../assets/models/Cabriolet.jpg"
import suv from "../assets/models/SUV.jpg"
import pickup from "../assets/models/Pickup.jpg"

const Model = () => {
    return ( 
        <div className="min-h-screen flex flex-col justify-center lg:px-32 px-5">
            <h1 className="text-center text-3xl mt-24 mb-8">Models</h1>

            <div className="grid grid-cols-1 items-center gap-8 pb-8 ">
                
                <div className=""><CarModelRight img={sport} title={"Sport Car"} /></div>
                <div className=""><CarModel img={cabrio} title={"Cabriolet"} /></div>
                <div className=""><CarModelRight img={suv} title={"SUV"} /></div>
                <div className=""><CarModel  img={pickup} title={"Pickup"} /></div>

            </div>
        </div>
     );
}
 
export default Model;

//flex flex-row justify-end flex-wrap