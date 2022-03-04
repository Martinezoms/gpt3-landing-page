import React from "react";
import gpt3Logo from "../../assets/logo.svg";

const Footer = () => {
  return (
    <div className="bg-colorFooter text-white mt-16 flex flex-col justify-center items-center">
      <div className=" w-full text-center my-20 flex items-center justify-center">
        <h1 className="gradient__text text-[62px] leading-[75px] max-w-[821px] font-extrabold mid:text-[52px] mid:leading-[60px] mid:max-w-[700px] small:text-[32px] small:leading-[40px]">
          Do you want to step in to the future before others
        </h1>
      </div>
      <div className=" border border-solid border-white p-6 cursor-pointer">
        <p className="text-[18px] leading-[21px]">Request Early Access</p>
      </div>
      <div className="flex justify-between items-start flex-wrap text-left w-full px-48 mt-48 mb-24 small:px-8">
        <div className="flex flex-col w-[250px] m-4 mb-8">
          <img src={gpt3Logo} alt="logo" className="w-[118px] h-[30px] mb-4" />
          <p className="text-[12px] leading-[14px]">Crechterwoord K12 182 DK Alknjkcb, All Rights Reserved</p>
        </div>
        <div className="flex justify-end flex-wrap mid:grid mid:grid-cols-3 mid:mt-8 small:flex ">
          <div className="w-[250px] m-4 link-div">
            <h4>Links</h4>
            <p>Overons</p>
            <p>Social Media</p>
            <p>Counters</p>
            <p>Contact</p>
          </div>
          <div className="w-[250px] m-4 link-div">
            <h4>Company</h4>
            <p>Terms & Conditions</p>
            <p>Privacy Policy</p>
            <p>Contact</p>
          </div>
          <div className="w-[250px] m-4 link-div">
            <h4>Get in touch</h4>
            <p>Crechterwoord K12 182 DK Alknjkcb</p>
            <p>085-132567</p>
            <p>info@payme.net</p>
          </div>
        </div>
      </div>

      <div className="w-[250px] m-4 text-[12px] leading[14px] flex justify-center">
        <p>© 2021 GPT-3. All rights reserved.</p>
      </div>
    </div>
  );
};

export default Footer;
