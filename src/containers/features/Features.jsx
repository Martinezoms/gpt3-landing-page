import React from "react";
import { Feature } from "../../components";
const featuresData = [
  {
    title: "Improving end distrusts instantly",
    text: "From they fine john he give of rich he. They age and draw mrs like. Improving end distrusts may instantly was household applauded."
  },
  {
    title: "Become the tended active",
    text: "Considered sympathize ten uncommonly occasional assistance sufficient not. Letter of on become he tended active enable to."
  },
  {
    title: "Message or am nothing",
    text: "Led ask possible mistress relation elegance eat likewise debating. By message or am nothing amongst chiefly address."
  },
  {
    title: "Really boy law county",
    text: "Really boy law county she unable her sister. Feet you off its like like six. Among sex are leave law built now. In built table in an rapid blush.."
  }
];

const Features = () => {
  return (
    <div id="features" className="flex justify-between section__padding mt-36 w-full overflow-hidden tablet:flex-col">
      <div className="flex flex-col flex-1 tablet:mb-8" data-aos="fade-right" data-aos-delay="100">
        <h1 className="gradient__text text-[34px] leading-[45px] font-extrabold max-w-[426px] small:text-[28px] small:leading-[38px]">
          The Future is Now and You Just Need To Realize It. Step into Future Today & Make it Happen.
        </h1>
        <p className="text-colorSubText text-[16px] leading-[30px] font-medium cursor-pointer mt-8 hover-effect">
          Request Early Access to Get Started
        </p>
      </div>
      <div
        className="flex flex-col flex-1 items-center justify-start features-container "
        data-aos="fade-left"
        data-aos-delay="500"
      >
        {featuresData.map((item, i) => (
          <Feature key={i} {...item} />
        ))}
      </div>
    </div>
  );
};

export default Features;
