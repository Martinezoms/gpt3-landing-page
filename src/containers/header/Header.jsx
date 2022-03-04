import React from "react";
import people from "../../assets/people.png";
import ai from "../../assets/ai.png";

const Header = () => {
  return (
    <div id="home" className="section__padding flex items-center tablet:flex-col">
      <div
        className="flex flex-col mr-20 justify-center items-start flex-1 tablet:m-auto"
        data-aos="fade-up"
        data-aos-delay="300"
      >
        <h1 className="gradient__text text-[62px] leading-[75px] tracking-[-0.04rem] font-extrabold mid:text-[50px] mid:leading-[60px] small:text-[35px] small:leading-[48px] max-w-[614px]">
          Let’s Build Something amazing with GPT-3 OpenAI
        </h1>
        <p className=" text-[20px] leading-[27px] font-[400] text-colorText mt-6 mid:text-lg small:text-sm">
          Yet bed any for travelling assistance indulgence unpleasing. Not thoughts all exercise blessing. Indulgence
          way everything joy alteration boisterous the attachment. Party we years to order allow asked of.
        </p>
        <div className="w-full my-8 mr-4 flex text-[20px] leading-[27px] mid:text-sm mid:leading-[24px] small:text-[12px] small:leading-[18px]">
          <input
            type="email"
            placeholder="Your Email Address"
            className=" rounded-l-md bg-inputBg focus:outline-none text-inputText flex-[2] w-full min-h-[50px] p-5 small:p-2 small:h-[25px]"
          />
          <button
            type="button"
            className="text-white font-bold p-5 rounded-r-md bg-buttonBg flex-[0.6] w-full min-h-[50px] small:p-2 small:h-[25px]"
          >
            Get Started
          </button>
        </div>
        <div
          className="text-white font-medium text-xs leading-[38px] w-full flex gap-3 justify-start items-center mt-8 mid:flex-col"
          data-aos="fade-right"
          data-aos-delay="500"
        >
          <img src={people} alt="people" className="w-[181.79px] h-[38px]" />
          <p>1,600 people requested access a visit in last 24 hours</p>
        </div>
      </div>
      <div className="flex flex-1 justify-center items-center" data-aos="fade-up">
        <img src={ai} alt="ai" className="w-full h-full" />
      </div>
    </div>
  );
};

export default Header;
