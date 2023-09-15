import React from "react";
import { useParams } from "react-router-dom";
import "../../../CSS/Residential.css";
import { viewMoreData } from '../../../utills/mockData'

const Residential = () => {
  const { urlId } = useParams();

  console.log("Url Id:", urlId);



  const index = viewMoreData.findIndex((a) => a.id === +urlId);

  console.log("index found", index);

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
      
      <div className="herosection-div">
        <div className="main-heading-div">
          <h3>{item.description[0].mainHeading}</h3>
        </div>

        <div className="main-heading-content-div">
          <p>{item.description[0].para}</p>
        </div>

        <div className="residential-content-div">
        {
        item.description[1]?.subdescription?.map((data) => (
          <div className="residential-content-main-div">
            <div className="content-heading-div">
               <h3>{data.heading}</h3>
            </div>
            <div className="pages-content-div">
              <p>{data.content}</p>
            </div>
            
          </div>
        ))
          }
        </div>
      </div>

    </div>
  );
};

export default Residential;
