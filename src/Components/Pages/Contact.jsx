import { useState, useEffect } from "react";
import "../../CSS/contact.css";

import {
  MessageOutlined,
  FieldTimeOutlined,
  MailOutlined,
  FacebookOutlined,
  TwitterOutlined,
  InstagramOutlined,
  LinkedinOutlined,
} from "@ant-design/icons";


const Contact = () => {
  const [contactFormAnimate, setContactFormAnimate] = useState(false)


  useEffect(() => {
    const handleScroll = (entries) => {
      if (entries[0].isIntersecting) {
        setContactFormAnimate(true)
      }
    };

    const contactFormobserver = new IntersectionObserver(handleScroll, { threshold: 1.0 });

    contactFormobserver.observe(document.querySelector(".contact-form-div"));


    return () => {
      contactFormobserver.disconnect();
    };
  }, []);

  return (

    <div className="contact-div">
      <div className="contact-parnt-div">
        <div className="contact-left-div">
          <div className="conatct-heading">
            <h2 style={{
              borderLeft: "3px solid green",
              paddingLeft: "1rem",
            }}>Contact us</h2>
          </div>
          <div className="heading-content-div" style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontFamily: "Arial,Halvatica",
            fontSize: "1.5rem",

          }}>
            <p >
              Looking for more information? We are here to assist. Reach out to us
              on call or by email. You can also send us your details by filling up
              the form below.
            </p>
          </div>
        </div>

        <div className="right-contact-div">
          <div className="contact-info-div">
            <div className="left-icon-div">
              <FieldTimeOutlined />
              <MessageOutlined />
              <MailOutlined />
            </div>
            <div className="right-icon-content-div">
              <div className="open-office-div">
                <p className="main-heading">Open office Time</p>
                <p>M-S 9am to 6pm</p>
              </div>
              <div className="get-in-touch-div">
                <p className="main-heading">Get in touch</p>
                <p>Mobile:- +91 84325 58555</p>
              </div>
              <div
                className="get-in-touch-div"
                style={{
                  display: "flex",
                  flexDirection: "column",
                }}
              >
                <p>lalit82238@gmail.com</p>
              </div>
            </div>
          </div>

          <div className="social-media-div">
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
          </div>
        </div>
      </div>
      <div className="address-div">
        <h2>Our Office</h2>
      </div>

      <div className="contact-location-div">
        <h3>Address</h3>
        <p>100, Vishveswariya Nagar,Triveni Nagar, Gopalpura Bypass Road,
          Jaipur 302018 (Rajasthan), India</p>
      </div>
      <div className="contact-form-div">
        <div className="get-in-touch-div1">
          <h2>Get In Touch</h2>
        </div>
        <form action="" className={contactFormAnimate ? "form" : "form-animate"}>
          <div className="form-div">
            <label htmlFor="">Name</label>
            <input type="text" placeholder="Enter your Name" />
            <label htmlFor="">Email</label>
            <input type="text" placeholder="Enter your email" />
            <label htmlFor="">Mobile</label>
            <input type="text" placeholder="Enter your mobile number" />
            <textarea cols="50" rows="5" placeholder="Message"></textarea>
          </div>
          <div className="form-submit-div">
            <button type="submit">Submit</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Contact;
