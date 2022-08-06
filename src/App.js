import AboutUs from "./components/AboutUs";
import Brands from "./components/Brands";
import Facts from "./components/Facts";
import Home from "./components/Home";
import IntroProducts from "./components/IntroProducts";
import Reservations from "./components/Reservations";
import Specialitties from "./components/Specialitties";

import "./styles/App.scss"
function App() {
  return (
    <div className="App"> 
    <Home/>
    <Brands/>
    <Specialitties/>
    <AboutUs/>
    <Facts/>
    <IntroProducts/>
    <Reservations/>
    </div>
  );
}

export default App;
