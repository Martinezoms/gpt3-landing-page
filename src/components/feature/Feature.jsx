import React from "react";

const Feature = ({ title, text }) => {
  return (
    <div className="flex m-4 w-full justify-between items-start flex-row features-container__feature small:m-0 small:my-4 small:mx-0">
      <div className=" flex-1 mr-8 mb-12 features-container__feature-title small:mb-4">
        <div className="w-[38px] h-[3px] mb-4 gradient__bar small:mb-2" />
        <h1 className="text-white tracking-[-0.04em] text-[24px] leading-[24px] font-extrabold small:text-[14px] small:leading-[22px]">
          {title}
        </h1>
      </div>
      <div className="features-container__feature-text">
        <p className="text-colorText text-[16px] leading-[30px] font-medium small:text-[12px] small:leading-[20px]">
          {text}
        </p>
      </div>
    </div>
  );
};

export default Feature;
