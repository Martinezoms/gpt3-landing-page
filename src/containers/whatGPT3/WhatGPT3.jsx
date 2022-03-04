import React from "react";
import { Feature } from "../../components";

const WhatGPT3 = () => {
  return (
    <div id="wgpt3" className="section__margin gradient__whatgtp3 px-12 py-16 flex flex-col">
      <div className=" flex whatgpt3-feature">
        <Feature
          title="What is GPT-3"
          text="We so opinion friends me message as delight. Whole front do of plate heard oh ought. His defective nor convinced residence own. Connection has put impossible own apartments boisterous. At jointure ladyship an insisted so humanity he. Friendly bachelor entrance to on by."
        />
      </div>
      <div className="flex justify-between items-center mt-16 mb-8 tablet:flex-col tablet:items-start tablet:mb-0">
        <h1 className="gradient__text max-w-[510px] text-[34px] leading-[45px] font-extrabold tablet:mt-4 mid:text-[24px] mid:leading-[40px]">
          The possibilities are beyond your imagination
        </h1>
        <p className="text-colorSubText text-[16px] leading-[30px] font-medium cursor-pointer hover-effect">
          Explore The Library
        </p>
      </div>
      <div className="flex flex-row flex-wrap mt-8 whatgpt3-container">
        <Feature
          title="Chatbots"
          text="We so opinion friends me message as delight. Whole front do of plate heard oh ought."
        />

        <Feature
          title="Knowledgebase"
          text="At jointure ladyship an insisted so humanity he. Friendly bachelor entrance to on by. As put impossible own apartments"
        />

        <Feature
          title="Education"
          text="At jointure ladyship an insisted so humanity he. Friendly bachelor entrance to on by. As put impossible own apartments"
        />
      </div>
    </div>
  );
};

export default WhatGPT3;
