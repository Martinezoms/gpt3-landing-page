import React from "react";
import { google, slack, atlassian, dropbox, shopify } from "./imports";

const Brand = () => {
  return (
    <div className="section__padding flex flex-wrap justify-center items-center brand">
      <div>
        <img src={google} alt="google" className="cursor-pointer" />
      </div>
      <div>
        <img src={slack} alt="slack" className="cursor-pointer" />
      </div>
      <div>
        <img src={atlassian} alt="atlassian" className="cursor-pointer" />
      </div>
      <div>
        <img src={dropbox} alt="dropbox" className="cursor-pointer" />
      </div>
      <div>
        <img src={shopify} alt="shopify" className="cursor-pointer" />
      </div>
    </div>
  );
};

export default Brand;
