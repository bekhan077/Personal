import React from "react";

const Personal = ({ handleClick }) => {
  return (
    <div className="flex flex-col pt-5 pl-5">
      <h1 className="text-3xl font-bold text-[#002553]">Personal info</h1>
      <p className="text-[#AAABB0] mt-2">
        Please provide your name, email address, and phone number.
      </p>
      <form className="flex flex-col">
        <label className="mt-8 text-[#002553]">Name</label>
        <input
          className="mt-1 border py-2 pl-3 rounded"
          type="name"
          id="name"
          name="name"
          placeholder="please enter your name"
        />
        <label className="mt-5 text-[#002553]">Email Address</label>
        <input
          className="mt-1 border py-2 pl-3 rounded"
          type="email"
          id="email"
          name="email"
          placeholder="enter your email"
        />
        <label className="mt-5 text-[#002553]">Phone Number</label>
        <input
          className="mt-1 border py-2 pl-3 rounded"
          type="number"
          id="number"
          name="number"
          placeholder="enter your number"
        />
      </form>
      <div>
        <button
          onClick={() => handleClick("2")}
          className="ml-[315px] mt-[100px] px-7 py-3 rounded-lg text-white bg-[#002553df]"
        >
          Next Step
        </button>
      </div>
    </div>
  );
};

export default Personal;
