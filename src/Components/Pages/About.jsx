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

        const observer = new IntersectionObserver(handleScroll, { threshold: 1.0 });

        observer.observe(document.querySelector(".about-div-animate"));
        observer.observe(document.querySelector(".left-mission-div-animate"));
        observer.observe(document.querySelector(".about-div-animate"));

        return () => {
            observer.disconnect();
        };
    }, []);

    return (
        <div className="parent-about-div">
            <div className={aboutanimate ? "about-div" : "about-div-animate"}>
                <h2>ABOUT US</h2>
            </div>

            <div className="about-content-div">
                <p>
                    Welcome to Sun Sakti Solar Sakti, a beacon of sustainable energy solutions. We are a forward-thinking solar energy company driven by our dedication to shaping a brighter and greener future for generations to come. Our commitment to innovation, excellence, and environmental responsibility defines who we are and what we stand for.
                    At Sun Sakti Solar, we are committed to harnessing the boundless power
                    of the sun to create a greener and more sustainable future. As a
                    leading solar energy company, we are driven by a vision to make
                    renewable energy accessible and affordable for everyone. With a
                    passion for innovation and environmental responsibility, we strive to
                    be at the forefront of the sola revolution.
                </p>
            </div>
            <div className="mission-div">
                <div
                    className={
                        secondDivAnimate ? "left-mission-div" : "left-mission-div-animate"
                    }
                >
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
                        <span>
                            We offer solar solutions for homeowners, enabling them to generate
                            their{" "}
                        </span>
                        <span>
                            electricity and reduce their reliance on traditional energy
                            sources.
                        </span>
                    </div>
                    <div>
                        <h3>Commercial Solar:</h3>
                        <span>
                            Businesses can benefit from our commercial solar installations,
                            allowing{" "}
                        </span>
                        <span>
                            them to cut operational costs and demonstrate their commitment to
                            sustainability
                        </span>
                    </div>
                    <div>
                        <h3>Solar System Design: </h3>
                        <span>
                            Our expert team will design a customized solar system optimized
                            for
                        </span>
                        <span>your location, energy needs, and aesthetic preferences</span>
                    </div>
                    <div>
                        <h3>Installation & Maintenance:</h3>
                        <span>
                            {" "}
                            Our skilled technicians handle the seamless installation of your{" "}
                        </span>
                        <span>
                            solar system and provide regular maintenance to ensure optimal
                            performance.
                        </span>
                    </div>
                    <div>
                        <h3>Solar Financing:</h3>
                        <span>
                            We offer flexible financing options to make the transition to
                            solar energy{" "}
                        </span>
                        <span>affordable and accessible.</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;
