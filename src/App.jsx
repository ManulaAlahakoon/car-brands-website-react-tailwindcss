import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Slider from "./components/Slider"
import SliderCopy from "./components/SliderCopy"

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

          

        </div>

      </main>
    </div>
  )
}