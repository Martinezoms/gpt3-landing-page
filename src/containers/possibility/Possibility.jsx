import React from "react";
import PossibilityImg from "../../assets/possibility.png";

const Possibility = () => {
  return (
    <div id="possibility" className="section__padding flex justify-between tablet:flex-col">
      <div className="flex flex-1 justify-start items-center mr-4 tablet:my-6" data-aos="zoom-in" data-aos-delay="200">
        <img src={PossibilityImg} alt="possibility" className="w-full h-full" />
      </div>
      <div className="flex flex-col flex-1 justify-end items-start tablet:mt-8" data-aos="fade-up" data-aos-delay="300">
        <h4 className="text-colorText2 text-[16px] leading-[30px] font-medium mb-4">
          Request Early Access to Get Started
        </h4>
        <h1 className="gradient__text text-[34px] leading-[45px] font-extrabold mb-8">
          The possibilities are beyond your imagination
        </h1>
        <p className="text-colorText text-[16px] leading-[30px] font-medium mb-8">
          Yet bed any for travelling assistance indulgence unpleasing. Not thoughts all exercise blessing. Indulgence
          way everything joy alteration boisterous the attachment. Party we years to order allow asked of.
        </p>
        <h4 className="text-colorSubText text-[16px] leading-[30px] font-medium mb-8 cursor-pointer hover-effect">
          Request Early Access to Get Started
        </h4>
      </div>
    </div>
  );
};

export default Possibility;
