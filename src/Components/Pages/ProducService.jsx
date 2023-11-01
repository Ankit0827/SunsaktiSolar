/* eslint-disable no-template-curly-in-string */
import { useEffect, useState } from "react";
import "../../CSS/Product.css";
import Shimmer from "./Subpages/Shimerui";
import { Link } from "react-router-dom";
import Residential from "./Subpages/Residendtial";
import Industrial from "./Subpages/Industrial";

const ProductService = () => {
  const [loading, setLoading] = useState(true);

  const cardproduct = [
    {
      id: 1,
      imgUrl:
        "https://www.atw-solar.id/static/9a9057e346e25c3fef2fd63d0ffcb4de/59a44/cni-hero.png",
      heading: "Residential Solar Pannel",
      Para1: "Sadipscing elitr, sed diam nonumy",
      para2: "eirmod tempor invidunt lare dolore",
      para3: "magna aliquyam sed diam voluptua",
      btn: "READ MORE",
      pagePath: { Residential }
    },
    {
      id: 2,
      imgUrl:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTQCb5I5IKUU6hRaa3mrruP5XUUwsDgCd7trw&usqp=CAU",
      heading: "Industrial Solar Pannel",
      Para1: "Sirloin filet mignon beef ribs kevin",
      para2: "fatback turkey meatloaf. Cow",
      para3: "kielbasa ground round spare ribs.",
      btn: "READ MORE",
      pagePath: { Industrial }

    },
    {
      id: 3,
      imgUrl:
        "https://i0.wp.com/www.bioenergyconsult.com/wp-content/uploads/2021/10/residential-solar-system.jpg?ssl=1",
      heading: "Commercial Solar Pannel",
      Para1: "Sadipscing elitr, sed diam nonumy",
      para2: "eirmod tempor invidunt lare dolore",
      para3: "magna aliquyam sed diam voluptua",
      btn: "READ MORE",
      pagePath: { Residential }

    },
    {
      id: 4,
      imgUrl:
        "https://images.squarespace-cdn.com/content/v1/59765fd317bffcafaf5ff75c/05aac96e-354f-4c1e-aaf0-da732bc54594/Agrivoltaic-Jacks-Solar-Farm-Photo-by-Werner-Slocum-NREL.jpeg",
      heading: "Aggriculture Solar Pannel",
      Para1: "Landjaeger bresaola cow pork, jowl",
      para2: "salami kevin tri-tip corned beef",
      para3: "sirloin burgdoggen venison",
      btn: "READ MORE",
      pagePath: { Industrial }

    },
  ];

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 3000);

    return () => clearTimeout(timer);
  });

  return loading ? (
    <Shimmer />
  ) : (
<>
    <div className="service-heading-div">
    <h1 style={{
      borderBottom:"2px solid white"
    }}>Product And Services</h1>
   </div>
    <div className="ProducService-parent-div">
      {cardproduct.map((res, index) => (
        <div
          className={
            loading ? "prodduct-card-div" : "prodduct-card-div-animate"
          }
          key={res.id}
        >
          <div className="product-img-div">
            <img src={res.imgUrl} alt="/" className="product-img" width="100%" height="100%"/>
          </div>
          <div className="product-content-div">
            <h2>{res.heading}</h2>
            <span>{res.Para1}</span>
            <span>{res.para2}</span>
            <span>{res.para3}</span>
          </div>
          <div className="btn-div">
            <Link to={`/ProducService/${cardproduct[index].id}`} className="link-btn">
              {res.btn}...
            </Link>
          </div>
        </div>
      ))}

    </div>
    </>
  );
};

export default ProductService;
