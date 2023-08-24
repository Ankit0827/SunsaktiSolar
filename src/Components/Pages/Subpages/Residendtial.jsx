import React from "react";
import { useParams } from "react-router-dom";
import "../../../CSS/Residential.css";

const Residential = () => {
  const { urlId } = useParams();

  console.log("Url Id:", urlId);

  const viewMoreData = [
    {
      id: 1,
      image_url:
        "https://www.atw-solar.id/static/9a9057e346e25c3fef2fd63d0ffcb4de/59a44/cni-hero.png",
      title: "Residential Solar Pannel",
      description: [
        {
          id: 1,
          mainHeading: "Harness the Power of the Sun for Your Home",
          para1:
            "At Sun Sakti Solar Energy, we are passionate about bringing clean, renewable energy solutions to homeowners across [Your Location]. Our residential solar panel systems are ",
          para2:
            "designed to empower you to take control of your energy consumption, reduce your carbon footprint, and save significantly on your electricity bills.",
        },
        {
          description1: [
            {
              id: 1,
              heading: "Save Money:",
              content:
                "By generating your electricity from the sun, you can dramatically reduce your monthly utility bills. With our advanced solar technology, you'll start seeing substantial savings from day one.",
            },
            {
              id: 2,
              heading: "Eco-Friendly & Sustainable:",
              content:
                "Solar energy is clean and renewable, meaning you'll be reducing your reliance on fossil fuels and helping to combat climate change. By choosing solar, you play a vital role in creating a greener, more sustainable future for generations to come.",
            },
            {
              id: 3,
              heading: "Increased Property Value:",
              content:
                "Homes equipped with solar panels are highly desirable in the real estate market. Installing solar can increase your property's value, providing an excellent return on investment.",
            },
            {
              id: 4,
              heading: "Tax Incentives & Rebates:",
              content:
                "Take advantage of various federal and state incentives, tax credits, and rebates that can significantly lower the overall cost of your solar installation.",
            },
            {
              id: 5,
              heading: "Energy Independence: ",
              content:
                "With solar panels, you become less dependent on the grid and potential energy price fluctuations. You'll have greater control over your energy production and usage.",
            },
          ],
        },
        {
          description2: [
            {
              id: 1,
              descriptionHeading2: "Customized Solar Panel Installation:",
              contentTwo:
                " We understand that every home is different, which is why we provide custom solar panel installations that perfectly match your energy consumption requirements.",
            },
            {
              id: 2,
              descriptionHeading2: "High-Quality Solar Panels: ",
              contentTwo:
                "  We partner with industry-leading solar panel manufacturers to ensure you receive the highest quality and most reliable solar panels on the market.",
            },
            {
              id: 3,
              descriptionHeading2: "Battery Storage Solutions: ",
              contentTwo:
                "Optimize your solar system with battery storage options, allowing you to store excess energy generated during the day and use it during peak hours or at night.",
            },
            {
              id: 4,
              descriptionHeading2: "Monitoring & Maintenance:",
              contentTwo:
                " Our team will provide continuous monitoring and maintenance services to ensure your solar panels operate at peak performance throughout their lifespan.",
            },
            {
              id: 5,
              descriptionHeading2: "Sustainable Financing Options:",
              contentTwo:
                "  We offer flexible financing options to make the switch to solar affordable and hassle-free. Our team will guide you through the process to find the best financial solution for your needs.",
            },
          ],
        },
        {
          description3: [
            {
              id: 1,
              description3Heading: "Expertise and Experience: ",
              description3Content: "Our team of skilled professionals has years of experience in the solar industry, ensuring top-notch service and quality installations."
            },
            {
              id: 2,
              description3Heading: "Customer Satisfaction:  ",
              description3Content: "Our commitment to customer satisfaction is at the core of everything we do. We go above and beyond to exceed your expectations."
            }, {
              id: 3,
              description3Heading: "Comprehensive Support:  ",
              description3Content: " From initial consultation to post-installation support, we are here for you every step of the way."
            },
            {
              id: 4,
              description3Heading: "Top-of-the-Line Technology:  ",
              description3Content: "We stay at the forefront of solar advancements, providing you with the latest and most efficient solar solutions."
            },
          ]
        },
      ],
    },
    {
      id: 2,
      image_url:
        "https://nmsolargroup.com/wp-content/uploads/2022/03/LH5Wad5xH7gexBnb5gpR1sOCO8Pv1XQu1648484611.jpg",
      title: "Industrial Solar Pannel",
      description: [
        {
          id: 1,
          mainHeading: "Harness the Power of the Sun for Your Home",
          para1:
            "At Sun Sakti Solar Energy, we are passionate about bringing clean, renewable energy solutions to homeowners across [Your Location]. Our residential solar panel systems are ",
          para2:
            "designed to empower you to take control of your energy consumption, reduce your carbon footprint, and save significantly on your electricity bills.",
        },
        {
          description2: [{}],
        },
      ],
    },
    {
      id: 3,
      image_url:
        "https://i0.wp.com/www.bioenergyconsult.com/wp-content/uploads/2021/10/residential-solar-system.jpg?ssl=1",
      title: "Commercial Solar Pannel",
      description: [
        {
          id: 1,
          mainHeading: "Harness the Power of the Sun for Your Home",
          para1:
            "At Sun Sakti Solar Energy, we are passionate about bringing clean, renewable energy solutions to homeowners across [Your Location]. Our residential solar panel systems are ",
          para2:
            "designed to empower you to take control of your energy consumption, reduce your carbon footprint, and save significantly on your electricity bills.",
        },
      ],
    },
    {
      id: 4,
      image_url:
        "https://webdesign-finder.com/solarify-v2/wp-content/uploads/2017/12/18-780x780.jpg",
      title: "Aggriculture Solar Pannel",
      description: [
        {
          id: 1,
          mainHeading: "Harness the Power of the Sun for Your Home",
          para1:
            "At Sun Sakti Solar Energy, we are passionate about bringing clean, renewable energy solutions to homeowners across [Your Location]. Our residential solar panel systems are ",
          para2:
            "designed to empower you to take control of your energy consumption, reduce your carbon footprint, and save significantly on your electricity bills.",
        },
      ],
    },
  ];

  const index = viewMoreData.findIndex((a) => a.id === +urlId);

  console.log("index found", index);

  // if (index !== -1 && viewMoreData[index]) {
  const item = viewMoreData[index];
  const divStyle = {
    display: "flex",
    backgroundImage: `url(${item.image_url})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    height: "60vh",
    backgroundRepeat: "no-repeat",
    alignItems: "center",
    justifyContent: "center",
    color: "white",
  };

  return (
    <div className="parent-residential-div">
      <div style={divStyle} className="Hero-section">
        <h2>{item.title}</h2>
      </div>

      <div className="description-content-div">
        <h3>{item.description[0].mainHeading}</h3>
        <p>{item.description[0].para1}</p>
        <p>{item.description[0].para2}</p>
      </div>

      <div className="description1-div">
        <div className="benifits-residendtial-div">
          <h2>Why Choose Residential Solar Panels?</h2>
          <p>
            Installing solar panels on your home comes with a plethora of
            benefits that go beyond just monetary savings. Here are some
            compelling reasons to consider going solar:
          </p>
        </div>
        <div className="parent-desription2-div">
          {item.description[1]?.description1?.map((res) => (
            <div className="description-div">
              <li
                style={{
                  fontWeight: "600",
                  fontFamily: "Arial,halvatica",
                  paddingLeft: "2rem",
                }}
              >
                {res.heading}
              </li>
              <p
                style={{
                  paddingLeft: "3.5rem",
                }}
              >
                {res.content}
              </p>
            </div>
          ))}
        </div>
      </div>
      <div className="desription2-div">
        <div className="residential-desription2-main-heading-content-div">
          <h3>Our Residential Solar Panel Solutions</h3>
          <p>
            At Sun Sakti Solar Green Energy, we tailor our solar solutions to
            meet the unique energy needs of each homeowner. Our team of
            certified solar experts will work closely with you to design and
            install a solar system that maximizes efficiency and fits your
            budget. Our offerings include:
          </p>
        </div>
        <div className="description1-div-content">
          {item.description[2]?.description2?.map((res) => (
            <div className="description-div">
              <li
                style={{
                  fontWeight: "600",
                  fontFamily: "Arial,halvatica",
                  paddingLeft: "2rem",
                }}
              >
                {res.descriptionHeading2}
              </li>
              <p
                style={{
                  paddingLeft: "3.5rem",
                }}
              >
                {res.contentTwo}
              </p>
            </div>
          ))}
        </div>
      </div>

      <div className="desription3-div">
        <div className="residential-desription3-main-heading-content-div" style={{
          display: "flex",
          paddingLeft: "2rem",
          flexDirection: "column"
        }}>
          <h3>Why Choose Solar Sun Sakti</h3>
          <p style={{
            paddingLeft: "1rem"
          }}>
            When you choose
            <b> Solar Sun Sakti</b> as your residential solar panel provider, you can expect:
          </p>
        </div>
        <div className="description3-div-content">
          {item.description[3]?.description3?.map((res) => (
            <div className="description3-div">
              <li
                style={{
                  fontWeight: "600",
                  fontFamily: "Arial,halvatica",
                  paddingLeft: "3rem",
                }}
              >
                {res.description3Heading}
              </li>
              <p
                style={{
                  paddingLeft: "3.5rem",
                }}
              >
                {res.description3Content}
              </p>
            </div>
          ))}
        </div>
      </div>

    </div>
  );
};

export default Residential;
