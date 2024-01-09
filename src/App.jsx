import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Slider from "./components/Slider"
export default function App() {
  return (
    <div>
      <Navbar />
      <main>
        <div id="home">
          <Slider></Slider>
        </div>
      </main>
    </div>
  )
}