import React from "react";

const CTA = () => {
  return (
    <div
      className="gradient__bar flex justify-between items-center p-12 rounded-[10.7236px] m-16 tablet:p-10 mid:flex-col mid:gap-8 small:mx-8 my-16"
      data-aos="fade-up"
    >
      <div className="flex-1 justify-start mid:justify-center">
        <p className="text-[12px] leading-[30px]">Request Early Access to Get Started</p>
        <h3 className="text-[24px] leading-[45px] font-extrabold small:text-[18px]">
          Register today & start exploring the endless possiblities.
        </h3>
      </div>
      <div className="flex flex-1 justify-end items-center">
        <button
          type="button"
          className="bg-black text-white rounded-[40px] font-bold text-[18px] leading-[30px] py-4 px-8 tablet:text-[12px] hover-effect"
        >
          Get Started
        </button>
      </div>
    </div>
  );
};

export default CTA;
