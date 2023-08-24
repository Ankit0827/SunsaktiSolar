import {
  ClockCircleOutlined,
  EnvironmentOutlined,
  TwitterOutlined,
  InstagramOutlined,
  FacebookOutlined,
  LinkedinOutlined,
} from "@ant-design/icons";
import { faPhone } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import "../../../CSS/Contactwo.css";

const Contactwo = () => {
  return (
    <div className="contactwo-parent-div">
      <div className="contact-subparent-div">
        <div className="clock-div">
          <ClockCircleOutlined style={{
            color: "rgb(53, 148, 152)",
            border: "1px solid white",
            padding: "1rem",
            borderRadius: "50%",
            backgroundColor: "white"
          }} />
          <p>8am-20pm</p>
        </div>
        <div className="location-div">
          <EnvironmentOutlined style={{
            color: "rgb(53, 148, 152)",
            border: "1px solid white",
            padding: "1rem",
            borderRadius: "50%",
            backgroundColor: "white"
          }} />
          <p>100, Vishveswariya Nagar,Triveni Nagar, Gopalpura Bypass Road,
            Jaipur 302018 (Rajasthan)</p>
        </div>
        <div className="phon-div">
          <FontAwesomeIcon icon={faPhone} style={{
            color: "rgb(53, 148, 152)",
            border: "1px solid white",
            padding: "1rem",
            borderRadius: "50%",
            backgroundColor: "white"
          }} />
          <p>84325 58555</p>
        </div>

      </div>
      <div className="contactwo-social-media-div">
        <div className="twitter-div">
          <TwitterOutlined />
        </div>
        <div className="facebook-div">
          <FacebookOutlined />
        </div>
        <div className="insta-div">
          <InstagramOutlined />
        </div>
        <div className="linkDin-div">
          <LinkedinOutlined />
        </div>
      </div>
    </div>
  );
};

export default Contactwo;
