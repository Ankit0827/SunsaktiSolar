import { Link, useLocation } from "react-router-dom";
import {
  // FacebookOutlined,
  // TwitterOutlined,
  // InstagramOutlined,
  // LinkedinOutlined,
  DownOutlined,
} from "@ant-design/icons";

import "../../CSS/Headertwo.css";
import { useState, useEffect } from "react";
import logo from "../../Images/Sun_Sakti_Solar_Green_Energy_logo1.png";

const Headertwo = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isDivVisible, setIsDivVisible] = useState(false);

  const handleScroll = () => {
    if (window.scrollY > 125) {
      setIsScrolled(true);
    } else {
      setIsScrolled(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);


  const location = useLocation();

  const handleMouseEnter = () => {
    setIsDivVisible(true);
  };

  const handleMouseLeave = () => {
    setIsDivVisible(false);
  };

  return (
    <div
      className={
        location.pathname === "/"
          ? "parent-headertwo-div"
          : "parent-headertwo-div-routesChange"
      }
    >
     

      <div
        className={`link-social-media-div ${
          isScrolled ? "link-social-media-div-Onscroll" : ""
        }`}
      >
        <div className="sun-sakti-img-logo-div">
          <Link  to="/">
              <img src={logo} alt="sun-sakti-logo" className="sun-sakti-logo" />
          </Link>
         
        </div>
        <div className="link-div">
          <nav>
            <Link
              to="/"
              className={location.pathname === "/" ? "active" : "link"}
            >
              Home
            </Link>
            <Link
              to="/About"
              className={location.pathname === "/About" ? "active" : "link"}
            >
              About us
            </Link>
            <Link
              to="/ProducService"
              className={
                location.pathname === "/ProducService" ? "active" : "link"
              }
            >
            Services
            </Link>
            <Link
              to="/Blog"
              className={location.pathname === "/Blog" ? "active" : "link"}
            >
              Blog
            </Link>
            <Link
              to="/Contact"
              className={location.pathname === "/Contact" ? "active" : "link"}
            >
              Contactus
              <DownOutlined
                className="down-out-arrow"
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
              />

{isDivVisible && (
        <div className={`hover-content ${isDivVisible ? 'visible' : ''}`}onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}>
          <div className="mobile" style={{
            display:"flex",
            flexDirection:"column",
            alignItems:"flex-start",
            padding:"2rem",
            marginTop:"1rem"

          }}>
            <p>+91 8329343283</p>
            <p>GopalPura</p>
            <p>Whatsapp</p>
          </div>
        </div>
      )}
            </Link>
          </nav>
        </div>
        {/* <div className="social-media-div">
          <div className="facebookIcon-div">
            <FacebookOutlined />
          </div>
          <div className="twitterIcon-div">
            <TwitterOutlined />
          </div>
          <div className="instaIcon-div">
            <InstagramOutlined />
          </div>
          <div className="linkdinIcon-div">
            <LinkedinOutlined />
          </div>
        </div> */}
      </div>
    </div>
  );
};

export default Headertwo;