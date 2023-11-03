import React, { useState } from "react";
import { SolarPower } from "../../../utills/mockData";

const SolarPowerSolution = () => {
  const [openItem, setOpenItem] = useState(null);

  const toggleAccordion = (heading) => {
    if (openItem === heading) {
      // If the clicked item is already open, close it
      setOpenItem(null);
    } else {
      // Open the clicked item and close all others
      setOpenItem(heading);
    }
  };

  return (
    <div className="solar-power-solution-div flex flex-col  gap-12 border-2 mt-5 bg-gray-100 rounded">
      <div className="solar-power-solution-heading-div flex items-center justify-center text-white p-5 bg-[#234579] rounded">
        <h3>As a "solar power company in Jaipur," we provide the following services.</h3>
      </div>

      <div className="child-solar-power-solution flex gap-2 flex-wrap">
        {SolarPower.map((res) => (
          <div className="relative mb-3" key={res.heading}>
            <h4 className="mb-0 p-2">
              <button
                className="border-slate-100 text-slate-700 rounded-t-1 group relative flex w-full cursor-pointer items-center border-b border-solid p-4 text-left font-semibold text-dark-500 transition-all ease-in"
                onClick={() => toggleAccordion(res.heading)}
              >
                <span>{res.heading}</span>
                <i
                  className={`fa fa-chevron-${
                    openItem === res.heading ? "up" : "down"
                  } absolute right-0 pt-1 text-base transition-transform group-open:rotate-180`}
                ></i>
              </button>
            </h4>
            <div
              className={`overflow-hidden transition-all duration-300 ease-in-out ${
                openItem === res.heading ? "h-auto" : "h-0"
              }`}
            >
              <div className="p-4 mx-4 text-sm leading-normal text-blue-gray-500/80 bg-slate-500 text-white rounded">
                {res.content}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SolarPowerSolution;
