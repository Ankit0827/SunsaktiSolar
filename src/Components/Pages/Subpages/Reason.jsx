import '../../../CSS/Reason.css'

const Reason = () => {
  const Solarenergy = [
    {
      id: 1,
      heading: "Environmentally Friendly",
      headingContent:
        "Solar energy is clean and renewable, reducing your carbon footprint and helping combat climate change.",
    },
    {
      id: 2,
      heading: "Cost-Effective",
      headingContent:
        "With solar panels, you can significantly lower your energy costs and enjoy long-term savings.",
    },
    {
      id: 3,
      heading: "Energy Independence",
      headingContent:
        "Generate your electricity and be less reliant on traditional energy sources.",
    },
    {
      id: 4,
      heading: "Government Incentives",
      headingContent:
        "Take advantage of tax credits and incentives for installing solar panels.",
    },
  ];



  return (
    <div className="reason-parent-div">
      <div className="reason-heading-content-div">
        <div className="why-heading-div">
          <h2>Why Choose Solar Energy ?</h2>
        </div>
        {Solarenergy.map((res) => (
          <div className="reason-explain-div" key={res.id}>
            <div className="reason-heading-div">
              <h4>{res.heading}</h4>
            </div>
            <div className="heading-content-div">
              <p>{res.headingContent}</p>
            </div>
          </div>
        ))}
      </div>
      <div className="reason-img-div">
        <img
          src="https://solaren-power.com/wp-content/uploads/2020/05/which-2-scaled.jpg"
          alt="reason-img"
        />
      </div>
    </div>
  );
};

export default Reason;
