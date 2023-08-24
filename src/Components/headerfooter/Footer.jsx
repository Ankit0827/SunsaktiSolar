import { faPhone, faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "../../CSS/Footer.css";
import { ArrowUpOutlined, WhatsAppOutlined } from "@ant-design/icons";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  const moveToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const [showArrow, setShowArrow] = useState(false);

  const handleScroll = () => {
    // Check the current scroll position
    if (window.scrollY > 50) {
      setShowArrow(true);
    } else {
      setShowArrow(false);
    }
  };

  // Add scroll event listener when the component mounts
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    // Remove the event listener when the component unmounts
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="parent-footer-div">
      <div className="uper-footer-div">
        <div className="mobile-number-div">
          <div className="mobile-icon">
            <FontAwesomeIcon icon={faPhone} className="mobile-phon-icon" />
          </div>
          <div className="mobile-number">
            <p>+91-8432558555</p>
          </div>
        </div>
        <div className="gmail-div">
          <div className="mobile-icon">
            <FontAwesomeIcon icon={faEnvelope} className="mobile-email-icon" />
          </div>
          <div className="mobile-number">
            <p>info.sunshaktisolar@gmail.com</p>
          </div>
        </div>
        <div className="whatsapp-div">
          <div className="whatsapp-icon">
            <WhatsAppOutlined className="Whatsapp" />
          </div>
          <div className="mobile-number">
            <p>WhatsApp</p>
          </div>
        </div>
      </div>

      <div className="middle-footer-div">
        <div className="Our-services-links-div">
          <div className="our-service-heading-div">
            <h4>Our Services</h4>
          </div>
          <div className="our-services-link-div">
            <Link className="footer-link">Residential Solar pannel</Link>
            <Link className="footer-link">Industrial Solar pannel</Link>
            <Link className="footer-link">Commercial Solar pannel</Link>
            <Link className="footer-link">Aggriculture Solar pannel</Link>
          </div>
        </div>
        <div className="main-pages-div">
          <div className="main-pages-heading-div">
            <h4>Main Pages</h4>
          </div>
          <div className="main-pages-link-div">
            <Link className="footer-link">Home</Link>
            <Link className="footer-link">About</Link>
            <Link className="footer-link">Product</Link>
            <Link className="footer-link">Blog</Link>
            <Link className="footer-link">Contact</Link>
          </div>
        </div>
        <div className="our-location-div">
          <div className="location-heading-div">
            <h4>Our Location</h4>
          </div>
          <div className="location-div">
            <span>100, Vishveswariya Nagar,Triveni</span>
            <span>Nagar, Gopalpura Bypass Road,</span>
            <span>Jaipur 302018 (Rajasthan)</span>
          </div>
        </div>
      </div>

      <div className="lower-footer-div">
        <span>© 2023 SUN SAKTI SOLAR GREEN ENERGY. ALL RIGHTS RESERVED.</span>
      </div>
      {showArrow ? (
        <div onClick={moveToTop} className="upper-scroll-div">
          <ArrowUpOutlined />
        </div>
      ) : (
        ""
      )}
    </div>
  );
};

export default Footer;
