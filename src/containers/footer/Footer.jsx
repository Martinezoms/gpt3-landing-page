import React from "react";
import gpt3Logo from "../../assets/logo.svg";

const Footer = () => {
  return (
    <div className="bg-colorFooter text-white w-full h-full mt-16 flex flex-col items-center">
      <div className="my-24 text-center">
        <h1 className="gradient__text text-[62px] leading-[75px] font-extrabold max-w-[821px]">
          Do you want to step in to the future before others
        </h1>
      </div>
      <div>
        <p>Request Early Access</p>
      </div>
      <div>
        <div>
          <img src={gpt3Logo} alt="logo" />
          <p>Crechterwoord K12 182 DK Alknjkcb, All Rights Reserved</p>
        </div>
        <div>
          <div>
            <h4>Links</h4>
            <p>Overons</p>
            <p>Social Media</p>
            <p>Counters</p>
            <p>Contact</p>
          </div>
          <div>
            <h4>Company</h4>
            <p>Terms & Conditions</p>
            <p>Privacy Policy</p>
            <p>Contact</p>
          </div>
          <div>
            <h4>Get in touch</h4>
            <p>Crechterwoord K12 182 DK Alknjkcb</p>
            <p>085-132567</p>
            <p>info@payme.net</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
