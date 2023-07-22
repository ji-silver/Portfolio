import React, { useState } from "react";

const Navbar = () => {
  const [toggle, setToggle] = useState("true");
  return (
    <div className="fixed top-0 left-0 right-0 ">
      <div className="px-5 max-w-[1590px] mx-auto flex items-center justify-between pt-6 my-2">
        <div className="left gap-2 font-bold text-base">
          <div className="logo">Portfolio</div>
        </div>
        <div className="right flex items-center">
          <div
            className={`menu duration-300 flex-col justify-center md:flex-row flex fixed w-full ${
              !toggle
                ? `right-[-100%] top-0 bottom-0`
                : `right-0 top-0 bottom-0`
            } md:static bg-[white]`}
          >
            <a href="#">
              <li className="text-[#616161] text-[32px] my-4 md:my-auto md:text-base mx-4">
                <span className="text-[#e97db6] font-medium">#</span>
                Home
              </li>
            </a>
            <a href="#">
              <li className="text-[#616161] text-[32px] my-4 md:my-auto md:text-base mx-4">
                <span className="text-[#e97db6] font-medium">#</span>
                Project
              </li>
            </a>
            <a href="#">
              <li className="text-[#616161] text-[32px] my-4 md:my-auto md:text-base mx-4">
                <span className="text-[#e97db6] font-medium">#</span>
                About Me
              </li>
            </a>
            <a href="#">
              <li className="text-[#616161] text-[32px] my-4 md:my-auto md:text-base mx-4">
                <span className="text-[#e97db6] font-medium">#</span>
                Contact
              </li>
            </a>
            <div
              onClick={() => setToggle(false)}
              className="close absolute block md:hidden right-3 top-3"
            >
              <img src={require("./img/close.png")} alt="" />
            </div>
          </div>
          <div onClick={() => setToggle(true)} className="">
            <div className="open block md:hidden w-8">
              <div className="w-full h-[1px] my-2 rounded-r-3xl bg-[#616161]"></div>
              <div className="w-full h-[1px] my-2 rounded-r-3xl bg-[#616161]"></div>
              <div className="w-full h-[1px] my-2 rounded-r-3xl bg-[#616161]"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
