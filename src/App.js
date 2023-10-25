import { BrowserRouter, Route, Routes, } from "react-router-dom";
import "./App.css";
import Home from "./Components/Pages/Home";
import ProducService from "./Components/Pages/ProducService";
import Contact from './Components/Pages/Contact'
import Headertwo from "./Components/headerfooter/Headertwo";
import Footer from "./Components/headerfooter/Footer";
import About from './Components/Pages/About'
import Residential from './Components/Pages/Subpages/Residendtial'
import Blog from './Components/Pages/Blog'
import Monocrystalline from "./Components/Pages/Subpages/Monocrystiline";


function App() {
  return (
    <div className="App">
      <BrowserRouter basename="/">
        <Headertwo />

        <div className="content-div">
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/ProducService" element={<ProducService />} />
          <Route path="/ProducService/:urlId" element={<Residential />} />
          <Route path="/Blog" element={<Blog />} />
          <Route path="/About" element={<About heading={"Our Mission"} />} />
          <Route path="/Contact" element={<Contact />} />
          <Route path="/Monocrystiline" element={<Monocrystalline />} />
        </Routes>
        </div>
        <Footer />
      </BrowserRouter>

    </div>
  );
}

export default App;
