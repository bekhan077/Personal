import React from "react";
import imgSidebar from "../../public/assets/bg-sidebar-desktop.svg";

const Sitebar = ({ active }) => {
  return (
    <div
      className="w-[300px]
   relative"
    >
      <div className="relative">
        <img src={imgSidebar} alt="sidebar-img" />
      </div>
      <div>
        <div className="absolute top-[40px] left-[50px] flex  gap-2 items-center">
          <span
            className={`w-[40px] flex justify-center items-center h-[40px] rounded-[50%] bg-[#BEE2FD]`}
          >
            1
          </span>
          <div className="">
            <p className="text-[#9997FE] text-sm">STEP 1</p>
            <p className="text-white">YOUR INFO</p>
          </div>
        </div>
        <div className="absolute top-[110px] left-[50px] flex gap-2 items-center">
          <span className="w-[40px] flex justify-center items-center h-[40px] rounded-[50%] text-white border">
            2
          </span>
          <div className="">
            <p className="text-[#9997FE] text-sm">STEP 2</p>
            <p className="text-white">SELECT PLAN</p>
          </div>
        </div>{" "}
        <div className="absolute top-[180px] left-[50px] flex gap-2 items-center">
          <span className="w-[40px] flex justify-center items-center h-[40px] rounded-[50%]  text-white border">
            3
          </span>
          <div className="">
            <p className="text-[#9997FE] text-sm">STEP 3</p>
            <p className="text-white">ADD-ONS</p>
          </div>
        </div>{" "}
        <div className="absolute top-[250px] left-[50px] flex gap-2 items-center">
          <span className="w-[40px] flex justify-center items-center h-[40px] rounded-[50%]  text-white border">
            4
          </span>
          <div className="">
            <p className="text-[#9997FE] text-sm">STEP 4</p>
            <p className="text-white">SUMMARY</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sitebar;
