import React from "react";
import bannerImg from "/images/banner.png";

const Banner = () => {
  return (
    <>
      <div className="main w-full">
        <div className="banner-img w-full flex justify-center">
          <img className="object-fill" src={bannerImg} alt="banner" />
        </div>
      </div>
    </>
  );
};

export default Banner;
