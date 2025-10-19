import React from "react";

import CommonCatalog from "./CommonCatalog";
import catimg1 from "/images/div.service-img.png";
import { PiCraneDuotone, PiSolarRoof } from "react-icons/pi";
import catimg2 from "/images/2.png";
import { BsBuilding } from "react-icons/bs";
import catimg3 from "/images/3.png";
import { FiHome } from "react-icons/fi";
import catimg4 from "/images/4.png";

const Catalog = () => {
  return (
    <>
      <div className="container flex items-center justify-between">
        <CommonCatalog
          img={catimg1}
          icon={<PiSolarRoof />}
          textg={"Flooring Roofing"}
        />
        <CommonCatalog
          img={catimg2}
          icon={<BsBuilding />}
          textg={"Building Renovation"}
        />
        <CommonCatalog
          img={catimg3}
          icon={<FiHome />}
          textg={"Archaitecture Design"}
        />
        <CommonCatalog
          img={catimg4}
          icon={<PiCraneDuotone />}
          textg={"Flooring Crane"}
        />
      </div>
    </>
  );
};

export default Catalog;
