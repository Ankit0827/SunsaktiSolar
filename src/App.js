import { BrowserRouter, Route, Routes, } from "react-router-dom";
import React from "react";
import "./App.css";
import Home from "./Components/Pages/Home";
import ProducService from "./Components/Pages/ProducService";
import Contact from './Components/Pages/Contact'
import Headertwo from "./Components/headerfooter/Headertwo";
import Footer from "./Components/headerfooter/Footer";
import About from './Components/Pages/About'
import Residential from './Components/Pages/Subpages/Residendtial'
import Blog from './Components/Pages/Blog'
import Companyjaipur from "./Components/Pages/changes/CompanyJaipur";


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
          <Route path="/Company" element={<Companyjaipur/>} />
          <Route path="/Contact" element={<Contact />} />
        </Routes>
        </div>
        <Footer />
      </BrowserRouter>

    </div>
  );
}

export default App;
