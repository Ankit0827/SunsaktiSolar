import "../../CSS/Home.css";
import midLogo from "../../Images/Sun_Sakti_Solar_Green_Energy_logo1.png";
import { cardData } from "../../utills/mockData";
import Reason from "./Subpages/Reason";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

import Achievements from "./Subpages/Achievements";
import axios from "axios";
import Addhomechangeone from "./changes/Addhomechangeone";

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
    'url("https://www.atw-solar.id/static/9a9057e346e25c3fef2fd63d0ffcb4de/59a44/cni-hero.png")',
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === sliderImage.length - 1 ? 0 : prev + 1));
  };

  useEffect(() => {
    setTimeout(nextSlide, 2000);
  });

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
    <div className="home-parent-div">
      <div
        className="home-form-content-div"
        style={{ backgroundImage: sliderImage[currentSlide] }}
      >
        <div
          className={formAnimate ? "home-left-div" : "home-left-div-animate"}
        >
          <h1 className="safe">Safe,</h1>
          <h1 className="clean">Clean &</h1>
          <h1 className="renewable">Renewable</h1>
          <span>
            At Our Solar Solutions, we're committed to harnessing the power of
          </span>
          <span>
            the sun to create sustainable energy solutions for your home or
            business.
          </span>
          <span>As a leading provider of solar products and services, we </span>
          <span>strive to make a positive impact on the environment while</span>
          <span>reducing your energy bills.</span>
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
            <img src={midLogo} alt="mid-logo" />
          </div>
          <div className="mid-heading-div">
            <span>Powering Your Business for Over </span>
            <span className="years">25 Years</span>
          </div>
          <div className="mid-content-div">
            <p className="content">
              Sun Sakti Solar together expertise, skills & knowledge in the
              renewable energy sector and is able to advise clients on renewable
              energy including solar systems.
            </p>
          </div>

          <div className="read-more-btn-div">
            <Link to="/About" className="read-more-btn">
              Read More
            </Link>
          </div>
        </div>
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

      <div className="parent-type-ofpannel">

        <div className="Polycrystalline">
          <div className="policrystiline-img-div">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS3HGH4CMdpfGDBa70W2BTxGMi-KXChN41yHg&usqp=CAU"
              alt=""
            />
          </div>
          <div className="polycrystiline-heading-div">
            <h4>Polycrystiline Solar Pannel</h4>
          </div>
          <div className="polycrystline-content-div">
            <p>
              The <Link>Polycrystalline Solar Panels</Link> are composed of multiple silicon
              crystals. They are made from silicon fragments that are melted and
              poured into square molds.
            </p>
          </div>
          <div className="btn-polycrystiline-div">
            <Link className="btn btn-primary">Read more</Link>
          </div>
        </div>

        <div className="Monocrystalline">
          <div className="monocrystalline-img-div">
            <img
              src="https://www.thestreet.com/review/wp-content/uploads/2022/06/monocrystalline-solar-panels-thestreet.jpg"
              alt="monocrystiline"
            />
          </div>
          <div className="monocrystiline-heading-div">
            <h4>Monocrystiline Solar Pannel</h4>
          </div>
          <div className="monocrystilline-content-div">
            <p>
              The <Link to="/Monocrystiline">Monocrystalline Solar Panels</Link>are also known as the single
              crystal panels. They are made from pure silicon crystal which is
              sliced into several wafers forming cells.
            </p>
          </div>
          <div className="btn-monocrystiline-div">
            <Link className="btn btn-primary">Read more</Link>
          </div>
        </div>

        <div className="bificial-div">
          <div className="bificial-img-div">
            <img
              src="https://nexusolarenergyhome.files.wordpress.com/2022/03/modules-pv-bifaciales.2016.10.p.avavian-1-1200x800-1200x800-1.jpg?w=1024"
              alt=""
            />
          </div>
          <div className="bificial-heading-div">
            <h4>Bificial Solar Pannel</h4>
          </div>
          <div className="bificial-content-div">
            <p>
              The world's latest technology solar panel is the <Link>Bifacial solar
                panel</Link>. It can generate electricity up to 25% extra compared to
              other traditional solar panels.
            </p>
          </div>
          <div className="btn-bificial-div">
            <Link className="btn btn-primary">Read more</Link>
          </div>
        </div>
      </div>
      <Addhomechangeone/>
      <div className="about-sunsine-more-div">
        {
          <div className="about-sunsine">
            <div className="sunsine-left-div">
              <div className="left-content-div">
                <h2>{cardData[1]["Data"][0]["data1"].aboutHeading}</h2>
                <span>{cardData[1]["Data"][0]["data1"].mainPara}</span>
                <span>{cardData[1]["Data"][0]["data1"].mainPara2}</span>
                <span>{cardData[1]["Data"][0]["data1"].p1}</span>
                <span>{cardData[1]["Data"][0]["data1"].p2}</span>
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
            <h2>WHY CHOOSE US?</h2>
          </div>
          {/* {cardData[1]?.Data[1]?.data2[1]?.rightDiv?.map((resp, index) => (
            <div className="lower-right-chooseCard-div">
              <div className={"img-right-lower-div"}>
                {/* <img src={resp.imgurl} alt="" /> */}
                {/* <h3>{resp.divheading}</h3>

              </div>
              <div className="right-content-div">
                <span>{resp.content}</span>
                <span>{resp.content}</span>
                <span>{resp.content}</span>
              </div>
            </div> */}

            <div className="why-choose-lower-content-div">
              <h4>Demand Response:</h4>
              <p>The provision of sustainable energy supplies for expanding & increasingly productive world is one of the major issues facing,civilization today.</p>
              <h4>Renewable Integration:</h4>
              <p>The analysis considers emissions and energy security, as political and economic pressures move society towards a low-carbon future.civilization today.</p>
              <h4>Capacity Reserve:</h4>
              <p>Where does the energy we use come from? It’s absolutely vital to every single thing we do every day, but for most people, it is utterly invisible ,civilization today.</p>
            </div>
         
        </div>
      </div>
      <Reason />
      <Achievements />
    </div>
  );
};

export default Home;
