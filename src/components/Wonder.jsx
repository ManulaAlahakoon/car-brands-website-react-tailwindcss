import icar from "../assets/wonder/apple-car.jpg"
import cybertruck from "../assets/wonder/cybertruck.jpg"
import vega from "../assets/wonder/vega-back.jpg"


const Wonder = () => {
  return (  
    <div className="h-screen">
      <h1 className="text-center text-3xl mt-24 mb-8">Wonder</h1>
      <div className="grid justify-center">
        <div className="max-w-[384px] md:max-w-screen-md md:col-span-2"><img className="" src={vega} alt="" /></div>
        <div className="max-w-[384px]"><img className=" " src={icar} alt="" /></div>
        <div className="max-w-[384px]"><img className=" " src={cybertruck} alt="" /></div>
      </div>
    </div>
  );
}
 
export default Wonder;