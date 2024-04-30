import React from "react";
import imgArcade from "../../public/assets/icon-arcade.svg";
import imgArvanced from "../../public/assets/icon-advanced.svg";
import imgPro from "../../public/assets/icon-pro.svg";

const Select = ({ check, handleCheck }) => {
  console.log(check);
  return (
    <div>
      <div>
        <h1 className="text-3xl font-bold text-[#002553] mt-[20px]">
          Select your plan
        </h1>
        <p className="text-[#AAABB0] mt-2">
          You have the option of monthly or yearly biling.
        </p>
      </div>
      <div className="flex mt-[40px] gap-4">
        <div className="border pl-[10px] rounded-md py-[20px] w-[135px] hover:border-blue-800">
          <img src={imgArcade} alt="icon-img" />
          <p className="pt-[20px] text-[#002553] font-semibold">Arcade</p>
          <p className="text-[#AAABB0]">$9/mo</p>
        </div>
        <div className="border pl-[10px] rounded-md py-[20px] w-[135px] hover:border-blue-800">
          <img src={imgArvanced} alt="icon-img" />
          <p className="pt-[20px] text-[#002553] font-semibold">Advanced</p>
          <p className="text-[#AAABB0]">$12/mo</p>
        </div>
        <div className="border pl-[10px] rounded-md py-[20px] w-[135px] hover:border-blue-800">
          <img src={imgPro} alt="icon-img" />
          <p className="pt-[20px] text-[#002553] font-semibold">Pro</p>
          <p className="text-[#AAABB0]">$15/mo</p>
        </div>
      </div>
      <div className="flex justify-center gap-6 bg-slate-100 items-center py-3 mt-8 rounded-xl cursor-pointer">
        <p
          className={`font-semibold transition ${
            check ? "text-[#002553]" : "text-[#AAABB0]"
          } :`}
        >
          Monthly
        </p>
        <span
          onClick={() => handleCheck()}
          className="w-[50px] h-[20px] bg-[#002553] rounded-3xl px-1 relative"
        >
          <div
            className={`w-[15px] h-[15px] absolute  ${
              check ? "left-[3px]" : "left-[32px]"
            }  top-[2px] bg-white rounded-full `}
          ></div>
        </span>
        <p
          className={`font-semibold transition ${
            check ? "text-[#AAABB0]" : "text-[#002553]"
          }`}
        >
          Yearly
        </p>
      </div>

      <button className="font-semibold text-[#002553] mt-[130px]">
        Go Back
      </button>
      <button
        onClick={() => handleClick("2")}
        className="ml-[315px] mt-[100px] px-7 py-3 rounded-lg text-white bg-[#002553df]"
      >
        Next Step
      </button>
    </div>
  );
};

export default Select;
