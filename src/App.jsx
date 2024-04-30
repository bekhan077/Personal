import React from "react";
import { Sitebar } from "./components";
import { Signup } from "./components";

const App = () => {
  return (
    <div className="container mx-auto">

    <div className="flex border pl-4 py-4 relative w-[70%] mx-auto  rounded-[15px] shadow-[box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;]">
      <Sitebar />
      <Signup />
    </div>
    </div>
  );
};

export default App;
