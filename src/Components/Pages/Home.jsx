import "../../CSS/Home.css";
import { ReasonContent, cardData } from "../../utills/mockData";
import Reason from "./Subpages/Reason";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import ImageCarousel from "./changes/Slider";

import Achievements from "./Subpages/Achievements";
import axios from "axios";
import safeCleanimg from '../../Images/safeclean.png'
import SolarPowerSolution from "./changes/SolarPower";
import WorldLeading from "./changes/Addhomechangeone";

const Home = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [formAnimate, setFormAnimate] = useState(false);
  const [companyname, setCompanyname] = useState("")
  const [phone, setPhon] = useState("")
  const [email, setEmail] = useState("")
  const [pincode, setPincode] = useState("")
  const [messages, setMessages] = useState("")

  const [formData, setFormData] = useState({
    company_name: "",
    phone: "",
    email: "",
    pincode: "",
    messages: ""
  })

  useEffect(() => {
    setFormData(prevFormData => ({
      ...prevFormData,
      company_name: companyname,
      phone: phone,
      email: email,
      pincode: pincode,
      messages: messages

    }));
  }, [companyname, phone, email, pincode, messages]);

  const sliderImage = [
    'url("https://hips.hearstapps.com/hmg-prod/images/low-angle-view-of-solar-panels-against-sky-royalty-free-image-1587389153.jpg")',
    'url("https://thumbor.forbes.com/thumbor/fit-in/900x510/https://www.forbes.com/home-improvement/wp-content/uploads/2023/04/featured-image-solar-panels-e1682662798251.jpg")',
    // 'url("https://www.atw-solar.id/static/9a9057e346e25c3fef2fd63d0ffcb4de/59a44/cni-hero.png")',
  ];

 

  useEffect(() => {
    const handleScroll = (entries) => {
      if (entries[0].isIntersecting) {
        setFormAnimate(true);
      }
    };

    const observer = new IntersectionObserver(handleScroll, { threshold: 0.7 });

    observer.observe(document.querySelector(".home-right-div"));
    observer.observe(document.querySelector(".home-left-div-animate"));

    return () => {
      observer.disconnect();
    };
  }, []);


  const PostfromData = () => {
    axios.post("http://localhost:3001/send-email", formData).then((res) => {
      console.log(res)
      setFormData(res)
    })
  }

  return (
    <>
      <div className="home-parent-div">
        <div
          className="home-form-content-div"
          style={{ backgroundImage: sliderImage[currentSlide] }}
        >
          <div
            className={formAnimate ? "home-left-div" : "home-left-div-animate"}
          >
            <h1 className="safe">Promoting Sustainable Power Solutions in Jaipur</h1>
            <h2 className="clean">Clean &</h2>
            <h3 className="renewable">Renewable</h3>
            <p>Sunshakti is a top solar power company in Jaipur. We provide high-quality, cost-effective sustainable energy solutions across all markets, lowering carbon footprint and improving present and future human existence.</p>
            <div className="btn-home-div">
              <Link className="home-readmore-btn" to="/About">
                READ MORE
              </Link>
              <Link to="/ProducService" className="home-services-btn">
                SERVICES
              </Link>
            </div>
          </div>
          <div className="home-right-div">
            <div
              className={formAnimate ? "form-home-div" : "form-home-div-animate"}
            >
              <div className="request-heading">
                <h2>Request Pricing</h2>
              </div>
              <input type="text" placeholder="Company Name" required onChange={(e) => {
                setCompanyname(e.target.value)
                console.log(companyname)
              }} />
              <input type="text" placeholder="Phone number" required onChange={(e) => {
                setPhon(e.target.value)
                console.log(phone)
              }} />
              <input type="email" placeholder="Enter your Email" required onChange={(e) => {
                setEmail(e.target.value)
                console.log(email)
              }} />
              <input type="text" placeholder="Pin code" required onChange={(e) => {
                setPincode(e.target.value)
                console.log(pincode)
              }} />
              <textarea
                className="form-control"
                rows={3}
                cols={5}
                placeholder="Leave your Requirements"
                onChange={(e) => {
                  setMessages(e.target.value)
                  console.log(messages)
                }}
              ></textarea>
              <div className="pricing-btn-div">
                <button onClick={PostfromData}>REQUEST PRICING</button>
              </div>
            </div>
          </div>
        </div>

        <div className="mid-div">
          <div className="uper-mid-div">
            <div className="mid-logo-div">
              <h3>Sunshakti Jaipur Solar Company: Pioneers in Solar Dominion</h3>
            </div>
            <div className="mid-heading-div">
              <span>Powering Your Business for Over </span>
              <span className="years">25 Years</span>
            </div>
            <div className="mid-content-div">
              <p className="px-14">
                Sunshakti, a Solar Company in Jaipur, is one of the top providers of solar technologies and services. We are well aware of how urgently ecologically friendly electrical sources are needed in the modern world. With the sun's abundant and sustainable energy at our disposal, we've embarked on a massive mission to turn Jaipur into a solar-centric city, one installation at a time.
              </p>
            </div>

            <div className="read-more-btn-div">
              <Link to="/About" className="read-more-btn">
                Read More
              </Link>
            </div>
          </div>
          {/* some content will add here we are working on it */}
          <div className="flex flex-col bg-neutral-700 mt-8 items-center justify-center py-10" style={{
            background: "rgb(31,29,56)",
            background: "linear-gradient(90deg, rgba(31,29,56,1) 0%, rgba(255,255,255,1) 100%)"
          }}>
            <div className="p-2">
              <h4 className="text-white">Solar Company in Jaipur: Safe, Clean, and Renewable Energy</h4>
            </div>

            <div className="flex p-4">

              <div className="flex flex-col flex-1 pl-4 gap-2">
                <p className="text-white">
                  Should you encounter escalating energy expenditures or an upsurge in power requisites, your pursuit for a sustainable remedy culminates here. We are an establishment renowned as the "Solar Energy Enterprise in Jaipur," specializing in comprehensive solar resolutions and adept installations.
                  We furnish a customized answer designed to align with your precise power necessities, leveraging cutting-edge solar technology. Our proficient workforce ensures a seamless shift to solar power, curtailing your dependency on orthodox grid-based energy and substantially curbing your energy overheads.
                </p>
                <p className="text-white">By opting for our solar provisions, you not only make judicious financial choices but also contribute to the cultivation of a more verdant, sustainable prospect. We prioritize excellence, efficacy, and client contentment to facilitate the transition to pristine, renewable power sources as straightforward as possible.
                  Do not permit excessive energy outlays to encumber your enterprise or financial resources. Embrace top-notch solar companies in Jaipur, and collectively, we can envision a more luminous, economical, and ecologically viable future.
                </p>
              </div>
              <div className="flex flex-1">
                <img src={safeCleanimg} alt="" />
              </div>
            </div>
          </div>
          <SolarPowerSolution/>
          <div className="lower-mid-div">
            {cardData[0].midcardData?.map((res) => (
              <div className="card-div" key={res.id}>
                <img src={res.image} alt="" />
                <p>{res.heading1}</p>
                <p>{res.heading2}</p>
                <span>{res.cardPara1}</span>
                <span>{res.cardPara2}</span>
              </div>
            ))}
          </div>
        </div>
        <WorldLeading />
        <div className="about-sunsine-more-div">
          {
            <div className="about-sunsine">
              <div className="sunsine-left-div">
                <div className="left-content-div">
                  <h2>{cardData[1]["Data"][0]["data1"].aboutHeading}</h2>
                  <span>{cardData[1]["Data"][0]["data1"].mainPara}</span>
                </div>
                <div className="about-sun-sakti-read-more-btn">
                  <Link to="/About" className="about-read-more-link">
                    Read More
                  </Link>
                </div>
              </div>
              <div className="sunsine-right-div">
                <img src={cardData[1]["Data"][0]["data1"].imgURL} alt="" />
              </div>
            </div>
          }
        </div>


        <div className="why-choose-div">
          <div className="left-choose-div">
            <img
              src={cardData[1]["Data"][1]["data2"][0]?.leftDiv?.imgurl0}
              alt="/"
            />
          </div>

          <div className="right-choose-div">
            <div className="heading-choose-div">
              <h2>What Sets Sunshakti Solar Company Apart</h2>
            </div>
            <div className="why-choose-lower-content-div">
            {
              ReasonContent.map((res)=>(
                <>
                <h3>{res.heading}</h3>
                <p>{res.reasonContent}</p>
                </>
              ))
            }
            </div>

          </div>
        </div>
        <Reason />
        <Achievements />
        <ImageCarousel />
      </div>
    </>
  );
};

export default Home;
