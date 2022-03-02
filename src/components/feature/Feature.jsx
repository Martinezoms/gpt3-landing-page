import React from "react";

const Feature = ({ title, text, first }) => {
  return (
    <div className={first ? "flex-row m-4 min-w-[210px]" : "flex-1 flex-col m-4 min-w-[210px]"}>
      <div>
        <div />
        <h1>{title}</h1>
      </div>
      <div className="sub-text max-w-[700px]">
        <p>{text}</p>
      </div>
    </div>
  );
};

export default Feature;
