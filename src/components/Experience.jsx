import React from "react";
import exp from "../images/exp.png";
import imggg from '../images/lolo.png'

const Experience = () => {
  return (
    <>
      <div className="main container flex items-center justify-center gap-3 pt-[133px] pb-[440px]">
        <div className="exp-img" data-aos="fade-up">
          <img src={exp} alt="exp" />
        </div>


        <div className="exp-content" data-aos="fade-down">
            <img src={imggg} alt="content" />
        </div>

      </div>
    </>
  );
};

export default Experience;
