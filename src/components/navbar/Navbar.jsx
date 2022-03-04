import React from "react";
import { useState } from "react";
import { RiMenu3Line, RiCloseLine } from "react-icons/ri";
import logo from "../../assets/logo.svg";

const Menu = () => (
  <>
    <p>
      <a href="#home" className="hover-effect">
        Home
      </a>
    </p>
    <p>
      <a href="#wgpt3" className="hover-effect">
        What is GPT3?
      </a>
    </p>
    <p>
      <a href="#possibility" className="hover-effect">
        Open AI
      </a>
    </p>
    <p>
      <a href="#features" className="hover-effect">
        Case Studies
      </a>
    </p>
    <p>
      <a href="#blog" className="hover-effect">
        Library
      </a>
    </p>
  </>
);

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);
  return (
    <div className="flex items-center justify-between py-8 px-24 text-white mid:py-4 mid:px-8 small:p-8">
      <div className=" flex flex-1 justify-between items-center">
        <div className="mr-8">
          <img src={logo} alt="logo" className="w-[62.56px] h-[16.02px]" />
        </div>
        <div className="flex text-[18px] font-[500] leading-[24.59px] link-container">
          <Menu />
        </div>
        <div className="sign flex justify-end items-center tablet:ml-96 mid:hidden">
          <p className="hover-effect">Sign in</p>
          <button type="button" className="bg-buttonBg hover-effect">
            Sign up
          </button>
        </div>
        <div className="text-white ml-4 nav-menu relative ">
          {toggleMenu ? (
            <RiCloseLine size={27} className="cursor-pointer hover-effect" onClick={() => setToggleMenu(false)} />
          ) : (
            <RiMenu3Line size={27} className="cursor-pointer hover-effect" onClick={() => setToggleMenu(true)} />
          )}
          {toggleMenu && (
            <div className="scale-up-center nav-menu-link flex justify-end items-end flex-col text-right bg-colorFooter p-8 absolute top-10 right-0 mt-4 min-w-[210px] rounded shadow small:top-[20px]">
              <div>
                <Menu />
              </div>
              <div className="hidden mid:block">
                <p className="my-4 mx-0 hover-effect">Sign in</p>
                <button type="button" className="bg-buttonBg hover-effect">
                  Sign up
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
