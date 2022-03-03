import React from "react";

const Article = ({ imgUrl, date, title }) => {
  return (
    <div className="w-full h-full flex flex-col text-white article">
      <div className="w-full h-full">
        <img src={imgUrl} alt="blog" className="w-full h-full" />
      </div>
      <div className="flex flex-col justify-between py-4 px-6 h-full bg-colorFooter">
        <div>
          <p className="text-[11.649px] leading-[35px] font-bold">{date}</p>
          <h3 className="text-[25.11px] leading-[30px] font-extrabold cursor-pointer mb-20 small:text-[18px] small:leading-[25px]">
            {title}
          </h3>
        </div>
        <div>
          <p className="cursor-pointer text-[11.649px] leading-[35px] font-bold">Read Full Article</p>
        </div>
      </div>
    </div>
  );
};

export default Article;
