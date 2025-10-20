import React from "react";

const CommonCatalog = ({ img, icon, textg }) => {
  return (
    <>
      <div className="main w-[227px] animate-bounce">
        <div className="img">
          <img src={img} alt="img" />
        </div>

        <div className="con flex items-center gap-4 mt-7">
          <div className="logo w-16 h-16 text-4xl bg-gray-200 rounded-full flex items-center justify-center">
            {icon}
          </div>
          <div className="text text-2xl text-[#1F1F1F] font-exo font-bold w-[86px]">
            {textg}
          </div>
        </div>
      </div>
    </>
  );
};

export default CommonCatalog;
