import "../../CSS/About.css";
import { useEffect, useState } from "react";

const About = ({ heading }) => {
    const [aboutanimate, setAboutanimate] = useState(false);
    const [secondDivAnimate, setSecondDivAnimate] = useState(false);
    const [text, setText] = useState("");
    const [displayed, setDisplayed] = useState(0);

    useEffect(() => {
        if (displayed < heading.length) {
            const timer = setTimeout(() => {
                setText((prevText) => prevText + heading[displayed]);
                setDisplayed((prevIndex) => prevIndex + 1);
            }, 200); // Adjust the delay between letters here (in milliseconds)

            return () => clearTimeout(timer);
        }
    }, [displayed, heading]);

    useEffect(() => {
        const handleScroll = (entries) => {
            if (entries[0].isIntersecting) {
                setAboutanimate(true);
                setSecondDivAnimate(true);
            }
        };

        const observer = new IntersectionObserver(handleScroll, { threshold: 0.7 });

        observer.observe(document.querySelector(".about-div-animate"));
        observer.observe(document.querySelector(".left-mission-div-animate"));
        observer.observe(document.querySelector(".about-div-animate"));

        return () => {
            observer.disconnect();
        };
    }, []);

    return (
        <>

            <div className="parent-about-div">
                <div className={aboutanimate ? "about-div" : "about-div-animate"}>
                    <h2>ABOUT US</h2>
                </div>

                <div className="about-content-div flex-col">
                    <h3>Who we are?</h3>
                    <p>
                        Brightening lives across Rajasthan, Sunshakti Solar is Jaipur's leading solar company. We are in the business of providing smiles to millions through our innovative range of solar products that make life better.
                    </p>
                </div>
                <div className="mission-div">
                    <div className={secondDivAnimate ? "left-mission-div" : "left-mission-div-animate"}>
                        <div className="mission-heading-div">
                            <h2>{text}</h2>
                        </div>
                        <div className="mission-content-div">
                            <p>
                                Our mission is to ignite a sustainable energy
                                revolution that paves the way for a brighter, cleaner future. We
                                are committed to championing the transition towards renewable
                                solar energy solutions that power homes, businesses, and
                                communities with efficiency and responsibility. Through relentless
                                innovation and unwavering dedication, we aim to empower
                                individuals to take control of their energy consumption, reduce
                                their carbon footprint, and contribute to a planet that thrives on
                                cleaner, greener power sources. Our mission goes beyond
                                technology; it's a commitment to nurturing a world where the sun's
                                abundant energy becomes the cornerstone of sustainable progress.
                                Join us on this journey as we harness the sun's brilliance and
                                shape a tomorrow that's powered by the boundless potential of
                                solar energy.
                            </p>
                        </div>
                    </div>
                    <div className="right-mission-div">
                        <img
                            src="https://www.electricrate.com/wp-content/uploads/2021/09/solar-panels-and-the-environment.jpg"
                            alt="solar-pannel-img"
                        />
                    </div>
                </div>
                <div className="solar-sunsakti-div">
                    <div className="choose-heading-div">
                        <h2>WHY CHOOSE SOLAR SUN SAKTI ?</h2>
                    </div>
                    <div className="sunsakti-choose-reason-div">
                        <div>
                            <h3>Expertise:</h3>
                            <span>
                                With years of experience and a team of skilled professionals, we
                                are experts in
                            </span>
                            <p>designing, installing, and maintaining solar energy systems. </p>
                            <span> Our in-depth knowledge and dedication ensure seamless </span>
                            <p>and efficient solar solutions.</p>
                        </div>
                        <div>
                            <h3>Quality Assurance:</h3>
                            <span>
                                {" "}
                                We believe in uncompromising quality and only source
                                top-of-the-line
                            </span>
                            <p>solar products from trusted manufacturers. </p>
                            <span>Each component we use is meticulously tested </span>
                            <p>to deliver exceptional performance and longevity.</p>
                        </div>
                        <div>
                            <h3>Customized Solutions:</h3>
                            <span>
                                Every project is unique, and we take pride in tailoring our solar{" "}
                            </span>
                            <p>solutions to meet your specific energy needs and budget. </p>
                            <span>From residential to commercial installations, our</span>
                            <p>customized approach ensures maximum energy efficiency.</p>
                        </div>
                        <div>
                            <h3>Economic Benefits:</h3>
                            <span>
                                By going solar with Sun Sakti Solar, you can significantly reduce
                                your{" "}
                            </span>
                            <p>nergy bills and enjoy substantial long-term savings.</p>
                            <span>With rising energy costs, investing in solar </span>
                            <p>energy is a wise financial decision.</p>
                        </div>
                        <div>
                            <h3>Environmental Responsibility:</h3>
                            <p>We are deeply committed to environmental stewardship. </p>
                            <p> By choosing solar energy, you become a </p>
                            <span>
                                part of the global effort to reduce greenhouse gas emissions
                            </span>
                            <p> and create a cleaner, more sustainable world.</p>
                        </div>
                    </div>
                </div>
                <div className="our-service-div">
                    <div className="service-heading">
                        <h2>Our Services</h2>
                    </div>
                    <div className="service-content-div">
                        <div>
                            <h3>Residential Solar:</h3>
                            <p>
                                We offer solar solutions for homeowners, enabling them to generate
                                their residential solar panels are designed for use on homes and smaller-scale installations to harness solar energy and convert it into electricity for household consumption. They share many similarities with industrial solar panels but are typically smaller and more suited for the needs of individual homeowners.
                            </p>
                        </div>
                        <div>
                            <h3>Commercial Solar:</h3>
                            <p> Our commercial solar panels are meticulously designed to harness the power of the sun, efficiently converting sunlight into clean, renewable electricity. With advanced photovoltaic technology, these panels are built to deliver high-performance, ensuring optimal energy production for your commercial operations.</p>
                        </div>
                        <div>
                            <h3>Installation & Maintenance:</h3>
                            <p>
                                Our skilled technicians handle the seamless installation of your solar system and provide regular maintenance to ensure optimal
                                performance.
                                we're your trusted partner in harnessing the power of the sun for clean, renewable energy. Our comprehensive solar panel installation and maintenance services are designed to make your transition to solar power seamless, efficient, and worry-free.
                            </p>

                        </div>
                        <div>
                            <h3>Solar Financing:</h3>
                            <p>
                                We offer flexible financing options to make the transition to
                                solar energy affordable and accessible.
                                Our solar loans are a straightforward way to finance your solar panel installation. With competitive interest rates and flexible terms, you can secure the funds needed to go solar while keeping control of your solar energy system. You'll enjoy the benefits of reduced energy bills and long-term savings from day one.
                            </p>

                        </div>
                    </div>
                </div>
                <div className="why-choose-us-solar-solution flex flex-col p-5">
                    <h3 className="">Why are we trusted for solar power solutions?</h3>
                    <li>Sunshakti Solar's solutions have been improving people's lives for decades, and the unrelenting work we put into producing solutions that are both practical and high-quality is what has helped us establish a trusting relationship with millions of customers.</li>
                    <li>
                        World-class solar solutions for 25 years. Sunshakti Solar is known for its quality and reliability in goods and project execution in Jaipur and Rajasthan, thanks to its technical innovation and cutting-edge manufacturing.
                    </li>
                    <li>
                        We have a group of seasoned professionals who have been enjoying their time spent working with us for a considerable amount of time.
                    </li>
                    <li>
                        We have decreased carbon emissions with our solar installation in order to help India become more environmentally friendly.
                    </li>
                </div>
            </div>
        </>
    );
};

export default About;
