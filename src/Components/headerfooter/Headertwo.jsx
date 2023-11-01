import { Link, useLocation } from "react-router-dom";
import "../../CSS/Headertwo.css";
import logo from "../../Images/Sun_Sakti_Solar_Green_Energy_logo1.png";
import { BarsOutlined } from "@ant-design/icons";
import { useState } from "react";

const Headertwo = () => {
  const location = useLocation();
  const [showMenu, setShowMenu] = useState(false);

  const [navWidth, setNavWidth] = useState('0%');

  // Function to open the navigation
  const openNav = () => {
    setNavWidth('100%');
  };

  // Function to close the navigation
  const closeNav = () => {
    setNavWidth('0%');
  };

  const ShowTogglebar = () => {
    setShowMenu(!showMenu);
    closeNav();
  }

  const moveToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="parent-header-div" >
      <div className="logo-div">
        <Link to="/" onClick={moveToTop}>
          <img src={logo} alt="logo" className="sun-sakti-logo" width="100%" height="100%" />
        </Link>
      </div>
      <div className="menu-bar-links-div">
        <div className="link-menubar-div">
          <Link to="/" className={location.pathname === "/" ? "active" : "link"} onClick={moveToTop}>
            Home
          </Link>
          <Link
            to="/About"
            className={location.pathname === "/About" ? "active" : "link"}
            onClick={moveToTop}
          >
            About us
          </Link>
          <Link
            to="/ProducService"
            className={location.pathname === "/ProducService" ? "active" : "link"}
            onClick={moveToTop}
          >
            Services
          </Link>
          <Link
            to="/Blog"
            className={location.pathname === "/Blog" ? "active" : "link"}
            onClick={moveToTop}
          >
            Blog
          </Link>
          <Link
            to="/Company"
            className={location.pathname === "/Company" ? "active" : "link"}
            onClick={moveToTop}
          >
            Company
          </Link>
          <Link
            to="/Contact"
            className={location.pathname === "/Contact" ? "active" : "link"}
            onClick={moveToTop}
          >
            Contact
          </Link>
        </div>
      </div>

      {/* side navigation div */}

      <div id="myNav" style={{ width: navWidth }} className="overlay">
        <span onClick={closeNav} className="closebtn">&times;</span>
        <div class="overlay-content">
          <Link to="/" className={location.pathname === "/" ? "active" : "link"} onClick={ShowTogglebar}>
            Home
          </Link>
          <Link
            to="/About"
            className={location.pathname === "/About" ? "active" : "link"}
            onClick={ShowTogglebar}
          >
            About us
          </Link>
          <Link
            to="/ProducService"
            className={location.pathname === "/ProducService" ? "active" : "link"}
            onClick={ShowTogglebar}
          >
            Services
          </Link>
          <Link
            to="/Blog"
            className={location.pathname === "/Blog" ? "active" : "link"}
            onClick={ShowTogglebar}
          >
            Blog
          </Link>
          <Link
            to="/Contact"
            className={location.pathname === "/Contact" ? "active" : "link"}
            onClick={ShowTogglebar}
          >
            Contactus
          </Link>
        </div>
      </div>

      <div className="bar-div">
        <i onClick={openNav} className="fa-solid fa-bars"></i>
        {/* <BarsOutlined className="bar" onClick={ openNav } /> */}
      </div>
    </div>
  );
};

export default Headertwo;
