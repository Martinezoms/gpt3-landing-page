import React from "react";
import { blog01, blog02, blog03, blog04, blog05 } from "./imports";
import { Article } from "../../components";

const Blog = () => {
  return (
    <div id="blog" className="section__padding flex flex-col">
      <div className="w-full text-left mb-20" data-aos="fade-up" data-aos-anchor-placement="bottom-center">
        <h1 className="gradient__text text-[62px] leading-[75px] tracking-[-0.04em] font-extrabold max-w-[701px] mid:text-[46px] mid:leading-[52px] small:text-[34px] small:leading-[42px]">
          A lot is happening,
          <br /> We are blogging about it.
        </h1>
      </div>
      <div className="flex tablet:flex-col-reverse">
        <div className="flex flex-[0.75] mr-9 groupA tablet:my-8 tablet:mx-0" data-aos="zoom-in" data-aos-delay="400">
          <Article
            imgUrl={blog01}
            date="Sep 26, 2021"
            title="GPT-3 and Open  AI is the future. Let us exlore how it is?"
          />
        </div>
        <div className="flex-1 grid grid-cols-2 gap-9 mid:grid-cols-1" data-aos="zoom-in" data-aos-delay="800">
          <Article
            imgUrl={blog02}
            date="Sep 26, 2021"
            title="GPT-3 and Open  AI is the future. Let us exlore how it is?"
          />
          <Article
            imgUrl={blog03}
            date="Sep 26, 2021"
            title="GPT-3 and Open  AI is the future. Let us exlore how it is?"
          />
          <Article
            imgUrl={blog04}
            date="Sep 26, 2021"
            title="GPT-3 and Open  AI is the future. Let us exlore how it is?"
          />
          <Article
            imgUrl={blog05}
            date="Sep 26, 2021"
            title="GPT-3 and Open  AI is the future. Let us exlore how it is?"
          />
        </div>
      </div>
    </div>
  );
};

export default Blog;
