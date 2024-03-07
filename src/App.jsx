import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Slider from "./components/Slider"
import SliderCopy from "./components/SliderCopy"
import Brands from "./components/Brands"
import Model from "./components/Model";
import Wonder from "./components/Wonder"
import Footer from "./components/Footer"

export default function App() {
  return (
    <div>
      <Navbar />
      <main>
        <div id="home" className="max-md:hidden">
          <Slider ></Slider>
        </div>

        <div id="home2" className="md:hidden">
          <SliderCopy></SliderCopy>
        </div>

        <div id="brands">

          <Brands/>

        </div>

        
        <div id="models">

          <Model/>

        </div>

        <div id="wonder">
          <Wonder/>
        </div>

        <div>
          <Footer></Footer>
        </div>

      </main>
    </div>
  )
}